const PersonModel = require("../../models/PersonModel");

const PersonController = {
    create(req, res) {
        //console.log(req.method);
        if(req.method === "GET") {
            console.log(req.method);
            res.render("admin/person/create", {
                title: "Person create"
            });
        }

        if(req.method === "POST") {
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

    }
}

module.exports = PersonController;