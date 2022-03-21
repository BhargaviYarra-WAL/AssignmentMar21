var express = require("express");
var router = express.Router();
let hobbies = [
  {
    name: "Coding",
    description: "Fullstack Development",
    doc: "2022-03-12",
  },
];
router.get("/", function (req, res) {
  res.json(hobbies);
});
router.post("/", function (req, res) {
  console.log(req.body);
  let { name, description, doc } = req.body;
  hobbies.push({ name, description, doc });
  res.json({ status: "adding hobby" });
});
router.delete("/:indexToDelete", function (req, res) {
  console.log(req.params.indexToDelete);
  let newhobbies = hobbies.filter((val, index) => {
    if (index === parseInt(req.params.indexToDelete)) {
      console.log("come in return false");
      return false;
    } else {
      return true;
    }
  });
  console.log(newhobbies);
  hobbies = newhobbies;
  console.log(hobbies);
  res.json({ status: "successfully deleted" });
});
router.get("/clearall", function (req, res) {
  hobbies = [];
  res.json({ status: "all deleted" });
});
module.exports = router;
