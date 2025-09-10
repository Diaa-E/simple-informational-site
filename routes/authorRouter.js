import { Router } from "express";
import logTime from "../utils/logTime.js";
import { addNewAuthor, getAllAuthors, getAuthorById, queryAuthors } from "../controllers/authorController.js";
import CustomNotFoundError from "../errors/customBotFoundError.js";
import links from "../utils/links.js";

const authorRouter = Router();

authorRouter.use(logTime);

authorRouter.get("/", (req, res) => {

        res.render("authors", { links: links, allAuthors: null, keyword: null })
    })
    .post("/new", addNewAuthor)
    .get("/new", (req, res) => {

        res.render("addAuthor", { links: links, error: null, data: { name: "", bio: "" } })
    })
    .get("/search", queryAuthors)
    .get("/:authorId", getAuthorById)
    .all("/{*splat}", (req, res) => {

        throw new CustomNotFoundError("Page not Found");
    });

export default authorRouter;