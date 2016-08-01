'use strict';

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var env = require('node-env-file');
var router = express.Router();


env(__dirname + '/.env');

var ordersController = require('./controllers/orders.controllers');
var beersController = require('./controllers/beers.controllers');

var ordersRouter = require('./routes/orders.routes');
var beersRouter = require('./routes/beers.routes');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(router);

ordersRouter(router);
beersRouter(router);

// home page
// GET '/'
app.get('/', function(req, res) {
  res.send('Welcome to the BeerRun home page');
});


app.listen(3000, function(){
  console.log('server listening on port 3000');
})
