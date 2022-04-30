const produtoModel = require("../models/Produto")

class ProdutoController {
    static listarProdutos = async (req, res) => {
        try {
            await produtoModel.find()
            .then(produtos => {
                res.status(200).json(produtos)
            }
            )
            .catch(err =>  res.status(400).json({message: err.message}))
        } catch (error) {
            res.status(500).json({message: `${error} - Falha ao listar produtos.`})
        }
    }

    static cadastrarProduto = async (req, res) => {
        try {
            const novoProduto = new produtoModel(req.body)
            novoProduto.save()
                .then(() => {
                    res.status(201).send('Produto cadastrado com sucesso')
                })
                .catch(err => res.status(400).json({message: err.message}))
        } catch (error) {
            res.status(500).json({message: `${error} - Falha ao cadastrar produto.`})
        }
    }

    static obterProdutoID = async (req, res) => {
        try {
            const {id} = req.params
            produtoModel.findById(id)
                .then(produto => {
                    res.status(200).json(produto)
                })
                .catch(err => res.status(400).json({message: err.message}))
        } catch (error) {
            res.status(500).json({message: `${error} - Falha ao obter produto.`})
        }
    }

    static atualizarProduto = async (req, res) => {
        const {id} = req.params

        try {
            produtoModel.findByIdAndUpdate(id, {$set: req.body})
                .then(() => {
                    res.status(200).send('Produto atualizado com sucesso.')
                })
                .catch(err => res.status(400).json({message: err.message}))
        } catch (error) {
            res.status(500).json({message: `${error} - Falha ao atualizar produto.`})
        }
    }

    static excluirProduto = async (req, res) => {
        const {id} = req.params

        try {
            produtoModel.findByIdAndDelete(id)
            .then(() => {
                res.status(200).send('Produto excluido com sucesso.')
            })
            .catch(err => res.status(400).json({message: err.message}))
        } catch (error) {
            res.status(500).json({message: `${error} - Falha ao atualizar produto.`})
        }
    }
}

module.exports = ProdutoController