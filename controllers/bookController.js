import DB from "../db.js";
import CustomNotFoundError from "../errors/customBotFoundError.js";
import links from "../utils/links.js";
import { body, validationResult } from "express-validator";

async function getBookById(req, res)
{
    const { bookId } = req.params;

    const book = await DB.getBookById(bookId);

    if (!book)
    {
        throw new CustomNotFoundError(`Book Not Found (ID: ${bookId})`);
    }

    res.render("infoPage", { links: links, entry: book , activeTab: "Books"});
}

async function getAllBooks(req, res)
{
    const allBooks = await DB.getAllBooks();

    if (!allBooks)
    {
        throw new CustomNotFoundError("");
    }

    res.render("books", { links: links,  allBooks: allBooks.sort((a, b) => a.name > b.name ? 1 : -1) });
}

async function queryBook(req, res)
{
    const { title } = req.query;

    const books = await DB.queryBook(title);

    res.render("books", { links: links, allBooks: books.sort((a, b) => a.name > b.name ? 1 : -1), keyword: req.query.title })
}

const validateBook = [
    body("title").trim()
    .notEmpty().withMessage("Title cannot be empty.")
    .isAlpha("en-US", { ignore: " " }).withMessage("Title must contain only characters.")
    .isLength({ min: 2 }).withMessage("Title must be at least 2 characters long."),
    body("bio").trim()
    .notEmpty().withMessage("Bio cannot be empty.")
    .isLength({ min: 50 }).withMessage("Bio must be at least 50 characters long.")
];

const addNewBook = [
    validateBook,
    async (req, res) => {

        const errors = validationResult(req);

        if (!errors.isEmpty())
        {
            return res.status(400).render(
                "addBook", 
                { links: links, error: errors.array()[0], data: { title: req.body.title, bio: req.body.bio} }
            );
        }

        const { title, bio } = req.body;

        await DB.addBook(title, bio);
        res.redirect("/books");
    }
]

export { getBookById, getAllBooks, addNewBook, queryBook };