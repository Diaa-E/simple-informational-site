import { Router } from "express";
import logTime from "../utils/logTime.js";
import { getAllAuthors, getAuthorById } from "../controllers/authorController.js";
import links from "../utils/links.js";

const authorRouter = Router();

authorRouter.use(logTime);

authorRouter.get("/", getAllAuthors)
    .get("/:authorId", getAuthorById)
    .all("/{*splat}", (req, res) => {

        throw new CustomNotFoundError("Page not Found");
    });

export default authorRouter;