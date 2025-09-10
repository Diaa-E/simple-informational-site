import { Router } from "express";
import logTime from "../utils/logTime.js";
import { addNewAuthor, getAllAuthors, getAuthorById } from "../controllers/authorController.js";
import CustomNotFoundError from "../errors/customBotFoundError.js";
import links from "../utils/links.js";

const authorRouter = Router();

authorRouter.use(logTime);

authorRouter.get("/", getAllAuthors)
    .post("/new", addNewAuthor)
    .get("/new", (req, res) => {

        res.render("addAuthor", { links: links, error: null, data: { name: "", bio: "" } })
    })
    .get("/:authorId", getAuthorById)
    .all("/{*splat}", (req, res) => {

        throw new CustomNotFoundError("Page not Found");
    });

export default authorRouter;