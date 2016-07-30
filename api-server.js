'use strict';

var express = require('express');
var app = express();

app.get('/', function(req, res){
  res.send('Welcome to the API Wrapper');
});

app.listen(3000, function(){
  console.log('server listening on port 3000');
})