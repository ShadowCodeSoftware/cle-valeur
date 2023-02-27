const express = require('express');
const route = express.Router();
const controller = require('../controller/controller-article')

const articleServices = require('../services/render-articles');

// Routes
route.get('/', (req, res) => {
    res.render("index");
})

// Articles
route.get('/articles/add', articleServices.add_article);
route.get('/articles/stock', articleServices.show_articles);
route.get('/articles/update/:id', articleServices.update_articles);

// Approvisionnement
route.get('/articles/arrivee', (req, res) => {
    res.render("screens/boutique/arrivee");
})

// Client

// API
route.post('/api/articles', controller.create);
route.get('/api/articles', controller.findAll);
route.get('/api/articles/:id', controller.findByKey);
route.get('/api/articles/del/:id', controller.delete);
route.post('/api/articles/put/:id', controller.update);

module.exports = route