import { Router } from "express";
import links from "../utils/links.js";
import CustomNotFoundError from "../errors/customBotFoundError.js";
import { sendNewMessage } from "../controllers/contactController.js";

const contactRouter = Router();

contactRouter.get("/", (req, res) => {

        res.render("contact", { links: links, error: null, data: { name: "", email: "", message: "" }, success: false });
    })
    .post("/", sendNewMessage)
    .all("/{*splat}", (req, rest) => {

        throw new CustomNotFoundError("Page Not Found")
    });

export default contactRouter;