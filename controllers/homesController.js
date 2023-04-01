const productsData = require('../models/Product');

const index = (req, res) => {
  productsData.fetchAllProducts((products) => {
    const viewsData = {
      admin: false,
      pageTitle: 'Home ',
      products: products
    }
    res.status(200).render('product-list', viewsData);
  });
};

const showProductDetailPage = (req, res) => {
  productsData.getProductById(req.params.productId, (product) => {
    const viewsData = {
      pageTitle: req.params.productId.title,
      product: product
    }
    res.render('productDetail', viewsData);
  });

}

module.exports = {
  index,
  showProductDetailPage
}