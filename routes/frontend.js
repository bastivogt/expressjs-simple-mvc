const express = require("express");

const settings = require("./../settings");

const PageController = require("../controller/frontend/PageController");
const PeopleController = require("../controller/frontend/PeopleController");

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

router.get("/kontakt", PageController.kontakt);
router.get("/impressum", PageController.impressum);
router.get("/people", PeopleController.index);
router.get("/person/:id", PeopleController.single);
router.get("/", PageController.index);

module.exports = router;
