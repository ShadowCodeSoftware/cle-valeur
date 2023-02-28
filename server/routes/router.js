const express = require('express');
const route = express.Router();
const controller = require('../controller/controller-article')
const controllerClient = require('../controller/controller_client')

const controller_vendeur = require('../controller/controller_vendeur')

const articleServices = require('../services/render-articles');
const clientServices = require('../services/render-clients');

const sellServices = require('../services/render-vendeur');

// Routes
route.get('/', (req, res) => {
    res.render("index");
})

// Articles
route.get('/articles/add', articleServices.add_article);
route.get('/articles/stock', articleServices.show_articles);

// Approvisionnement
route.get('/articles/arrivee', (req, res) => {
    res.render("screens/boutique/arrivee");
})


// Client
route.get('/clients/add',clientServices.add_client);



// API
route.post('/api/articles', controller.create);
route.get('/api/articles', controller.findAll);


// Sells

// routes
route.get('/sell/new', sellServices.new_sell);
route.get('/sell/veiw/:id', controller_vendeur.findAllSellDetails);

// API
route.post('/api/sells', controller_vendeur.create);
route.get('/api/sells', controller_vendeur.findAllSells);

// Users
require("../routes/route-user")(route);

module.exports = route