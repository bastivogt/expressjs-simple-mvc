module.exports = {
    redirectTo404(res) {
        res.status(404).render("404", {
            title: "404 Page not found",
        });
    },
};
