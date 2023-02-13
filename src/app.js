const express = require("express");
const app = express();

const cors = require("cors");
const bodyParser = require("body-parser");

app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api", require("./routes/email.routes"));
app.use("/api", require("./routes/comment.routes"));

app.get("/", (req, res) => {
  res.send("server is up and running");
});

module.exports = app;
