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

    res.render("infoPage", { links: links, entry: author});
}

async function getAllAuthors(req, res)
{
    const allAuthors = await getAllAuthorsDB();

    if (!allAuthors)
    {
        throw new CustomNotFoundError(``);
    }

    res.render("authors", { links: links, allAuthors: allAuthors });
}

export { getAuthorById, getAllAuthors };