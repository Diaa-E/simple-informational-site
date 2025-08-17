import express from "express";
import dotenv from "dotenv";
import { __dirname } from "./rootDir.js";
import path from "node:path";

dotenv.config();
const app = express();

const PORT = process.env.PORT || 3000;

const PUBLIC_PATH = path.join(__dirname, "public");

app.get("/", (req, res) => {

    res.sendFile("index.html", {root: PUBLIC_PATH});
});

app.get("/about", (req, res) => {

    res.sendFile("about.html", {root: PUBLIC_PATH});
});

app.get("/contact", (req, res) => {

    res.sendFile("contact.html", {root: PUBLIC_PATH});
});

app.listen(PORT, (error) => {

    if (error)
    {
        throw error
    }
});