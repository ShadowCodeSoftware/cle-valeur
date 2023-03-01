const controller_articles = require('../controller/controller-article')

const articleServices = require('../services/render-articles');

module.exports = (route) => {
    route.get('/articles/add', articleServices.add_article);
    route.get('/articles/stock', articleServices.show_articles);
    route.get('/articles/update/:id', articleServices.update_articles);

    // API
    route.post('/api/articles', controller_articles.create);
    route.get('/api/articles', controller_articles.findAll);
    route.get('/api/articles/:id', controller_articles.findByKey);
    route.get('/api/articles/del/:id', controller_articles.delete);
    route.post('/api/articles/put/:id', controller_articles.update);
}