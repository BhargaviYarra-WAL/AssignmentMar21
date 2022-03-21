const { body, validationResult } = require("express-validator");
let tweets = [
  {
    title: "CCBPPG",
    body: "Wonderful platform for unemployees",
    doc: "2022-03-12",
    author: "CVReddy",
    category: "study",
  },
];
function getTweets(req, res) {
  res.json(tweets);
}

const createTweet = [
  body("title")
    .trim()
    .isLength({ min: 5, max: 50 })
    .withMessage("min should be 5 and max should be 50")
    .isAlphanumeric()
    .withMessage(
      "only alphabets and numbers are allowed special characters not allowed"
    ),
  body("body")
    .trim()
    .isLength({ min: 5, max: 200 })
    .withMessage("in range of 5 to 200 characters")
    .escape(),
  body("author")
    .trim()
    .isLength({ min: 5, max: 100 })
    .withMessage("in range of 5 to 100 characters")
    .escape()
    .isAlphanumeric()
    .withMessage(
      "only alphabets and numbers are allowed special characters not allowed"
    ),
  (req, res) => {
    const errors = validationResult(req);
    console.log(errors);
    if (!errors.isEmpty()) {
      res.json({ status: 0, debug_data: errors });
    } else {
      console.log(req.body);
      let { title, body, doc, author, category } = req.body;
      tweets.push({ title, body, doc, author, category });
      res.json({ status: "adding tweet completed" });
    }
  },
];

function deleteTweet(req, res) {
  console.log(req.params.indexToDelete);
  let newtweets = tweets.filter((val, index) => {
    if (index === parseInt(req.params.indexToDelete)) {
      console.log("come in return false");
      return false;
    } else {
      return true;
    }
  });
  console.log(newtweets);
  tweets = newtweets;
  console.log(tweets);
  res.json({ status: "successfully deleted" });
}
function deleteAll(req, res) {
  tweets = [];
  res.json({ status: "all deleted" });
}
module.exports = { getTweets, createTweet, deleteTweet, deleteAll };
