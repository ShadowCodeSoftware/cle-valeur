const axios = require('axios');

exports.homeRoutes = (req, res)  =>{
    
    
}
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

exports.show_fournisseur = (req, res) => {
    res.render("screens/achat/fournisseur");
}