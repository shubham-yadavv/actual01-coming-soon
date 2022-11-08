const nodemailer = require("nodemailer");

const {
  email_host,
  email_port,
  email_username,
  email_password,
  email_from,
} = require("../config");

const sendEmail = async (options) => {

  const transporter = nodemailer.createTransport({
   
    host: email_host,
    port: email_port,
    auth: {
      user: email_username,
      pass: email_password,
    },

  });

  const mailOptions = {
    from: email_from,
    to: options.email,
    subject: options.subject,
    text: options.message,
    html: options.html,
  };


  await transporter.sendMail(mailOptions);
};

module.exports = sendEmail;
