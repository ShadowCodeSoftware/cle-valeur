const controller_four = require('../controller/controller-fournisseur');

const fournisseurServices = require('../services/render-fournisseur');

module.exports = (route) => {
    route.get('/fournisseur/add', fournisseurServices.add_fournisseur);
    route.get('/fournisseur/update/:id', fournisseurServices.show_data);

    // API
    route.post('/api/fournisseur', controller_four.create);
    route.post('/api/fournisseur/maj', controller_four.update);

    route.get('/api/fournisseur', controller_four.find);
    route.get('/api/fournisseur/del/:id', controller_four.delete);

    route.get('/api/fournisseur/fetch/:id', controller_four.findOne);
}