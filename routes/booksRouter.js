import { Router } from "express";
import logTime from "../utils/logTime.js";
import { getAllBooks, getBookById } from "../controllers/bookController.js";

const booksRouter = Router();

booksRouter.use(logTime);

booksRouter.route("/")
    .get(getAllBooks);

booksRouter.route("/:bookId")
    .get(getBookById)
    .post((req, res) => {

        const { bookId } = req.params;
        res.send(`POST Book ID: ${bookId}`);
    });

export default booksRouter;