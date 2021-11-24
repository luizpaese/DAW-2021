const express = require('express');
const routes = express.Router();

const brandController = require('../controllers/brand-controller');

routes.route('/')
    .get(brandController.index)
    .post(brandController.create);

routes.route('/:id')
    .get(brandController.show)
    .put(brandController.update)
    .delete(brandController.delete);

module.exports = routes;