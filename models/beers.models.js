'use strict';

var Beer = (function() {

  var request = require('request');
  var BREWERYDB_API_KEY = process.env.BREWERYDB_API_KEY;

  return {
    all: function all(req, callback) {
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
        var data = {};
        if (!error && response.statusCode === 200) {
          var beers = body.data.map(function(beer) {
            return {
              "name": beer.name,
              "desc": beer.description,
              "styleId": beer.styleId
            };
          });
          data["beers"] = beers;
          return callback(null, data);
        } else {
          return callback(error);
        }
      });
    }
  }
}());

module.exports = Beer;
