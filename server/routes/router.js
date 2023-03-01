const express = require('express');
const route = express.Router();

const controller_four = require('../controller/controller-fournisseur');

//Required
const fournisseurServices = require('../services/render-fournisseur');

const controllerClient = require('../controller/controller_client')
const controller_vendeur = require('../controller/controller_vendeur')
const controller_user = require("../controller/controller-user");

const clientServices = require('../services/render-clients');
const sellServices = require('../services/render-vendeur');
const userServices = require("../services/render-user");

// Routes
route.get('/', (req, res) => {
    res.render("index");
})

// --- Articles ---
require("./routes_articles")(route);


//Fournisseur
route.get('/fournisseur/add', fournisseurServices.add_fournisseur);
route.get('/fournisseur/update/:id', fournisseurServices.show_data);
// route.get('/fournisseur/update', fournisseurServices.show_data);

// Client
route.get('/clients/add',clientServices.add_client);


// Sells

// routes
route.get('/sell/new', sellServices.new_sell);
route.get('/sell/veiw/:id', controller_vendeur.findAllSellDetails);

// API

    
//Fournisseur
route.post('/api/fournisseur', controller_four.create);
route.post('/api/fournisseur/maj', controller_four.update);

route.get('/api/fournisseur', controller_four.find);
route.get('/api/fournisseur/del/:id', controller_four.delete);

route.get('/api/fournisseur/fetch/:id', controller_four.findOne);

// route.put('/api/fournisseur/:id', controller_four.update);
// route.delete('/api/fournisseur/:id', controller_four.delete);

route.post('/api/sells', controller_vendeur.create);
route.get('/api/sells', controller_vendeur.findAllSells);

// users
route.get("/user", userServices.user);
route.get("/update_user", userServices.update);

// API users
route.post("/api/new_user", controller_user.create);
route.get("/api/user", controller_user.findAll);
route.post("/api/users", controller_user.update);

module.exports = route