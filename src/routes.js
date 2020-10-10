const express = require('express');
const { celebrate, Segments, Joi } = require('celebrate');

const HomeController = require('./Controller/HomeController');
const ProdutoController = require('./Controller/ProdutoController');
const { route } = require('./app');

const routes = express.Router();

routes.get('/', HomeController.home);

routes.get('/produto/consultar', ProdutoController.consulta);
routes.post('/produto/cadastrar', ProdutoController.novoCadastro);
routes.put('/produto/editar', ProdutoController.atualizarCadastro);
// routes.get('/produto/excluir', ProdutoController.produtoDetalhe);


module.exports = routes;