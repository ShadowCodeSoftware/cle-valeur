const express = require('express');
const route = express.Router();

// Routes
route.get('/', (req, res) => {
    res.render("index");
})

// --- Articles ---
require("./routes_articles")(route);

// Approvisionnement
route.get('/articles/arrivee', (req, res) => {
    res.render("screens/boutique/arrivee");
})


module.exports = route