const PeopleModel = {
    _objects: [
        {
            id: 1,
            firstname: "Sebastian",
            lastname: "Vogt",
            birthday: "27.02.1981",
        },
        { id: 2, firstname: "Ute", lastname: "Meusel", birthday: "27.07.1980" },
        {
            id: 3,
            firstname: "Günther",
            lastname: "Vogt",
            birthday: "27.08.2016",
        },
        { id: 4, firstname: "Joel", lastname: "Vogt", birthday: "15.12.2006" },
        { id: 5, firstname: "Noah", lastname: "Vogt", birthday: "05.12.2008" },
    ],

    all() {
        return [...this._objects];
    },

    findById(id) {
        return this._objects.find((item) => item.id === id);
    },
};

module.exports = PeopleModel;
