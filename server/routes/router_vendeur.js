const controller_vendeur = require('../controller/controller_vendeur')
const sellServices = require('../services/render-vendeur');

module.exports = (route) => {
    // Sells

    // routes
    route.get('/sell/veiw/:id', controller_vendeur.findAllSellDetails);

    route.post('/api/sells', controller_vendeur.create);
    route.get('/api/sells', controller_vendeur.findAllSells);
}