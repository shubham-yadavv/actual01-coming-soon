const dotenv = require("dotenv");

dotenv.config();

module.exports = {
  port: process.env.PORT,
  db_url: process.env.MONGO_URI,

  email_host: process.env.EMAIL_HOST,
  email_port: process.env.EMAIL_PORT,
  email_username: process.env.EMAIL_HOST_USERNAME,
  email_password: process.env.EMAIL_HOST_PASSWORD,
  email_from: process.env.EMAIL_FROM,


};
