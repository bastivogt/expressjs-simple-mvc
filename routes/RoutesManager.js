const express = require("express");
class Route {
    constructor(name, pattern, method, controller) {
        this.name = name;
        this.pattern = pattern;
        this.method = method;
        this.controller = controller;
    }
}

class RoutesManager {

    constructor() {
        this._routes = [];
        this._router = express.Router();

    }

    clear() {
        this._routes = [];
    }


    hasRoute(name) {
        for(let route of this._routes) {
            if(route.name === name) {
                return true;
            }
        }
        return false;
    }


    addRoute(route) {
        if(!this.hasRoute(route.name)) {
            this._routes.push(route);
            return true;
        }
        return false;
    }

    removeRoute(name) {
        if(this.hasRoute(name)) {
            for(let i = 0; i < this._routes.length; i ++) {
                if(this._routes[i].name === name) {
                    this._routes[i].splice(i, 1);
                    return true;
                }
            }
        }
        return false;
    }

    getRoute(name, param = null) {
        if(this.hasRoute(name)) {
            for(let i = 0; i < this._routes.length; i ++) {
                if(this._routes[i].name === name) {
                    return this._routes[i];
                }
            }
        }
        return false;
    }


    get routes() {
        return [...this._routes];
    }


    createRouter() {
        this._routes.forEach(route => {
            this._router[route.method](route.pattern, route.controller);
        });
    }

    getRouter() {
        return this._router;
    }
}


module.exports = {
    Route,
    RoutesManager
}