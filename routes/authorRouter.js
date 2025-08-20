import { Router } from "express";
import logTime from "../logTime.js";

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
    .get((req, res) => {

        const { authorId } = req.params;
        res.send(`GET Author ID: ${authorId}`);
    })
    .post((req, res) => {

        const { authorId } = req.params;
        res.send(`POST Author ID: ${authorId}`);
    });

export default authorRouter;