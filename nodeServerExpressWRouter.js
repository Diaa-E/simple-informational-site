import express from "express";
import dotenv from "dotenv";
import { __dirname } from "./rootDir.js";
import indexRouter from "./routes/indexRouter.js";

dotenv.config();
const app = express();

const PORT = process.env.PORT || 3000;

app.use("/", indexRouter);

app.listen(PORT, (error) => {

    if (error)
    {
        throw error
    }
});