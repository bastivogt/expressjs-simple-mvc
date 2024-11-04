const express = require("express");

const PageController = require("./../controller/admin/PageController");
const PersonController = require("../controller/admin/PersonController");

const router = express.Router();

// router.get("/", (req, res) => {
//     res.render("./admin/index", {
//         layout: "./admin/layouts/default",
//         title: "Admin index",
//     });
// });

router.get("/", PageController.index);
router.get("/person/create", PersonController.create);
router.post("/person/create", PersonController.create);

module.exports = router;
