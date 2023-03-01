let client = require('../database/connection')

exports.create = async (req, res) => {
    console.log(req)
    if (!req.body) {
        return res.status(400).send({message: "Le contenu ne peut etre vide"});
    }

    console.log(req);
    const idClient = await countClient()
    
    const nouveau = client.sendCommand(['HMSET', `client:${idClient.length + 1}`, 'name', `${req.body.client_nom}`,'number', `${req.body.client_number}`])
    // return res.status(200).send({message: `L'article ${idArticle.length + 1}: ${req.article_designation} a bien ete enregistree`});
    return res.redirect('/clients/add');
}

exports.findAll = async (req, res, next) => {
    const clients = await client.sendCommand(['HGETALL', 'client:12']);
    // const articles = await client.sendCommand(['KEYS', 'article:*']);
    res.status(200).send({message: clients})
}

async function countClient() {
    let count = 0;
    try{
        count = await client.sendCommand(['KEYS', 'client:*']);
    } catch (e) {
        count = 0;
    }
    return count;
}