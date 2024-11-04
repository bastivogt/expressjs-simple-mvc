const frontendRoutesManager = require("../../routes/frontend");
const adminRoutesManager = require("../../routes/admin");


class RouteHelper {
    static url(name, param = null) {
        const routes = [
            adminRoutesManager.getRoutePattern(name, param),
            frontendRoutesManager.getRoutePattern(name, param)
        ];

        for(let route of routes) {
            if(route) {
                return route;
            }
        }
        return false;
    }
}

module.exports = RouteHelper;