const axios = require('axios');


exports.add_fournisseur = (req, res) => {
    // res.render("screens/achat/fournisseur");

    //get request
    axios.get('http://localhost:3001/api/fournisseur')
        .then(function(response){
            // console.log(response.data)
            res.render("screens/achat/fournisseur", {four: response.data})
        })
        .catch(err=>{
            res.send(err);
        })
}

exports.show_data = (req, res) => {
    // res.render("screens/achat/fournisseur");
    // res.render("screens/achat/update_fournisseur", {four: req.params.id})
    axios.get(`http://localhost:3001/api/fournisseur/fetch/${req.params.id}`)
        .then(function(response){
            // console.log(response.data)
            res.render("screens/achat/update_fournisseur", {four: response.data})
        })
        .catch(err=>{
            res.send(err);
        })
}