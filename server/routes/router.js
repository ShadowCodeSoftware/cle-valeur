const express = require('express');
const route = express.Router();
const controller = require('../controller/controller-article');
const controller_four = require('../controller/controller-fournisseur');

//Required
const articleServices = require('../services/render-articles');
const fournisseurServices = require('../services/render-fournisseur');

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

//Fournisseur
route.get('/fournisseur/add', fournisseurServices.add_fournisseur);
// Client

// API
    //Articles
        route.post('/api/articles', controller.create);
        route.get('/api/articles', controller.findAll);
    
    //Fournisseur
        route.post('/api/fournisseur', controller_four.create);


module.exports = route