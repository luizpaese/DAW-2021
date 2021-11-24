const express = require('express');

//Importa o Produto Controller
const produtoController = require('../controllers/produto-controller');

//Instancio um router para determinar as rotas
const routes = express.Router();

//Rota principal (index)
routes.get('/produtos', produtoController.index);

//Rota para trazer um registro (show)
routes.get('/produtos/:id', produtoController.show);

//Rota para adicionar um recurso (creeate)
routes.post('/produtos', produtoController.create);


module.exports = routes;