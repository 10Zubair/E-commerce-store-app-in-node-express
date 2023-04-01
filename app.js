const express = require('express');
const bodyParser = require('body-parser');
const homeRouter = require('./routes/home');
const adminRouter = require('./routes/admin');
const rootDir = require('./utils/path');
const path =require('path');

const app = express();
//static file serving
app.use(express.static(path.join(rootDir, 'public')));//in some case could be use with path.join();
app.use('/css', express.static(path.join(rootDir, 'node_modules', 'bootstrap', 'dist', 'css')));
app.use(bodyParser.urlencoded({ extended: false }));//can be use express.urlencoded

app.set('view engine', 'ejs');

//routes
app.use('/products', adminRouter);
app.use(homeRouter, adminRouter);
app.use((req, res) => {
  const viewsData = {
    pageTitle: 'Page not found'
  }
  res.status(404).render('404Page', viewsData);
});
app.listen(3000, () => {
  console.log("at 3000");
});