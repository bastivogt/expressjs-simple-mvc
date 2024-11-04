class Route {
    constructor(name, pattern, method, controller) {
        this.name = name;
        this.pattern = pattern;
        this.method = method;
        this.controller = controller;
    }
}

module.exports = Route;


