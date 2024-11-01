const PersonModel = require("../../models/PersonModel");

const PersonController = {
    async index(req, res) {
        const people = await PersonModel.findAll({
            where: {
                published: true,
            },
        });
        console.log("people", people);
        res.render("frontend/person/index", {
            title: "People",
            people: people,
        });
    },

    async single(req, res, next) {
        console.log(req.params);
        const id = parseInt(req.params.id);
        console.log(id);
        if (!id || id === NaN) {
            return next();
        }
        //const person = await PersonModel.findByPk(id);
        const person = await PersonModel.findOne({
            where: {
                id: id,
                published: true,
            },
        });
        if (person) {
            return res.render("frontend/person/single", {
                title: `${person.firstname} ${person.lastname}`,
                person: person,
            });
        }
        return next();
    },
};

module.exports = PersonController;
