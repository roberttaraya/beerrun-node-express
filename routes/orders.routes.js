'use strict';

var orderRouter = function orderRouter(router) {
  var ordersController = require('../controllers/orders.controllers');

  router.route('/users/:userId/orders/')
    .get(function(req, res) {
      ordersController.listAllOrders(req, res);
    })
    .post(function(req, res) {
      ordersController.createOrder(req, res);
    })

  router.route('/users/:userId/orders/:orderId')
    .get(function(req, res) {
      ordersController.showOrder(req, res);
    })
    .put(function(req, res) {
      ordersController.updateOrder(req, res);
    })
    .delete(function(req, res) {
      ordersController.destroyOrder(req, res);
    })
};

module.exports = orderRouter;
