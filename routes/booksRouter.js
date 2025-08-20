import { Router } from "express";

const booksRouter = Router();

booksRouter.route("/")
    .get((req, res) => {

        res.send("GET All Books");
    })
    .post((req, res) => {

        res.send("POST all Books")
    });

booksRouter.route("/:bookId")
    .get((req, res) => {

        const { bookId } = req.params;
        res.send(`GET Book ID: ${bookId}`);
    })
    .post((req, res) => {

        const { bookId } = req.params;
        res.send(`POST Book ID: ${bookId}`);
    });

export default booksRouter;