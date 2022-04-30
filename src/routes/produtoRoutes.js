const express = require('express')
const produtosController = require('../controllers/produtosController')

const router = express.Router();

router
    .get('/', produtosController.listarProdutos)



module.exports = router