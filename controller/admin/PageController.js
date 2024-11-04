const PageController = {
    index(req, res) {
        res.render("admin/page", {
            title: "Admin index",
            content: "Admin content for index..."
        });
    },
};

module.exports = PageController;
