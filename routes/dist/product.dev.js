"use strict";

var express = require('express'); // const { restart } = require('nodemon');


var router = express.Router();
router.get('/', function (req, res) {
  res.send("fetch product list");
});
router.get('/:id', function (req, res) {
  res.send("fetch product id: ".concat(req.params.id));
});
router.post('/', function (req, res) {
  console.log(req.body, "data");
  res.send("Create Product");
});
router.put('/:id', function (req, res) {
  res.send("Updated Product Id: ".concat(req.params.id));
});
router["delete"]('/:id', function (req, res) {
  res.send("Deleted Id : ".concat(req.params.id));
});
module.exports = router;
var products = [{
  id: 1,
  name: "Product 1",
  price: 100,
  description: "Product 1 description"
}];