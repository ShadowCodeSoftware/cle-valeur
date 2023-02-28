// Routes relatives aux utilisateurs
const render = require("../services/render-user")

module.exports = (route) => {
    route.get("/users", render.user)
}