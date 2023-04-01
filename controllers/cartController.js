const addProductToCart = require('../models/Cart');
const productModel = require('../models/Product');

const postCartPage = (req, res) => {
  const productId = req.body.productId;
  productModel.getProductById(productId, product => {
    addProductToCart(productId, product.price);
    res.redirect('/');
  })

};

const getCartPage = (req, res) => {};

module.exports = { 
  postCartPage,
  getCartPage
}