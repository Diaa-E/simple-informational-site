import { getBookById as getAuthorByIdDB } from "../db.js";
import CustomNotFoundError from "../errors/customBotFoundError.js";

async function getBookById(req, res)
{
    const { bookId } = req.params;

    const book = await getAuthorByIdDB(bookId);

    if (!book)
    {
        throw new CustomNotFoundError(`Book Not Found (ID: ${bookId})`);
    }

    res.send(`Book Name: ${book.name}`);
}

export { getBookById };