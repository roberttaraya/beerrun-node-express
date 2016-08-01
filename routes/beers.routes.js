'use strict';

var beerRouter = function beerRouter(router) {
  var beersController = require('../controllers/beers.controllers');

  router.route('/beers')
    .get(function(req, res) {
      beersController.listAllBeers(req, res);
    })
};

module.exports = beerRouter;
