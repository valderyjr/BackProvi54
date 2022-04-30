const produtos = require("../models/Produto")

class ProdutoController {
    static listarProdutos = async (req, res) => {
        try {
            await produtos.find()
            .then(produtos => {
                res.status(200).json(produtos)
            }
            )
            .catch(err =>  res.status(400).json({message: err}))
        } catch (error) {
            res.status(500).json({message:error})
        }
    }
}

module.exports = ProdutoController