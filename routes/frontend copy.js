const express = require("express");

const settings = require("./../settings");

const PageController = require("../controller/PageController");
//const PeopleController = require("../controller/frontend/PeopleController");
const PersonController = require("../controller/PersonController");


const router = express.Router();

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

router.get("/kontakt", PageController.getKontakt);
router.get("/impressum", PageController.getImpressum);
// router.get("/people", PeopleController.index);
// router.get("/person/:id", PeopleController.single);
router.get("/people", PersonController.getIndex);
router.get("/person/:id", PersonController.getDetail);

router.get("/", PageController.getIndex);

module.exports = router;
