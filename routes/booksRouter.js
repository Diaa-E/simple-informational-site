import { Router } from "express";
import logTime from "../utils/logTime.js";
import { addNewBook, getAllBooks, getBookById } from "../controllers/bookController.js";
import CustomNotFoundError from "../errors/customBotFoundError.js";
import links from "../utils/links.js";

const booksRouter = Router();

booksRouter.use(logTime);

booksRouter.get("/", getAllBooks)
    .get("/new", (req, res) => {
        
        res.render("addBook", { links: links, error: null, data: {title: "", bio: ""}})
    })
    .post("/new", addNewBook)
    .get("/:bookId", getBookById)
    .all("/{*splat}", (req, res) => {

        throw new CustomNotFoundError("Page not Found");
    });

export default booksRouter;