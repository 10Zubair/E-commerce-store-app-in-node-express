const express = require('express');
const rootDir = require('../utils/path');
const productsController = require('../controllers/admin/productsController');

const adminRouter = express.Router();

adminRouter.get('/', productsController.getAdminProductsPage);
adminRouter.get('/add', productsController.getAddProductPage);
adminRouter.post('/add', productsController.postProductPage);
adminRouter.get('/product/edit/:productId', productsController.getEditProductPage);
adminRouter.post('/product/edit/:productId', productsController.postEditProductPage);
adminRouter.post('/delete', productsController.postDeleteProductPage);

module.exports = adminRouter;