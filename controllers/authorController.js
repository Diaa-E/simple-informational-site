import { getAuthorById as getAuthorByIdDB, getAllAuthors as getAllAuthorsDB } from "../db.js";
import CustomNotFoundError from "../errors/customBotFoundError.js";
import links from "../utils/links.js";

async function getAuthorById(req, res)
{
    const { authorId } = req.params;

    const author = await getAuthorByIdDB(authorId);

    if (!author)
    {
        throw new CustomNotFoundError(`Author Not Found (ID: ${authorId})`);
    }

    res.render("authors", { links: links, author: { name: author.name }, allAuthors: null });
}

async function getAllAuthors(req, res)
{
    const allAuthors = await getAllAuthorsDB();

    if (!allAuthors)
    {
        throw new CustomNotFoundError(``);
    }

    res.render("authors", { links: links, author: null, allAuthors: allAuthors });
}

export { getAuthorById, getAllAuthors };