const fs = require('fs');
const path = require('path');
const rootDir = require('../utils/path');

const addProductToCart = (productId, productPrice) => {
  const cartPath = path.join(rootDir, 'data', 'cart.json');
  fs.readFile(cartPath, (err, cartContent) => {
    let cart = { products: [], totalPrice: 0};
    if(!err) {
      cart = JSON.parse(cartContent );
    }

    let exixtingProductIndex = cart.products.findIndex(product => product.id.toString() === productId);
    let updatedProduct;

    if (exixtingProductIndex!== -1) {
        updatedProduct = {...cart.products[exixtingProductIndex]};
        updatedProduct.quantity += 1;
        cart.products = [...cart.products];
        cart.products[exixtingProductIndex] = updatedProduct;
    }
    else {
      updatedProduct = { id: productId, quantity: 1 };
      cart.products = [...cart.products, updatedProduct];//same likecart.push(updatedProduct);
    }

    cart.totalPrice += +productPrice;

    fs.writeFile(cartPath, JSON.stringify(cart), err => {
      console.log(err);
    })
  }); 
}

module.exports = addProductToCart;