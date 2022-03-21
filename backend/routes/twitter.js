var express = require("express");
var router = express.Router();
var twitterController = require("../controllers/twitter");
router.get("/", twitterController.getTweets);
router.post("/", twitterController.createTweet);
router.delete("/:indexToDelete", twitterController.deleteTweet);
router.get("/clearall", twitterController.deleteAll);
module.exports = router;
