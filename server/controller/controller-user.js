let client = require('../database/connection')

exports.create = async (req, res) => {
    console.log(req)
    if (!req.body) {
        return res.status(400).send({message: "Le contenu ne peut etre vide"});
    }

    const idUser = await countUser()
    
    const newUser = client.sendCommand(['HMSET', `user:${idUser.length + 1}`, 'name', `${req.body.user_name}`, 'phone', `${req.body.user_phone}`, 'poste', `${req.body.user_poste}`])
    return res.redirect('/api/user');
}

exports.findAll = async (req, res) => {
    let users = [];
    const listUser = await client.sendCommand(['KEYS', 'user:*']);
    for(var i = 0; i<listUser.length; i++) {
        const user = await client.sendCommand(['HGETALL', `${listUser[i]}`]);
        users.push(user);
        user.push(listUser[i])
    }
    console.log(users)

    res.render("screens/authentification/user_account", {Users:users}) 
}

async function countUser() {
    let count = 0;
    try{
        count = await client.sendCommand(['KEYS', 'user:*']);
    } catch (e) {
        count = 0;
    }
    return count;
}

exports.update = async (req, res) => {
    console.log(req)
    if (!req.body) {
        return res.status(400).send({message: "Le contenu ne peut etre vide"});
    }

    const idUser = await countUser()
    
    const newUser = client.sendCommand(['HMSET', `user:${idUser.length + 1}`, 'name', `${req.body.user_name}`, 'phone', `${req.body.user_phone}`, 'poste', `${req.body.user_poste}`])
    return res.redirect('/user');
}