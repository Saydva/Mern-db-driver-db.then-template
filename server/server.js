require("dotenv").config();
const express = require("express");
const app = express();

// dotenv variable enviroment for port
const port = process.env.PORT;

app.use(express.json());

// Get MongoDB driver connection
const { getDb, connectToDb } = require("./conn/db");

//db connection
let db;

connectToDb((err) => {
  if (!err) {
    app.listen(port, () => {
      console.log(`Server is running on port:${port}`);
    }),
      (db = getDb());
  }
});

app.get("/", (req, res) => {
  let arr = [];

  db.collection("peter")
    .find()
    .forEach((e) => {
      arr.push(e);
    })
    .then(() => {
      res.status(200).json(arr);
    });
});
