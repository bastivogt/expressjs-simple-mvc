const settings = require("./../../settings");

const PageController = {
    index(req, res) {
        res.render("frontend/page", {
            title: settings.getTitle("Index"),
            content: "Hello world!",
        });
    },

    kontakt(req, res) {
        res.render("frontend/page", {
            //layout: "frontend/layouts/test",
            title: settings.getTitle("Kontakt"),
            content: "Content for contact"
        });
    },

    impressum(req, res) {
        console.log(req.method);
        if (req.method === "GET") console.log("METHOD GET");
        res.render("frontend/page", {
            title: "Impressum",
            content: "Impressum..."

        });
    },
};

module.exports = PageController;
