const express = require("express");
const router = express.Router();

const getProductsList = require("./../controllers/getProductsList");
const createProduct = require("./../controllers/createProduct");
const deleteProduct = require('./../controllers/deleteProduct');
//get all products in Inventory
router.get("/", (req, res) => {
  res.send(getProductsList());
});

//create a new product
router.post("/", (req, res) => {
  res.json(createProduct(req.body));
});

//edit existing product
router.put("/:productId", (req, res) => {
  res.json(editProduct(req.params.productId, req.body));
});

//remove a product
router.delete("/:id", (req, res) => {
  res.json(deleteProduct(req.params.id));
});

module.exports = router;
