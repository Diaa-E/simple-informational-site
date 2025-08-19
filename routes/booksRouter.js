import { Router } from "express";

const booksRouter = Router();

booksRouter.get("/", (req, res) => {

    res.send("All Books");
});

booksRouter.get("/:bookId", (req, res) => {

    const { bookId } = req.params;
    res.send(`Book ID: ${bookId}`);
});

export default booksRouter;