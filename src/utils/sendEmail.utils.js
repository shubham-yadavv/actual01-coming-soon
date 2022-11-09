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

    type: "SMTP",
    host: email_host,
    port: email_port,
    secure: true,
    auth: {
      user: email_username,
      pass: email_password,
    },
    tls: {
      rejectUnauthorized: false,
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
