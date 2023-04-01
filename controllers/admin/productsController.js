const productsData = require('../../models/Product');

const getAdminProductsPage = (req, res) => {
  productsData.fetchAllProducts((products) => {
    const viewsData = {
      admin: true,
      pageTitle: 'Admin Products',
      products: products
    }
    res.status(200).render('product-list', viewsData);
  });
}

const getAddProductPage = (req, res) => {
  const viewsData = {
    edit: false,
    pageTitle: 'Add Product'
  }
  res.status(200).render('AddProduct', viewsData);
}

const postProductPage = (req, res) => {
  const product = {
    id: Date.now(),
    title: req.body.title,
    image: req.body.image,
    price: req.body.price,
    description: req.body.description
  }
  productsData.saveProducts(product);
  res.redirect('/');
}

const getEditProductPage = (req, res) => {
  const productId = req.params.productId;
  productsData.getProductById(productId, (product) => {
    const viewsData = {
      edit: true,
      pageTitle: 'Edit Product',
      product: product
    }
    console.log(product);
    res.status(200).render('AddProduct', viewsData);
  });
}

const postEditProductPage = (req, res) => {
  const productId = req.params.productId;
  const product = {
    id: productId,
    title: req.body.title,
    image: req.body.image,
    price: req.body.price,
    description: req.body.description
  }
  productsData.updateProductById(productId, product);
  res.redirect('/');
}

const postDeleteProductPage = (req, res) => {
  const productId = req.body.productId;
  console.log(req.body);
  productsData.deleteProductById(productId)
  res.redirect('/');
}

module.exports = {
  getAdminProductsPage,
  getAddProductPage,
  postProductPage,
  getEditProductPage,
  postEditProductPage,
  postDeleteProductPage

}