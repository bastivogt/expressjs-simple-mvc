const PageController = {
    index(req, res) {
        res.render("admin/index", {
            layout: "admin/layouts/default",
            title: "Admin index",
        });
    },
};

module.exports = PageController;
