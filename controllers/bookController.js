import DB from "../db.js";
import CustomNotFoundError from "../errors/customBotFoundError.js";
import links from "../utils/links.js";

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

export { getBookById, getAllBooks };