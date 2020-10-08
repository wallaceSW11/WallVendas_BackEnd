const express = require('express');
const { celebrate, Segments, Joi } = require('celebrate');

const HomeController = require('./Controller/HomeController');
const ProdutoController = require('./Controller/ProdutoController');
const { route } = require('./app');

const routes = express.Router();

routes.get('/', HomeController.home);
routes.get('/produtos', ProdutoController.produtos);
routes.get('/produtodetalhe', ProdutoController.produtoDetalhe);

routes.post('/produto', ProdutoController.novoCadastro);
routes.put('/produto', ProdutoController.atualizarCadastro);


module.exports = routes;