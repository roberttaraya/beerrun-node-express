'use strict';

var beersController = (function() {

  var Beer = require('../models/beers.models');

  return {
    listAllBeers: function listAllBeers(req, res) {
      Beer.all(req, function(err, data) {
        if (err) console.log(err);
        res.send(data);
      })
    }
  }
}());

module.exports = beersController;
