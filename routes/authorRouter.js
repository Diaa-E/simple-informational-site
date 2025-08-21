import { Router } from "express";
import logTime from "../utils/logTime.js";
import { getAuthorById } from "../controllers/authorController.js";

const authorRouter = Router();

authorRouter.use(logTime);

authorRouter.route("/")
    .get((req, res) => {

        res.send("GET All Authors");
    })
    .post((req, res) => {

        res.send("POST All Authors");
    });

authorRouter.route("/:authorId")
    .get(getAuthorById)
    .post((req, res) => {

        const { authorId } = req.params;
        res.send(`POST Author ID: ${authorId}`);
    });

export default authorRouter;