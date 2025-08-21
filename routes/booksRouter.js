import { Router } from "express";
import logTime from "../utils/logTime.js";
import { getBookById } from "../controllers/bookController.js";

const booksRouter = Router();

booksRouter.use(logTime);

booksRouter.route("/")
    .get((req, res) => {

        res.send("GET All Books");
    })
    .post((req, res) => {

        res.send("POST all Books")
    });

booksRouter.route("/:bookId")
    .get(getBookById)
    .post((req, res) => {

        const { bookId } = req.params;
        res.send(`POST Book ID: ${bookId}`);
    });

export default booksRouter;