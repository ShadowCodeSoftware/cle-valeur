let client = require('../database/connection')

exports.create = async (req, res) => {
    console.log(req)
    if (!req.body) {
        return res.status(400).send({message: "Le contenu ne peut etre vide"});
    }

    let idArticle = await countArticle()
    const articles_designation = req.body.article_designation;
    const article_number = req.body.article_number;
    for(let i=0; i<articles_designation.length; i++){
        client.sendCommand(['HMSET', `article:${idArticle.length + 1}`, 'name', `${articles_designation[i]}`, 'price', `${article_number[i]}`, 'qte', '0']);
        idArticle += 1;
    }
    // return res.status(200).send({message: `L'article ${idArticle.length + 1}: ${req.article_designation} a bien ete enregistree`});
    return res.redirect('/articles/add');
}

exports.findAll = async (req, res) => {
    let data = [];
    let articles = [];
    let keys = [];
    const listArticles = await client.sendCommand(['KEYS', 'article:*']);
    keys = listArticles;
    for(let i = 0; i<listArticles.length; i++) {
        const article = await client.sendCommand(['HVALS', `${listArticles[i]}`]);
        articles.push(article);
    }
    data.push(keys);
    data.push(articles);
    res.send(data)
}

exports.findByKey = async (req, res) => {

}

exports.delete = async (req, res) => {
    const key = req.params.id;
    client.sendCommand(['DEL', `${key}`]);
    // res.send({data: req.params})
    return res.redirect('/articles/add');
}

async function countArticle() {
    let count = 0;
    try{
        count = await client.sendCommand(['KEYS', 'article:*']);
    } catch (e) {
        count = 0;
    }
    return count;
}