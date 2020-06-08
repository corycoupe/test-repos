const fs = require("fs");
const getProductsList = require("./getProductsList");

const getProductsDetails = (id) => {
  // const ProductData = fs.readFileSync("./model/data.json");
  const productList = getProductsList();
  console.log(id);
  const filteredProductDetails = productList.filter((products) => products.productId === id);
  return filteredProductDetails;
};

module.exports = getProductsDetails;