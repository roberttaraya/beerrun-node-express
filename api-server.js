'use strict';

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var env = require('node-env-file');

env(__dirname + '/.env');

var BREWERYDB_API_KEY = process.env.BREWERYDB_API_KEY

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


// use BreweryDB api to get list of beers
app.get('/beers', function(req, res) {
  var request = require("request");

  var options = {
    method: 'GET',
    url: 'http://api.brewerydb.com/v2/beers',
    json: true,
    qs: {
      key: BREWERYDB_API_KEY,
      abv: '+20'
      // styleId: "134"
    }
  };

  request(options, function (error, response, body) {
    // if (error) throw new Error(error);
    if (error) console.log(error);
    var data = body.data.map(function(beer) {
      return {
        "name": beer.name,
        "desc": beer.description,
        "styleId": beer.styleId
      }
    });
    console.log("number of beers in list: " + data.length)
    res.send(data);
  });
})


app.listen(3000, function(){
  console.log('server listening on port 3000');
})
