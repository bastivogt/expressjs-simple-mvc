const frontendRoutesManager = require("../../routes/frontend");
const adminRoutesManager = require("../../routes/admin");
const RoutesManager = require("../routes/RoutesManager");


class RouteHelper {
    // static url(name, param = null) {
    //     const routes = [
    //         adminRoutesManager.getRoutePattern(name, param),
    //         frontendRoutesManager.getRoutePattern(name, param)
    //     ];

    //     for(let route of routes) {
    //         if(route) {
    //             return route;
    //         }
    //     }
    //     return false;
    // }
    static url(name, param = null) {
        const rm = RoutesManager.merge(adminRoutesManager, frontendRoutesManager);
        return rm.getRoutePattern(name, param);
    }
}

module.exports = RouteHelper;