const express = require("express");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");

const {
  saveEmail,
  getEmails,
  deleteEmail,
  sendEmailInBulk,
  saveEmailOne
} = require("../controllers/email.controller");

const router = express.Router();

router.route("/emails").get(getEmails);
router.route("/emails").post( saveEmail);

router.route("/emails/bulk").post(sendEmailInBulk); 

router.route("/emails/one").post(saveEmailOne);




router
  .route("/emails/:id")
  .delete(deleteEmail);

module.exports = router;
