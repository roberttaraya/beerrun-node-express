# beerrun-server-node-express
This is the backend for BeerRun.

When I go out on a BeerRun, I'll be able to send out a notice to my friends that asks them if they'd like to place an order with me.

## Available Endpoints

`POST '/users/:userId/orders/'`: creates a new order

`GET '/users/:userId/orders/'`: returns a list of all orders

`GET '/users/:userId/orders/:orderId'`: returns an order

`PUT '/users/:userId/orders/:orderId'`: edits an order

`DELETE '/users/:userId/orders/:orderId'`: deletes an order

## http://www.brewerydb.com/
I'm using BreweryDB to get a list of beers. I wanted to list the beers in stock at my local Walmart, but the Walmart API only provides lists of items that can be bought online, and apparently beer isn't one of them.

In order to get access to [BreweryDBs API](http://www.brewerydb.com/developers), you need to register with them to get your api key.

This is the endpoint used to get a listing of beers:

`GET '/beers'`: returns a list of beers from BreweryDB

This requires that one of the following attributes must be set: name, abv, ibu, srmId, availabilityId, styleId. I'm hardcoding ABV (alhohol by volume), which is a percentage of the alcohol content, to +20. Later I'd like to have the user input this value, or provide a few set ranges to filter by.
