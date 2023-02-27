let client = require('../database/connection')

exports.create = async (req, res) => {
    console.log(req)
    if (!req.body) {
        return res.status(400).send({message: "Le contenu ne peut etre vide"});
    }

    console.log(req);
    const idFournisseur = await countFournisseur()
    
    const newFournisseur = client.sendCommand(['HMSET', `fournisseur:${idFournisseur.length + 1}`, 'name', `${req.body.four_name}`, 'tel', `${req.body.four_phone}`, 'localisation', `${req.body.four_place}`])
    // return res.status(200).send({message: `L'article ${idArticle.length + 1}: ${req.article_designation} a bien ete enregistree`});
    return res.redirect('/fournisseur/add');
}


exports.find = async (req, res) => {
    let data = [];
    const listArticles = await client.sendCommand(['KEYS', 'fournisseur:*']);
    
    for (let i = 0; i < listArticles.length; i++){
        const four = await client.sendCommand(['HVALS',`${listArticles[i]}`]);
        data.push(four)
    }

    // const articles = await client.sendCommand(['KEYS', 'article:*']);
    res.send(data)
    // console.log(articles);
}


async function countFournisseur() {
    let count = 0;
    try{
        count = await client.sendCommand(['KEYS', 'fournisseur:*']);
    } catch (e) {
        count = 0;
    }
    return count;
}