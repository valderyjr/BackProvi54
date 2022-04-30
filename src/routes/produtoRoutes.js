const express = require('express')
const produtosController = require('../controllers/produtosController')

const router = express.Router();

router
    .get('/produtos', produtosController.listarProdutos)
    .get('/produtos/:id', produtosController.obterProdutoID)
    .post('/produtos', produtosController.cadastrarProduto)
    .put('/produtos/:id', produtosController.atualizarProduto)
    .delete('/produtos/:id', produtosController.excluirProduto)


module.exports = router