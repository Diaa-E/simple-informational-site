import { Router } from "express";
import logTime from "../utils/logTime.js";
import { getAuthorById } from "../controllers/authorController.js";
import links from "../utils/links.js";

const authorRouter = Router();

authorRouter.use(logTime);

authorRouter.route("/")
    .get((req, res) => {

        res.render("authors", { links: links });
    });

authorRouter.route("/:authorId")
    .get(getAuthorById)
    .post((req, res) => {

        const { authorId } = req.params;
        res.send(`POST Author ID: ${authorId}`);
    });

export default authorRouter;