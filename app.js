import express from "express";
import dotenv from "dotenv";
import { __dirname } from "./rootDir.js";
import indexRouter from "./routes/indexRouter.js";
import authorRouter from "./routes/authorRouter.js";
import booksRouter from "./routes/booksRouter.js";
import path from "node:path";

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

dotenv.config();
const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "public")))
app.use("/books", booksRouter);
app.use("/authors", authorRouter);
app.use("/", indexRouter);
app.use((err, req, res, next) => {

    console.error(err);
    res.status(err.statusCode || 500).render("error", {links: links});
});

app.listen(PORT, (error) => {

    if (error)
    {
        throw error
    }
});