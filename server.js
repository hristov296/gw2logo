const express = require("express");
const mongoose = require("mongoose");

const app = express();
const port = 3000;

mongoose.connect(
  "mongodb://irithyll.com:27017/test",
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    console.log(err);
  }
);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
