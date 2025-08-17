import serveFile from "../utils/serveFiles.js";

export const routes = {

    "/": {
        "GET": (req, res) => {
            serveFile(req, res, "html", "index.html");
        }
    },
    "/about": {
        "GET": (req, res) => {
            serveFile(req, res, "html", "about.html");
        }
    },
    "/contact": {
        "GET": (req, res) => {
            serveFile(req, res, "html", "contact.html");
        }
    },
    "/style.css": {
        "GET": (req, res) => {
            serveFile(req, res, "css", "style.css");
        }
    },
    "notFound": (req, res) => {
        serveFile(req, res, "html", "error.html");
    },
};