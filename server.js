const express = require('express')

const PORT = process.env.PORT || 3000;

const app = express()

app.get('/', (req, res) => {
    res.send("Application initialiser");
})

app.listen(PORT, () => console.log(`Notre application est demarree sur : http://localhost:${PORT}`))