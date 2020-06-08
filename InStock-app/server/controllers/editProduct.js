const fs = require("fs");

const editProduct = (productId, productObj) => {
  const inventoryData = fs.readFileSync("./model/data.json");
  const inventoryDataArr = JSON.parse(inventoryData);

  const product = {
    id: productId,
    productName: productObj.name,
    productDescription: productObj.description,
    lastOrdered: productObj.date,
    warehouseId: productObj.warehouseId,
    location: productObj.location,
    quantity: productObj.quantity,
    status: productObj.status,
  };

  //updating the data.json file:

  //1. find the warehouse to update the edit of product:
  const foundwarehouse = inventoryDataArr.find(
    (warehouse) => warehouse.warehouseId === productObj.warehouseId
  );

  //2. add the product to the products array object in foundwarehouse:
  foundwarehouse.products.push(product);
  console.log(foundwarehouse);

  //3. update the warehouse details in the data.json file:
  const warehouseIndex = inventoryDataArr
    .map((warehouse) => warehouse.warehouseId)
    .indexOf(product.warehouseId);

  inventoryDataArr.splice(warehouseIndex, 1, foundwarehouse);

  fs.writeFileSync("./model/data.json", JSON.stringify(inventoryDataArr));

  return product;
};

module.exports = editProduct;
