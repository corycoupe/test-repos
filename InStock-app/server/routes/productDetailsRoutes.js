const express = require("express");
const router = express.Router();

const getProductDetails = require("./../controllers/getProductDetails");
// router.get("/", (req, res) => {
//   res.json(getProductDetails());
// });

router.get("/:id", (req, res) => {
  res.json(getProductDetails(req.params.id));
});
module.exports = router;
// router.get('/:id', (req, res) => {
//   res.json(getQuotes(req.params.id));
// });