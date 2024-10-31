// imports
const { name } = require("ejs");
const express = require("express");
const ejsLayouts = require("express-ejs-layouts");

const settings = require("./settings");
const logger = require("./middleware/requestLogger");
const router = require("./routes");

const frontendRouter = require("./routes/frontend");
const adminRouter = require("./routes/admin");

console.log(logger.requestLogger);

const server = express();
const PORT = 3000;
const HOST = "http://localhost";

// Middleware
server.use(express.static("public"));
// custom
server.use(logger.requestLogger);

// layouts
server.use(ejsLayouts);
server.set("layout", "./frontend/layouts/default");
// template engine
// npm i ejs
server.set("view engine", "ejs");
// default is "./views"
server.set("views", "./views");

// routes
//server.use(router);
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
