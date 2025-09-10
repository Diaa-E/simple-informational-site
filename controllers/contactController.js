import { body, validationResult } from "express-validator";
import links from "../utils/links.js";

const validateMessage = [

    body("name").trim().optional({ values: "falsy" })
    .isAlpha("en-US", { ignore: " " }).withMessage("Name must contain only letters."),
    body("email").trim()
    .notEmpty().withMessage("Email cannot be empty.")
    .isEmail().withMessage("Invalid email address."),
    body("message").trim()
    .notEmpty().withMessage("Message cannot be empty.")
];

const sendNewMessage = [
    validateMessage,
    (req, res) => {

        const errors = validationResult(req);

        if (!errors.isEmpty())
        {
            return res.status(400).render(
                "contact", 
                { 
                    links: links, 
                    error: errors.array()[0],
                    data: {
                        name: req.body.name,
                        email: req.body.email,
                        message: req.body.message
                    },
                    success: false
                }
            );
        }

        res.render("contact", { links: links, error: null, data: { name: "", email: "", message: "" }, success: true});
    }
];

export {
    sendNewMessage,
}