const express = require("express");
const app = express();

const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/api", require("./routes/user.route"));
app.use("/api", require("./routes/email.routes"));
app.use("/api", require("./routes/comment.routes"));

app.get("/", (req, res) => {
  res.send("server is up and running");
});

module.exports = app;
