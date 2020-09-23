// 1 - core modules
// 2 - modules externals 
const express = require('express');
const bodyParser = require('body-parser');
const { json } = require('body-parser');
// 3 - my modules
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
//app.use(json);
const routes = require('../app/routes/rotas');
routes(app);

module.exports = app;


