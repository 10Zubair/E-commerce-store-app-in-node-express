const express = require('express');
const homesController = require('../controllers/homesController');
const cartController = require('../controllers/cartController');
const homeRouter = express.Router();

homeRouter.get('/', homesController.index);
homeRouter.get('/product/details/:productId', homesController.showProductDetailPage);

homeRouter.post('/cart', cartController.postCartPage);
homeRouter.get('/cart', cartController.getCartPage);

module.exports = homeRouter;