const express = require('express');
const rootDir = require('../utils/path');
const productsController = require('../controllers/admin/productsController');

const adminRouter = express.Router();

adminRouter.get('/products', productsController.getAdminProductsPage);
adminRouter.get('/product/edit/:productId', productsController.getEditProductPage);
adminRouter.get('/add', productsController.getAddProductPage);
adminRouter.post('/add', productsController.postProductPage);

module.exports = adminRouter;