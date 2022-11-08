const mongoose = require("mongoose");

const { db_url } = require("../config");

module.exports = async () => {
  try {
    await mongoose.connect(db_url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Db Connected");
  } catch (error) {
    console.log("Error connecting to db", error);
  }
};
