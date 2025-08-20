import express from "express";
import dotenv from "dotenv";
import { __dirname } from "./rootDir.js";
import indexRouter from "./routes/indexRouter.js";
import authorRouter from "./routes/authorRouter.js";
import booksRouter from "./routes/booksRouter.js";

dotenv.config();
const app = express();

const PORT = process.env.PORT || 3000;

app.use("/books", booksRouter);
app.use("/authors", authorRouter);
app.use("/", indexRouter);
app.use((err, req, res, next) => {

    console.error(err);
    res.status(500).send(err);
});

app.listen(PORT, (error) => {

    if (error)
    {
        throw error
    }
});