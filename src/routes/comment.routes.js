const express = require("express");
const router = express.Router();
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");
const {
  saveComment,
  getComments,
  deleteComment,
  deleteAllComments,
} = require("../controllers/comment.controller");

router.get("/comments", getComments);
router.route("/comment").post(saveComment);
router
  .route("/comments/:id")
  .delete(isAuthenticatedUser, authorizeRoles("admin"), deleteComment);
router
  .route("/comments")
  .delete(isAuthenticatedUser, authorizeRoles("admin"), deleteAllComments);

module.exports = router;
