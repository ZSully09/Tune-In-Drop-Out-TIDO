// load .env data into process.env
require("dotenv").config();

const express = require("express");
const router = express.Router();

// PG database client/connection setup
const { Pool } = require("pg");
const dbParams = require("./lib/db.js");
const db = new Pool(dbParams);
db.connect();

router.get("/users", (req, res) => {
  User.query().then(users => {
    res.json(users);
  });
});

router.get("/users/:id", (req, res) => {
  let id = parseInt(req.params.id);
  User.query()
    .where("id", id)
    .then(user => {
      res.json(user);
    });
});

module.exports = {
  router: router
};
