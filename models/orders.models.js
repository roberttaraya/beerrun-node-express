'use strict';

var Order = (function() {
  var _ = require('lodash');

  function createOrder() {
    var timestamp = new Date();

    return {
      orderId: "someUniqIdentifier",
      createdAt: timestamp,
    };
  }

  function getAllOrders() {
    var orders = [
      {
        orderId: "2016-07-01",
        orderDesc: "order description for id 01",
        createdAt: "2016-07-01T16:29:01.140Z"
      },
      {
        orderId: "2016-07-02",
        orderDesc: "order description for id 02",
        createdAt: "2016-07-02T16:29:01.140Z"
      },
      {
        orderId: "2016-07-03",
        orderDesc: "order description for id 03",
        createdAt: "2016-07-03T16:29:01.140Z"
      },
      {
        orderId: "2016-07-04",
        orderDesc: "order description for id 04",
        createdAt: "2016-07-04T16:29:01.140Z"
      },
      {
        orderId: "2016-07-05",
        orderDesc: "order description for id 05",
        createdAt: "2016-07-05T16:29:01.140Z"
      }
    ];
    return _.sortBy(orders, function(order) {
      return order.createdAt;
    });
  }

  function findById(orderId) {
    var orders = getAllOrders();
    var order = _.find(orders, function(order) {
      return order.orderId === orderId;
    })
    return order;
  }

  return {
    create: function create(req, callback) {
      var orders = getAllOrders();
      var order = createOrder();
      orders.push(order);
      return callback(null, "Order created successfully")
    },

    all: function all(req, callback) {
      var orders =  getAllOrders();
      return callback(null, orders);
    },

    find: function find(req, callback) {
      if (req.params.orderId) {
        var orderId = req.params.orderId;
        var order = findById(orderId);
        return callback(null, order);
      }
      return callback("Invalid orderId");
    },

    update: function update(req, callback) {
      if (req.params.orderId) {
        return callback(null, "Order updated successfully")
      }
      return callback("Order was not updated")
    },

    destroy: function destroy(req, callback) {
      if (req.params.orderId) {
        return callback(null, "Order deleted successfully")
      }
      return callback("Order was not deleted")
    }
  }
}());

module.exports = Order;
