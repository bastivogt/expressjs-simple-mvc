const express = require("express");

const PageController = require("./../controller/admin/PageController");

const router = express.Router();

// router.get("/", (req, res) => {
//     res.render("./admin/index", {
//         layout: "./admin/layouts/default",
//         title: "Admin index",
//     });
// });

router.get("/", PageController.index);

module.exports = router;
