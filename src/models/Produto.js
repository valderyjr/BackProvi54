const mongoose = require("mongoose")

const produtoSchema = new mongoose.Schema(
    {
        id: {type: String},
        nome: {type: String, required: true},
        nomeEmpresa: {type: String, required: true},
        foto: {type: String, required: true},
        valor: {type: Number, required: true},
        descricao: {type: String, required: true},
        etiquetas: {type: String, required: true},
    }
)

const produtos = mongoose.model('produtos', produtoSchema)

module.exports = produtos