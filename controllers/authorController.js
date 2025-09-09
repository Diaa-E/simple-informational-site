import DB from "../db.js";
import CustomNotFoundError from "../errors/customBotFoundError.js";
import links from "../utils/links.js";

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

export { getAuthorById, getAllAuthors };