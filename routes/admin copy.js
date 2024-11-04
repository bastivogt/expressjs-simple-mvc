const express = require("express");

const PageController = require("./../controller/PageController");
const PersonController = require("../controller/PersonController");

const router = express.Router();

// router.get("/", (req, res) => {
//     res.render("./admin/index", {
//         layout: "./admin/layouts/default",
//         title: "Admin index",
//     });
// });

router.get("/", PageController.adminGetIndex);
// router.get("/person/create", PersonController.create);
// router.post("/person/create", PersonController.create);
router.get("/person/create", PersonController.adminGetCreate);
router.post("/person/create", PersonController.adminPostCreate);

module.exports = router;

const routes = [
    {name: "admin:index", methode: "get", pattern: "/", controller: PageController.adminGetIndex},
    {name: "admin:person:create.get", methode: "get", pattern: "/person/create", controller: PersonController.adminGetCreate},
    {name: "admin:person:create:post", methode: "post", pattern: "/person/create", controller: PersonController.adminPostCreate}
]

routes.forEach(route => {
    router[route.methode](route.pattern, route.controller);
});

function getRoute(name) {
    return routes.find(route => route.name === name);
}

