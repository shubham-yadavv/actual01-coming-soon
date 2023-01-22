const mongoose = require("mongoose");
const moment = require("moment");

const emailSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true
  },
  createdAt : {
    type: String,
    default: moment().format("DD-MMMM-YYYY, h:mm:ss a")

  }
});

const Email = mongoose.model("Email", emailSchema);

module.exports = Email;
