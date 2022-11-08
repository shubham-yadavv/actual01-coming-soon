const Comment = require("../models/comment.model");

const saveComment = async (req, res) => {
  try {
    const comment = await Comment.create(req.body);
    res.status(201).json({ comment });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// get all comments

const getComments = async (req, res) => {
  try {
    const comments = await Comment.find();
    res.status(200).json({ comments });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// delete a praticular comment

const deleteComment = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Comment.findByIdAndDelete(id);
    if (deleted) {
      return res.status(200).send("Comment deleted");
    }
    throw new Error("Comment not found");
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// delete all comments

const deleteAllComments = async (req, res) => {
  try {
    const deleted = await Comment.deleteMany();
    if (deleted) {
      return res.status(200).send("All comments deleted");
    }
    throw new Error("Comments not found");
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  saveComment,
  getComments,
  deleteComment,
  deleteAllComments,
};
