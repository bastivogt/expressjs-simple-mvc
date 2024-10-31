module.exports = {
    PAGE_TITLE: "Test",
    getTitle(siteTitle = "") {
        return `${this.PAGE_TITLE} - ${siteTitle}`;
    },
};
