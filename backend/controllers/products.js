function productsIndex(req, res) {
  res.send("<h1>We are at base route of products</h1>");
}
function productsDeatails(req, res) {
  res.send("We are at  details page of products");
}
module.exports = { productsIndex, productsDeatails };
