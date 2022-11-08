const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
  // if name is not provided, it will be anonymous
  name: {
    type: String,
    default: "Anonymous"
  },

  comment: {
    type: String,
    default: [],
  },
});

const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;
