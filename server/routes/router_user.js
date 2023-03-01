const controller_user = require("../controller/controller-user");
const userServices = require("../services/render-user");

module.exports = (route) => {
    route.get("/user", userServices.user);
    route.get("/update_user", userServices.update);

    // API users
    route.post("/api/new_user", controller_user.create);
    route.get("/api/user", controller_user.findAll);
    route.post("/api/users", controller_user.update);
}