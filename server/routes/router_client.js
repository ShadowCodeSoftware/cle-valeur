const controllerClient = require('../controller/controller_client')
const clientServices = require('../services/render-clients');

module.exports = (route) => {
    route.get('/clients/add',clientServices.add_client);

    // API
}