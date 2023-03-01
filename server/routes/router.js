const express = require('express');
const route = express.Router();

// Routes
route.get('/', (req, res) => {
    res.render("index");
})

// --- Articles ---
require("./router_articles")(route);


// --- Fournisseur ---
require("./router_fournisseur")(route);


// --- Vendeur ---
require("./router_vendeur")(route);

// --- Users ---
require("./router_user")(route);

// Client
require("./router_client")(route);


module.exports = route