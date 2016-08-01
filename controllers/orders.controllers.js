'use strict';

var ordersController = (function() {

  var Order = require('../models/orders.models');

  return {
    listAllOrders: function listAllOrders(req, res) {
      var data = Order.all(req, function(err, data) {
        if (err) console.log(err);
        return data;
      })
      res.send(data);
    },

    newOrder: function newOrder(req, res) {
      var data = Order.newOrder(req, function(err, data) {
        if (err) console.log(err);
        return data;
      });
      res.send(data)
    },

    createOrder: function createOrder(req, res) {
      var data = Order.create(req, function(err, data) {
        if (err) console.log(err);
        return data;
      });
      res.send(data)
    },

    showOrder: function showOrder(req, res) {
      var data = Order.find(req, function(err, data) {
        if (err) console.log(err);
        return data;
      });
      res.send(data);
    },

    editOrder: function editOrder(req, res) {
      var data = Order.find(req, function(err, data) {
        if (err) console.log(err);
        return data;
      });
      res.send(data)
    },

    updateOrder: function updateOrder(req, res) {
      var data = Order.update(req, function(err, data) {
        if (err) console.log(err);
        return data;
      });
      res.send(data)
    },

    destroyOrder: function destroyOrder(req, res) {
      var data = Order.destroy(req, function(err, data) {
        if (err) console.log(err);
        return data;
      });
      res.send(data);
    }
  }
}());

module.exports = ordersController;
