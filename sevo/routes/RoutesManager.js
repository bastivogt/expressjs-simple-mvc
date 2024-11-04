const express = require("express");
const Route = require("./Route");

class RoutesManager {
    constructor() {
        this._routes = [];
        this._router = express.Router();
    }

    static merge(...params) {
        const rm = new RoutesManager();
        for (let r of params) {
            //rm._routes = rm._routes.concat(r._routes);
            rm.merge(r);
        }
        return rm;
    }

    static initialize() {
        return new RoutesManager();
    }

    clear() {
        this._routes = [];
        this._router = express.Router();
    }

    hasRoute(name) {
        for (let route of this._routes) {
            if (route.name === name) {
                return true;
            }
        }
        return false;
    }

    addRoute(route) {
        if (!this.hasRoute(route.name)) {
            this._routes.push(route);
            return true;
        }
        return false;
    }

    removeRoute(name) {
        if (this.hasRoute(name)) {
            for (let i = 0; i < this._routes.length; i++) {
                if (this._routes[i].name === name) {
                    this._routes[i].splice(i, 1);
                    return true;
                }
            }
        }
        return false;
    }

    getRoute(name) {
        if (this.hasRoute(name)) {
            for (let i = 0; i < this._routes.length; i++) {
                if (this._routes[i].name === name) {
                    return this._routes[i];
                }
            }
        }
        return false;
    }

    getRoutePattern(name, param = null) {
        const route = this.getRoute(name);
        if (!route) return false;
        if (param === null) {
            return route.pattern;
        }
        return route.pattern.split(":")[0] + `${param}`;
    }

    get routes() {
        return [...this._routes];
    }

    createRouter() {
        this._routes.forEach((route) => {
            this._router[route.method](route.pattern, route.controller);
        });
    }

    getRouter() {
        return this._router;
    }

    merge(routesManager) {
        this._routes = this._routes.concat(routesManager._routes);
    }
}

module.exports = RoutesManager;
