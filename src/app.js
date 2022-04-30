const db = require("./config/dbConnect")
const express = require('express')
const app = express()

//Importando rotas
const routes = require('./routes/index')

//Conectando com o banco de dados
db.on("error", console.log.bind(console, 'Erro de conexão.'))
db.once("open", () => {
    console.log("Conexão com o banco feita com sucesso.")
})

app.use(express.json())

routes(app)

module.exports = app