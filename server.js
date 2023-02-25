const express = require('express')
const dotenv = require('dotenv');
const morgan = require("morgan");
const bodyparser = require("body-parser");
const path = require('path');

const app = express();

const PORT = process.env.PORT || 3001;
dotenv.config({path:'config.env'});

// request informations
app.use(morgan("tiny"));

// parse request
app.use(bodyparser.urlencoded({extended: true}));

// set view engine
app.set("view engine", "ejs");
app.set("views", __dirname+"/views/");
// app.set('views', path.join(__dirname,'/views/'));
// app.set('views', [path.join(__dirname, '/views/'), path.join(__dirname, '/views/screens/boutique/')]);

// Load assets
app.use('/css', express.static(path.resolve(__dirname, "views/css")))
app.use('/images', express.static(path.resolve(__dirname, "views/images")))
app.use('/js', express.static(path.resolve(__dirname, "views/js")))
app.use('/fonts', express.static(path.resolve(__dirname, "views/fonts")))
app.use('/vendors', express.static(path.resolve(__dirname, "views/vendors")))

app.use('/', require('./server/routes/router'));

// app.get('/new_articles', (req, res) => {
//     res.render("./views/screens/boutique/new_articles.ejs");
// })

app.listen(PORT, () => console.log(`Notre application est demarree sur : http://localhost:${PORT}`))