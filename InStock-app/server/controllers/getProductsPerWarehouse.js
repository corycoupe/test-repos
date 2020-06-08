const fs = require("fs");

// the controller to get the list of products PER WAREHOUSE

const getProductsPerWarehouse = (id) => {
  const allProductData = fs.readFileSync("./model/data.json");
  let productsPerWarehouse = [];

  const filteredProductData = JSON.parse(allProductData).filter(
    (warehouse) => warehouse.warehouseId === id
  );

  productsPerWarehouse = filteredProductData[0].products;

  return productsPerWarehouse;
};

module.exports = getProductsPerWarehouse;
