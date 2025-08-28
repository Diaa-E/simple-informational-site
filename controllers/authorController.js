import { getAuthorById as getAuthorByIdDB } from "../db.js";
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

    res.render("authors", { links: links, author: { name: author.name }});
}

export { getAuthorById };