const dotenv = require("dotenv");

dotenv.config();

module.exports = {
  port: process.env.PORT,
  db_url: process.env.MONGO_URI,
  jwt_secret: process.env.JWT_SECRET,
  jwt_expire_time: process.env.JWT_EXPIRES_TIME,

  email_host: process.env.EMAIL_HOST,
  email_port: process.env.EMAIL_PORT,
  email_username: process.env.EMAIL_HOST_USERNAME,
  email_password: process.env.EMAIL_HOST_PASSWORD,
  email_from: process.env.EMAIL_FROM,

  cookie_expire: process.env.COOKIE_EXPIRE,
};
