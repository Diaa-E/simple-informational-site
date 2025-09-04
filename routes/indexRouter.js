import { Router } from "express";
import { __dirname } from "../rootDir.js";
import CustomNotFoundError from "../errors/customBotFoundError.js";
import links from "../utils/links.js";

const indexRouter = Router();

indexRouter.get("/", (req, res) => {

    res.render("index", { message: "Rendered EJS", links: links});
})
.get("/about", (req, res) => {

    res.render("about", {links: links});
})
.get("/contact", (req, res) => {

    res.render("contact", {links: links});
})
.route("/{*splat}", (req, res) => {

    throw new CustomNotFoundError(`Page Not Found`);
});

export default indexRouter;