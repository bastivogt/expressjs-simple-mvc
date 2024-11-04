const Route = require("../sevo/routes/Route");
const RoutesManager = require("../sevo/routes/RoutesManager");

const settings = require("./../settings");

const PageController = require("../controller/PageController");
//const PeopleController = require("../controller/frontend/PeopleController");
const PersonController = require("../controller/PersonController");

// GET /

// router.get("/kontakt", (req, res) => {
//     res.render("frontend/kontakt", {
//         title: settings.getTitle("Kontakt"),
//         layout: "./frontend/layouts/test",
//     });
// });

// router.get("/", (req, res) => {
//     res.render("frontend/index", {
//         title: settings.getTitle("Index"),
//         greeting: "Hello world!",
//         route: req.path,
//     });
// });

// router.get("/kontakt", PageController.getKontakt);
// router.get("/impressum", PageController.getImpressum);
// // router.get("/people", PeopleController.index);
// // router.get("/person/:id", PeopleController.single);
// router.get("/people", PersonController.getIndex);
// router.get("/person/:id", PersonController.getDetail);

// router.get("/", PageController.getIndex);

//module.exports = router;

const rm = RoutesManager.initialize();

rm.addRoute(
    new Route("page:kontakt", "/kontakt", "get", PageController.kontakt_get)
);
rm.addRoute(
    new Route(
        "page:impressum",
        "/impressum",
        "get",
        PageController.impressum_get
    )
);
rm.addRoute(
    new Route("people:index", "/people", "get", PersonController.index_get)
);
rm.addRoute(
    new Route(
        "person:detail",
        "/person/:id",
        "get",
        PersonController.detail_get
    )
);
rm.addRoute(new Route("page:index", "/", "get", PageController.index_get));

rm.createRouter();

module.exports = rm;
