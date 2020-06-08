const fs = require("fs");
const { v4: uuid } = require("uuid");

const createProduct = (product) => {
  const inventoryData = fs.readFileSync("./model/data.json");
  const inventoryDataArr = JSON.parse(inventoryData);

  console.log(product);
  const newProduct = {
    productId: uuid(),
    productName: product.name,
    productDescription: product.description,
    lastOrdered: product.date,
    warehouseId: product.warehouseId,
    location: product.location,
    quantity: product.quantity,
    status: product.status,
  };

  //updating the data.json file:

  //1. find the warehouse to file the new product:
  const foundwarehouse = inventoryDataArr.find(
    (warehouse) => warehouse.warehouseId === newProduct.warehouseId
  );

  //2. add the product to the products array object in foundwarehouse:
  foundwarehouse.products.push(newProduct);
  console.log(foundwarehouse);

  //3. update the warehouse details in the data.json file:
  const warehouseIndex = inventoryDataArr
    .map((warehouse) => warehouse.warehouseId)
    .indexOf(newProduct.warehouseId);

  inventoryDataArr.splice(warehouseIndex, 1, foundwarehouse);

  fs.writeFileSync("./model/data.json", JSON.stringify(inventoryDataArr));

  return newProduct;
};

module.exports = createProduct;
