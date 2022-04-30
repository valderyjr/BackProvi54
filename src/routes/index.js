const express = require('express')
const produtosRoutes = require("./produtoRoutes")

const routes = (app) => {
    // Rota principal.
    app.route('/').get((req, res) => {
        res.status(200).send('ProviHack do Agora - Time 54')
    })

    // Middlewares e rotas
    app.use(
        express.urlencoded({extended: true}),
        express.json(),
        produtosRoutes
    )

}

module.exports = routes