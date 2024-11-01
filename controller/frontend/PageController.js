const settings = require("./../../settings");

const PageController = {
    index(req, res) {
        res.render("frontend/index", {
            title: "Index",
            greeting: "Hello world!",
        });
    },

    kontakt(req, res) {
        res.render("frontend/kontakt", {
            layout: "frontend/layouts/test",
            title: settings.getTitle("Kontakt"),
        });
    },

    impressum(req, res) {
        console.log(req.method);
        if (req.method === "GET") console.log("METHOD GET");
        res.render("frontend/impressum", {
            title: "Impressum",
            firstname: "Seppel",
            lastname: "Vogt",
        });
    },
};

module.exports = PageController;
