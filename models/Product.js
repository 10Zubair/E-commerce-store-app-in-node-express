const fs = require('fs');
const { get } = require('http');
const path = require('path');
const rootDir = require('../utils/path');

const productPath = path.join(rootDir, 'data', 'products.json');

const getProductsFromFile = (callback) => {
  fs.readFile(productPath, (err, data) => {
    if (err) {
      return callback([]);
    } else {
      return callback(JSON.parse(data));
    }
  });
}

const saveProducts = (product) => {
  getProductsFromFile(products => {//we will be getting the products data from
    products.push(product);
    fs.writeFile(productPath, JSON.stringify(products), error => {
      console.log(error);
    });
  });;
}

const fetchAllProducts = (callback) => {//you will take time to the reading file when you are done than pass that data to callback func
  getProductsFromFile(callback);
}

const getProductById = (id, callback) => {
  getProductsFromFile(products => {
    const product = products.find(product => product.id.toString() === id);
    callback(product);
  });
}

module.exports = {
  saveProducts,
  fetchAllProducts,
  getProductById 
}   