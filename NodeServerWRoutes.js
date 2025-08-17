import http from "node:http";
import { routes } from "./routes/routes.js";

const PORT = process.env.PORT || 3000;
const HOSTNAME = process.env.HOSTNAME || "127.0.0.1";

const server = http.createServer((req, res) => {

    let handler = null;

    if(routes.hasOwnProperty(req.url))
    {
        if(routes[req.url].hasOwnProperty(req.method))
        {
            handler = routes[req.url][req.method.toUpperCase()];
        }
    }

    if (handler === null)
    {
        handler = routes.notFound;
    }

    handler(req, res);
});

server.listen(PORT, HOSTNAME, () => {

    console.log(`Server running at http://${HOSTNAME}:${PORT}`);
})