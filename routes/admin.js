const Route = require("../sevo/routes/Route");
const RoutesManager = require("../sevo/routes/RoutesManager");

const PageController = require("./../controller/PageController");
const PersonController = require("../controller/PersonController");




const rm = new RoutesManager();

rm.addRoute(new Route("admin:index", "/admin", "get", PageController.adminIndex_get));
rm.addRoute(new Route("admin:person:create:get", "/admin/person/create", "get", PersonController.adminCreate_get));
rm.addRoute(new Route("admin:person:create:post", "/admin/person/create", "post", PersonController.adminCeate_post));

rm.createRouter();

module.exports = rm;
