'use strict';

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var env = require('node-env-file');

env(__dirname + '/.env');
  var BREWERYDB_API_KEY = process.env.BREWERYDB_API_KEY


var ordersController = require('./controllers/orders.controllers');
var beersController = require('./controllers/beers.controllers');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// home page
// GET '/'
app.get('/', function(req, res) {
  res.send('Welcome to the BeerRun home page');
});

// orders#index
// GET '/users/:userId/orders'
app.get('/users/:userId/orders/', function(req, res) {
  ordersController.listAllOrders(req, res);
});

// orders#new
// GET '/users/:userId/orders/new'
app.get('/users/:userId/orders/new', function(req, res) {
  ordersController.newOrder(req, res);
});

// orders#create
// POST '/users/:userId/orders'
app.post('/users/:userId/orders', function(req, res) {
  // res.send(req.body)
  ordersController.createOrder(req, res);
});

// orders#show
// GET '/users/:userId/orders/:orderId'
app.get('/users/:userId/orders/:orderId', function(req, res) {
  // res.send('Shows details for an order');
  ordersController.showOrder(req, res);
});

// orders#edit
// GET '/users/:userId/orders/:orderId/edit'
app.get('/users/:userId/orders/:orderId/edit', function(req, res) {
  ordersController.editOrder(req, res);
});

// orders#update
// PATCH/PUT '/users/:userId/orders/:orderId'
app.put('/users/:userId/orders/:orderId', function(req, res) {
  ordersController.updateOrder(req, res);
});

// orders#destroy
// DELETE '/users/:userId/orders/:orderId'
app.delete('/users/:userId/orders/:orderId', function(req, res) {
  ordersController.destroyOrder(req, res);
});


// use BreweryDB api to get list of beers
app.get('/beers', function(req, res) {
  beersController.listAllBeers(req, res);
})


app.listen(3000, function(){
  console.log('server listening on port 3000');
})
