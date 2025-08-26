import { Router } from "express";
import { __dirname } from "../rootDir.js";
import path from "node:path";

const PUBLIC_PATH = path.join(__dirname, "public");

const links = [
    {
        href: "/about",
        text: "About"
    },
    {
        href: "/contact",
        text: "Contact Us"
    }
];

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
});

indexRouter.get("/about", (req, res) => {

    res.sendFile("about.html", { root: PUBLIC_PATH });
});

indexRouter.get("/contact", (req, res) => {

    res.render("contact", {links: links});
});

indexRouter.get("/{*splat}", (req, res) => {

    res.status(404).sendFile("error.html", { root: PUBLIC_PATH });
});

export default indexRouter;