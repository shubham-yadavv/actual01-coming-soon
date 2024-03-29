const Email = require("../models/email.model");
const sendEmail = require("../utils/sendEmail.utils");
const fs = require("fs");
const util = require('util');


const saveEmail = async (req, res) => {
  let readFile = fs.readFileSync("./src/utils/email/early-access.html", "utf8");
  try {
    const email = new Email(req.body);

    const oldEmail = await Email.findOne({ email: email.email });
    if (oldEmail) {
      return res.status(400).json({ error: "Email already exists" });
    } else {
      await email.save();
      return res.status(201).json({ email });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// saveEmail with no email
const saveEmailOne = async (req, res) => {
  try {
    const email = new Email(req.body);
    await email.save();
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

// send a email to all emails in the database one by one with a delay of 5 seconds and stop from getting request timeout
const sendEmailInBulk = async (req, res) => {
  let readFile = fs.readFileSync("./src/utils/email/early-access.html", "utf8");
  try {
    const emails = await Email.find();
    const delay = (ms) => new Promise((res) => setTimeout(res, ms));
    for (let i = 0; i < emails.length; i++) {
      await sendEmail({
        email: emails[i].email,
        subject: "Your registration has been confirmed.",
        html: readFile,
      });
      await delay(5000);
    }
    res.status(200).json({ message: "Emails sent successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};



module.exports = {
  saveEmail,
  getEmails,
  deleteEmail,
  sendEmailInBulk,
  saveEmailOne
};