import { getBookById as getAuthorByIdDB, getAllBooks as getAllBooksDB } from "../db.js";
import CustomNotFoundError from "../errors/customBotFoundError.js";
import links from "../utils/links.js";

async function getBookById(req, res)
{
    const { bookId } = req.params;

    const book = await getAuthorByIdDB(bookId);

    if (!book)
    {
        throw new CustomNotFoundError(`Book Not Found (ID: ${bookId})`);
    }

    res.render("infoPage", { links: links, entry: book });
}

async function getAllBooks(req, res)
{
    const allBooks = await getAllBooksDB();

    if (!allBooks)
    {
        throw new CustomNotFoundError("");
    }

    res.render("books", { links: links,  allBooks: allBooks.sort((a, b) => a > b ? 1 : -1) });
}

export { getBookById, getAllBooks };