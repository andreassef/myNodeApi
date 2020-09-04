// 1 - core modules
// 2 - modules externals 
const express = require('express');
const bodyParser = require('body-parser');
// 3 - my modules
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));


module.exports = app;


