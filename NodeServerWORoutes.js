import http from "node:http";
import path from "node:path";
import url from "node:url";
import fs from "node:fs/promises";

const PORT = process.env.PORT || 3000;
const HOSTNAME = process.env.HOSTNAME || "127.0.0.1";

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const server = http.createServer( async (req, res) => {

    let status;
    let filepath;
    let contentType;

    if (req.method === "GET")
    {
        switch (req.url)
        {
            case "/":
                status = 200;
                contentType = "text/html";
                filepath = path.join(__dirname, "public", "index.html");
                break;
            
            case "/about":
                status = 200;
                contentType = "text/html";
                filepath = path.join(__dirname, "public", "about.html");
                break;

            case "/contact":
                status = 200;
                contentType = "text/html";
                filepath = path.join(__dirname, "public", "contact.html");
                break;

            case "/style.css":
                status = 200;
                contentType = "text/css";
                filepath = path.join(__dirname, "public", "style.css");
                break;

            default: 
                status = 404;
                contentType = "text/html";
                filepath = path.join(__dirname, "public", "error.html");
        }

    }

    res.writeHead(status, "Content-Type", contentType);
    const data = await fs.readFile(filepath);
    res.write(data);
    res.end();
});

server.listen(PORT, HOSTNAME, () => {

    console.log(`Server running at: http://${HOSTNAME}:${PORT}`);
});