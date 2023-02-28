const axios = require("axios")

exports.user = (req, res) => {
    axios("http://localhost:3001/api/user")
        .then(function(response) {
            res.render("screens/authentification/user_account", {
                users: response.data
            });
        })
        .catch(err => {
            res.send(err)
        })
}