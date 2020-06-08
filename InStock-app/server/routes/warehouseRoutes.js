const express = require("express");
const router = express.Router();

const getWarehouseList = require("./../controllers/getWarehouseList");
// const getProductsList = require("./../controllers/getProductsList");

router.get("/", (req, res) => {
  res.json(getWarehouseList());
});

module.exports = router;
