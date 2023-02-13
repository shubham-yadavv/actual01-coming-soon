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


  // var transporter = nodemailer.createTransport({
  //   host: "sandbox.smtp.mailtrap.io",
  //   port: 2525,
  //   auth: {
  //     user: "6785be9b4bf2d9",
  //     pass: "c2a59563803024"
  //   }
  // });

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
