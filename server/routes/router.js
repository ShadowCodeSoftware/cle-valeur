const express = require('express');
const route = express.Router();

const controllerClient = require('../controller/controller_client')

const controller_user = require("../controller/controller-user");

const clientServices = require('../services/render-clients');
const userServices = require("../services/render-user");

// Routes
route.get('/', (req, res) => {
    res.render("index");
})

// --- Articles ---
require("./routes_articles")(route);


// --- Fournisseur ---
require("./routes-fournisseur")(route);


// --- Vendeur ---
require("./router_vendeur")(route);

// Client
route.get('/clients/add',clientServices.add_client);

// users
route.get("/user", userServices.user);
route.get("/update_user", userServices.update);

// API users
route.post("/api/new_user", controller_user.create);
route.get("/api/user", controller_user.findAll);
route.post("/api/users", controller_user.update);

module.exports = route