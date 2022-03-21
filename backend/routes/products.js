var express = require("express");
var router = express.Router();
var productController = require("../controllers/products");
/*router.get("/", function (req, res, next) {
  res.send("We are at base route of products");
});
router.get("/details", function (req, res, next) {
  res.send("We are at details page of products");
});*/

router.get("/", productController.productsIndex);
router.get("/details", productController.productsDeatails);

module.exports = router;
