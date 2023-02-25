let client = require('../database/connection')

exports.create = async (req, res) => {
    console.log(req)
    if (!req.body) {
        return res.status(400).send({message: "Le contenu ne peut etre vide"});
    }

    console.log(req);
    const idArticle = await countArticle()
    
    const newArticle = client.sendCommand(['HMSET', `article:${idArticle.length + 1}`, 'name', `${req.body.article_designation}`, 'price', `${req.body.article_number}`])
    // return res.status(200).send({message: `L'article ${idArticle.length + 1}: ${req.article_designation} a bien ete enregistree`});
    return res.redirect('/articles/add');
}

exports.findAll = async (req, res, next) => {
    const articles = await client.sendCommand(['HGETALL', 'article:12']);
    // const articles = await client.sendCommand(['KEYS', 'article:*']);
    res.status(200).send({message: articles})
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