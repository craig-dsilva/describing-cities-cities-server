const express = require("express");
const pool = require("./pool");
require("dotenv").config();

const app = express();

const PORT = process.env.PORT;

app.get("/city", (req, res) => {
  pool
    .query("SELECT * FROM cities")
    .then((data) =>
      res.json(data.rows[Math.floor(Math.random() * data.rows.length)].city)
    )
    .catch((err) => {
      console.error(err);
    });
});

app.listen(PORT);
