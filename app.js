// imports
const { name } = require("ejs");
const express = require("express");

const bodyParser = require("body-parser");


const logger = require("./middleware/requestLogger");

const frontendRouter = require("./routes/frontend");
const adminRouter = require("./routes/admin");

const server = express();
const PORT = 3000;
const HOST = "http://localhost";

// Middleware
server.use(express.static("public"));
server.use(bodyParser.urlencoded())
// custom
server.use(logger.requestLogger);

// template engine
// npm i ejs
server.set("view engine", "ejs");
// default is "./views"
server.set("views", "./views");

// routes
server.use("/admin", adminRouter);
server.use(frontendRouter);

// 404
server.use((req, res) => {
    res.status(404).render("404", {
        title: "404 Page not found",
    });
});

server.listen(PORT, () => {
    console.log(`Server listening on ${HOST}:${PORT}`);
});
