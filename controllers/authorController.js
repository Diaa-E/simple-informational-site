import DB from "../db.js";
import CustomNotFoundError from "../errors/customBotFoundError.js";
import links from "../utils/links.js";
import { body, validationResult } from "express-validator";

async function getAuthorById(req, res)
{
    const { authorId } = req.params;

    const author = await DB.getAuthorById(authorId);

    if (!author)
    {
        throw new CustomNotFoundError(`Author Not Found (ID: ${authorId})`);
    }

    res.render("infoPage", { links: links, entry: author, activeTab: "Authors" });
}

async function getAllAuthors(req, res)
{
    const allAuthors = await DB.getAllAuthors();

    if (!allAuthors)
    {
        throw new CustomNotFoundError(``);
    }

    res.render("authors", { links: links, allAuthors: allAuthors.sort((a, b) => a.name > b.name ? 1 : -1) });
}

async function queryAuthors(req, res)
{
    const { name } = req.query;

    const authors = await DB.queryAuthor(name);

    console.log(authors)

    res.render("authors", { links: links, allAuthors: authors.sort((a, b) => a.name > b.name ? 1 : -1), keyword: name});
}

const validateAuthor = [

    body("name").trim()
    .notEmpty().withMessage("Name cannot be empty.")
    .isAlpha("en-US", { ignore: " " }).withMessage("Name must contain only letters.")
    .isLength({ min: 2 }).withMessage("Name must be at least 2 characters long."),
    body("bio").trim()
    .notEmpty().withMessage("Bio cannot be empty.")
    .isLength({ min: 50 }).withMessage("Bio must be at least 50 characters long.")
];

const addNewAuthor = [

    validateAuthor,
    async (req, res) => {

        const errors = validationResult(req);

        if (!errors.isEmpty())
        {
            return res.status(400).render(
                "addAuthor", 
                { links: links, error: errors.array()[0], data: { name: req.body.name, bio: req.body.bio } });
        }

        const { name, bio } = req.body;

        await DB.addAuthor(name, bio);
        res.redirect("/authors");
    }
];

export { getAuthorById, getAllAuthors, queryAuthors, addNewAuthor };