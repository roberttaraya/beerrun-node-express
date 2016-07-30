'use strict';

var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// home page
// GET '/'
app.get('/', function(req, res){
  res.send('Welcome to the BeerRun home page');
});

// orders#index
// GET '/users/:user_id/orders'
app.get('/users/:user_id/orders/', function(req, res){
  res.send('Returns list of orders');
});

// orders#new
// GET '/users/:user_id/orders/new'
app.get('/users/:user_id/orders/new', function(req, res){
  res.send('New order page: New order form');
});

// orders#create
// POST '/users/:user_id/orders'
app.post('/users/:user_id/orders', function(req, res){
  res.send('Create a new order. User id: ' + req.body.shoe );
});

// orders#show
// GET '/users/:user_id/orders/:order_id'
app.get('/users/:user_id/orders/:order_id', function(req, res){
  res.send('Shows details for an order');
});

// orders#edit
// GET '/users/:user_id/orders/:order_id/edit'
app.get('/users/:user_id/orders/:order_id/edit', function(req, res){
  res.send('Edit order page: edit order form');
});

// orders#update
// PATCH/PUT '/users/:user_id/orders/:order_id'
app.put('/users/:user_id/orders/:order_id', function(req, res){
  res.send('Update an order');
});

// orders#destroy
// DELETE '/users/:user_id/orders/:order_id'
app.delete('/users/:user_id/orders/:order_id', function(req, res){
  res.send('Deletes an order');
});


app.listen(3000, function(){
  console.log('server listening on port 3000');
})
