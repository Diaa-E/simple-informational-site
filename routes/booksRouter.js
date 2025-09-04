import { Router } from "express";
import logTime from "../utils/logTime.js";
import { getAllBooks, getBookById } from "../controllers/bookController.js";
import CustomNotFoundError from "../errors/customBotFoundError.js";

const booksRouter = Router();

booksRouter.use(logTime);

booksRouter.get("/", getAllBooks)
    .get("/:bookId", getBookById)
    .all("/{*splat}", (req, res) => {

        throw new CustomNotFoundError("Page not Found");
    });

export default booksRouter;