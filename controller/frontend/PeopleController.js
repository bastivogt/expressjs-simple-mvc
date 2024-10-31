const PeopleModel = require("../../models/PeopleModel");
const helper = require("../../helper");

PeopleController = {
    index(req, res) {
        const people = PeopleModel.all();
        console.log(people);
        res.render("frontend/people/index", {
            title: "People",
            people,
        });
    },

    single(req, res) {
        console.log(req.params);
        const id = parseInt(req.params.id);
        const person = PeopleModel.findById(id);
        console.log("id", id);

        if (!id || id === NaN || !person) return helper.redirectTo404(res);
        res.render("frontend/people/single", {
            title: `${person.firstname} ${person.lastname}`,
            person: person,
        });
    },
};

module.exports = PeopleController;
