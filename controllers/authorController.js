import { getAuthorById as getAuthorByIdDB } from "../db.js";
import CustomNotFoundError from "../errors/customBotFoundError.js";

async function getAuthorById(req, res)
{
    const { authorId } = req.params;

    const author = await getAuthorByIdDB(authorId);

    if (!author)
    {
        throw new CustomNotFoundError(`Author Not Found (ID: ${authorId})`);
    }

    res.send(`Author Name: ${author.name}`);
}

export { getAuthorById };