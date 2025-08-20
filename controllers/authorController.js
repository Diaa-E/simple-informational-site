import { getAuthorById as getAuthorByIdDB } from "../db.js";

async function getAuthorById(req, res)
{
    const { authorId } = req.params;

    const author = await getAuthorByIdDB(authorId);

    if (!author)
    {
        res.status(404).send(`Author Not Found (ID: ${authorId})`);
        return;
    }

    res.send(`Author Name: ${author.name}`);
}

export { getAuthorById };