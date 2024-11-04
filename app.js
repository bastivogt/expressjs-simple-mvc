// imports
const { name } = require("ejs");
const express = require("express");

const bodyParser = require("body-parser");


const logger = require("./middleware/requestLogger");

//const frontendRouter = require("./routes/frontend");
const adminRoutesManager = require("./routes/admin");
const frontendRoutesManager = require("./routes/frontend");
const RouteHelper = require("./sevo/helper/RouteHelper");



const server = express();
const PORT = 3000;
const HOST = "http://localhost";

// Middleware
server.use(express.static("public"));
server.use(bodyParser.urlencoded({extended: true}))
// custom
server.use(logger.requestLogger);

// template engine
// npm i ejs
server.set("view engine", "ejs");
// default is "./views"
server.set("views", "./views");

// routes
//server.use("/admin", adminRouter);
server.use(adminRoutesManager.getRouter());
server.use(frontendRoutesManager.getRouter());

// 404
server.use((req, res) => {
    res.status(404).render("404", {
        title: "404 Page not found",
    });
});

// <%= url("person:detail", 3) %>
server.locals.url = RouteHelper.url;


console.log(server.locals.url("page:kontakt"));
console.log(server.locals.url("person:detail", 5));

server.listen(PORT, () => {
    console.log(`Server listening on ${HOST}:${PORT}`);
});
