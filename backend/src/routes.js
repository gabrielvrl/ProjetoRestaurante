const express = require('express');
const ProductController = require('./controllers/ProductController');
const SoldController = require('./controllers/SoldController')

const routes = express.Router();

routes.get('/', ProductController.index)
routes.get('/products', ProductController.index)
routes.post('/products', ProductController.store);
routes.post('/sold', SoldController.store)

module.exports = routes;