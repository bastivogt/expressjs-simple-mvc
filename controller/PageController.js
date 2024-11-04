const settings = require("./../settings");

const PageController = {
    index_get(req, res) {
        res.render("frontend/page", {
            title: settings.getTitle("Index"),
            content: "Hello world!",
        });
    },

    kontakt_get(req, res) {
        res.render("frontend/page", {
            //layout: "frontend/layouts/test",
            title: settings.getTitle("Kontakt"),
            content: "Content for contact"
        });
    },

    impressum_get(req, res) {
        console.log(req.method);
        if (req.method === "GET") console.log("METHOD GET");
        res.render("frontend/page", {
            title: "Impressum",
            content: "Impressum..."

        });
    },


    // admin
    adminIndex_get(req, res) {
        res.render("admin/page", {
            title: "Admin index",
            content: "Admin content for index..."
        });
    },
};

module.exports = PageController;
