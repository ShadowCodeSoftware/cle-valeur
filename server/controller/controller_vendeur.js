let client = require('../database/connection')

exports.create = async (req, res) => {
    console.log(req)
    if (!req.body) {
        return res.status(400).send({message: "Le contenu ne peut etre vide"});
    }

    console.log(req);
    const idSell = await countSell()

    const customer_name = req.body.customer_name
    const customer_phone_number = req.body.customer_phone_number
    const product_name = req.body.product_name
    const product_quantity = req.body.product_quantity
    const product_single_unit_price = req.body.product_single_unit_price
    const product_total_price = req.body.product_total_price


    console.log(idSell)
    console.log(customer_name[0])
    console.log(customer_phone_number[0])
    console.log(product_name[0])
    console.log(product_quantity[0])
    console.log(product_single_unit_price[0])
    console.log(product_total_price[0])

    

    const newSell = client.sendCommand(['HMSET', `Sell:${idSell.length + 1}`, 'customer_name', `${customer_name}`, 'customer_phone_number', `${customer_phone_number}`, 'product_name', `${product_name}`, 'product_quantity', `${product_quantity}`, 'product_single_unit_price', `${product_single_unit_price}`, 'product_total_price', `${product_total_price}`])
    return res.redirect('/api/sells');
}

exports.findAll = async (req, res, next) => {
    // const Sells = await client.sendCommand(['HGETALL', 'Sell:12']);
    const Sells_id = await client.sendCommand(['KEYS', 'Sell:*'])
    const Sells = []

    for (let i = 1; i <= Sells_id.length; i++){
        let item = await client.sendCommand(['HGETALL', 'Sell:'+i])
        Sells.push(item)
    }

    return res.render("screens/vendeur/vendeur",{Sells:Sells})
}

async function countSell() {
    let count = 0;
    try{
        count = await client.sendCommand(['KEYS', 'Sell:*']);
    } catch (e) {
        count = 0;
    }
    return count;
}