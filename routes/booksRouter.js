import { Router } from "express";
import logTime from "../utils/logTime.js";
import { getAllBooks, getBookById } from "../controllers/bookController.js";

const booksRouter = Router();

booksRouter.use(logTime);

booksRouter.route("/")
    .get(getAllBooks);

booksRouter.route("/:bookId")
    .get(getBookById);

export default booksRouter;