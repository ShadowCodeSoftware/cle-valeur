const axios = require('axios');

exports.add_article = (req, res) => {
    axios("http://localhost:3001/api/articles")
        .then(function(response) {
            res.render("screens/boutique/new_articles", {
                articles: response.data
            });
        })
        .catch(err => {
            res.send(err);
        })
}

exports.show_articles = (req, res) => {
    axios("http://localhost:3001/api/articles")
        .then(function(response) {
            res.render("screens/boutique/new_articles", {
                articles: response.data
            });
        })
        .catch(err => {
            res.send(err);
        })
        res.render("screens/boutique/new_articles", {
            articles: []
        });
}

// exports.delete_article = (req, res) => {
//     axios("http://localhost:3001/api/articles/del", {params: {key: req.query.id}})
//         .then(function(response) {
//             res.render("screens/boutique/new_articles", {
//                 articles: response.data
//             });
//         })
//         .catch(err => {
//             res.send(err);
//         })
//         res.render("screens/boutique/new_articles", {
//             articles: []
//         });
// }