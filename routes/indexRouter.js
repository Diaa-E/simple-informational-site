import { Router } from "express";
import { __dirname } from "../rootDir.js";
import path from "node:path";
import CustomNotFoundError from "../errors/customBotFoundError.js";
import links from "../utils/links.js";

const PUBLIC_PATH = path.join(__dirname, "public");

const users = [
    "John",
    "Bruce",
    "Mark",
    "Adam",
    "Anita",
    "Joanna"
]

const indexRouter = Router();

indexRouter.get("/", (req, res) => {

    res.render("index", { message: "Rendered EJS", links: links, users: users });
})
.get("/about", (req, res) => {

    res.render("about", {links: links});
})
.get("/contact", (req, res) => {

    res.render("contact", {links: links});
})
.get("/{*splat}", (req, res) => {

    throw new CustomNotFoundError(`Page Not Found`);
});

export default indexRouter;