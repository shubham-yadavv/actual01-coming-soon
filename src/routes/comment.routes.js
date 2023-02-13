const express = require("express");
const router = express.Router();
const {
  saveComment,
  getComments,
} = require("../controllers/comment.controller");

router.get("/comments", getComments);
router.route("/comment").post(saveComment);


module.exports = router;
