const express = require('express');
const route = express.Router();
const controller = require('../controller/controller-article')

const controller_vendeur = require('../controller/controller_vendeur')

const articleServices = require('../services/render-articles');

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

// API
route.post('/api/articles', controller.create);
route.get('/api/articles', controller.findAll);


// Sells

// routes
route.get('/sell/veiw/:id', controller_vendeur.findAllSellDetails);
route.get('/sell/veiw/del/:id', controller_vendeur.delSell);
route.post('/api/sells', controller_vendeur.create);
route.get('/api/sells', controller_vendeur.findAllSells);

module.exports = route