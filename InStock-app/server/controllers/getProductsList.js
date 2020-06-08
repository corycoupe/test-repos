const fs = require("fs");
// the controller to get the list of products
const getProductsList = () => {
  const allProductData = fs.readFileSync("./model/data.json");
  let onlyProductsList = [];

  const filteredProductData = JSON.parse(allProductData).map((warehouse) => {
    return {
      products: warehouse.products,
    };
  });

  onlyProductsList = filteredProductData[0].products.concat(
    filteredProductData[1].products
  );
  //console.log(onlyProductsList);
  return onlyProductsList;
};
module.exports = getProductsList;