# beerrun-server-node-express
This is the backend for BeerRun.

When I go out on a BeerRun, I'll be able to send out a notice to my friends asking if they'd like to place an order.

## Available Endpoints

`POST '/users/:userId/orders/'`: creates a new order

`GET '/users/:userId/orders/'`: returns a list of all orders

`GET '/users/:userId/orders/:orderId'`: returns an order

`PUT '/users/:userId/orders/:orderId'`: edits an order

`DELETE '/users/:userId/orders/:orderId'`: deletes an order

`GET '/beers'`: returns a list of beers from BreweryDB
