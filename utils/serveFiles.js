import url from "node:url";
import path from "node:path";
import fs from "node:fs/promises";
import { __dirname } from "../rootDir.js";


export default async function serveFile(req, res, fileType, fileName)
{
    const mimes = {
        "html": "text/html",
        "css": "text/css",
    }

    if (!mimes.hasOwnProperty(fileType))
    {
        throw new Error("Invalid file type: " + fileType);
    }

    const filepath = path.join(__dirname, "public", fileName);
    res.writeHead(200, "Content-Type", mimes[fileType]);
    const data = await fs.readFile(filepath);
    res.write(data);
    res.end();
}