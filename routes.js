const express = require("express");

const settings = require("./settings");

const router = express.Router();

// GET /

router.get("/kontakt", (req, res) => {
    res.render("kontakt", {
        title: settings.getTitle("Kontakt"),
        layout: "./layouts/test",
    });
});

router.get("/", (req, res) => {
    res.render("index", {
        title: settings.getTitle("Index"),
        greeting: "Hello world!",
        route: req.path,
    });
});

router.use((req, res) => {
    res.status(404).render("404", {
        title: "404 Page not found",
    });
});

module.exports = router;
