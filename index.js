import http from "node:http";
import path from "node:path";
import url from "node:url";
import fs from "node:fs/promises";

const PORT = process.env.PORT;
const HOSTNAME = process.env.HOSTNAME;

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const server = http.createServer( async (req, res) => {

    let status;
    let filepath;

    if (req.method === "GET")
    {
        switch (req.url)
        {
            case "/":
                status = 200;
                filepath = path.join(__dirname, "public", "index.html");
                break;
            
            case "/about":
                status = 200;
                filepath = path.join(__dirname, "public", "about.html");
                break;

            case "/contact":
                status = 200;
                filepath = path.join(__dirname, "public", "contact.html");
                break;

            default: 
                status = 404;
                filepath = path.join(__dirname, "public", "error.html");
        }

    }

    res.writeHead(status, "Content-Type", "text/html");
    const page = await fs.readFile(filepath);
    res.write(page);
    res.end();
});

server.listen(PORT, HOSTNAME, () => {

    console.log(`Server running at: http://${HOSTNAME}:${PORT}`);
});