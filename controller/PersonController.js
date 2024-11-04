const PersonModel = require("../models/PersonModel");

const PersonController = {
    async index_get(req, res) {
        const people = await PersonModel.findAll({
            where: {
                published: true,
            },
        });
        console.log("people", people);
        res.render("frontend/people/index", {
            title: "People",
            people: people,
        });
    },

    async detail_get(req, res, next) {
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
            return res.render("frontend/people/detail", {
                title: `${person.firstname} ${person.lastname}`,
                person: person,
            });
        }
        return next();
    },


    // admin
    adminCreate_get(req, res) {
        //console.log(req.method);
        console.log(req.method);
        res.render("admin/person/create", {
            title: "Person create"
        });

    },

    adminCeate_post(req, res) {
        console.log(req.method);
        console.log(req.body);
        const body = req.body;
        if(body.firstname && body.lastname && body.birthday) {
            const person = PersonModel.create({
                firstname: body.firstname,
                lastname: body.lastname,
                birthday: body.birthday
            });
            res.redirect("/admin")
        }
    }
};

module.exports = PersonController;
