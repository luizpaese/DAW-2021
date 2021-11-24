const express = require('express');
const routes = express.Router();

const productController = require('../controllers/product-controller');

routes.route('/')
    .get(productController.index)
    .post(productController.create);

routes.route('/:id')
    .get(productController.show)
    .put(productController.update)
    .delete(productController.delete);

module.exports = routes;