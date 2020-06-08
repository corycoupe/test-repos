const express = require("express");
const cors = require("cors");
const app = express(); //invoke express

const productRoutes = require("./routes/productRoutes");
const warehouseRoutes = require("./routes/warehouseRoutes");
const getProductsPerWarehouse = require("./controllers/getProductsPerWarehouse");
const productDetailsRoutes = require("./routes/productDetailsRoutes");

// middleware here
app.use(express.json());
app.use(cors());

//inventory endpoint
app.use("/inventory", productRoutes);

//locations endpoint
app.use("/locations", warehouseRoutes);
//get product details
app.use("/product", productDetailsRoutes);


app.get("/locations/:id", (req, res) => {
  const warehouseId = req.params.id;
  res.send(getProductsPerWarehouse(warehouseId));
});

// opening a listening to port 5000 for server
app.listen(5000, console.log("app is listening to port 5000"));
