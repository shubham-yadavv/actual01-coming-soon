const express = require("express");
const { port } = require("./config");
const { connection } = require("./database");
const app = require("./app");

connection();

const server = app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});

process.on("unhandledRejection", (err, promise) => {
  console.log(`Error: ${err.message}`);
  server.close(() => process.exit(1));
});
