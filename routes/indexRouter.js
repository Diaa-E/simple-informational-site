import { Router } from "express";
import { __dirname } from "../rootDir.js";
import path from "node:path";

const PUBLIC_PATH = path.join(__dirname, "public");

const indexRouter = Router();

indexRouter.get("/", (req, res) => {

    res.sendFile("index.html", { root: PUBLIC_PATH });
});

indexRouter.get("/about", (req, res) => {

    res.sendFile("about.html", { root: PUBLIC_PATH });
});

indexRouter.get("/contact", (req, res) => {

    res.sendFile("contact.html", { root: PUBLIC_PATH });
});

indexRouter.get("/{*splat}", (req, res) => {

    res.status(404).sendFile("error.html", { root: PUBLIC_PATH });
});

export default indexRouter;