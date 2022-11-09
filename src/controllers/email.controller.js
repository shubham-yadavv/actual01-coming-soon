const Email = require("../models/email.model");
const sendEmail = require("../utils/sendEmail.utils");
const fs = require("fs");

const saveEmail = async (req, res) => {
  let readFile = fs.readFileSync("./src/utils/email/early-access.html", "utf8");
  try {
    const email = new Email(req.body);

    const oldEmail = await Email.findOne({ email: email.email });
    if (oldEmail) {
      await sendEmail({
        email: oldEmail.email,
        subject: "Welcome to my website",
        html: readFile,
        // message: "You are already subscribed to my website",
      });
    } else {
      await email.save();
      await sendEmail({
        email: email.email,
        subject: "Welcome to actual01",
        html: readFile,
      });
      return res.status(201).json({ email });
    }

    res.status(201).json({ email });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// get all emails
const getEmails = async (req, res) => {
  try {
    const emails = await Email.find();
    res.status(200).json({ emails });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// delete a praticular email
const deleteEmail = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Email.findByIdAndDelete(id);
    if (deleted) {
      return res.status(200).send("Email deleted");
    }
    throw new Error("Email not found");
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  saveEmail,
  getEmails,
  deleteEmail,
};
