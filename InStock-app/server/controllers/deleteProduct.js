const fs = require('fs');

const deleteProduct = (id) => {
  let message = {};
  console.log(id);
  const productData = fs.readFileSync("./model/data.json");
  const productArr = JSON.parse(productData);
  const found = productArr.some((product) => product.products.productId === id);
  const productFilter1 = productArr.filter((product) => product.products.productId !== id);
  

  fs.writeFileSync('./model/data.json', JSON.stringify(productFilter1));

  if (found) {
    message = { success: 'deleted quote', product: id };
  } else {
    message = { error: 'not found' };
  }

  return message;
};

module.exports = deleteProduct;
