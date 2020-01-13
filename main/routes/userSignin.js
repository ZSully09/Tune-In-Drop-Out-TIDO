const express = require("express");
const router = express.Router();
const cors = require("cors");

const bodyparser = require("body-parser");
// const client = require("../db");

// const app = express();

router.use(bodyparser.json());
router.use(cors());

const database = {
  users: [
    {
      id: 111,
      name: "Chris",
      email: "chris.drysdale12@gmail.com",
      password: "password"
      // joined: new Time()
    },
    {
      id: 222,
      name: "Nick",
      email: "nhoszko@gmail.com",
      password: "password"
      // joined: new Time()
    },
    {
      id: 333,
      name: "Zach",
      email: "zscullivan93@gmail.com",
      password: "password"
      // joined: new Time()
    }
  ]
};

router.get("/", (req, res) => {
  res.send(database.users);
});

router.get("profile/:id", (req, res) => {
  const { id } = req.params;
  let found = false;
  database.users.forEach(users => {
    if (user.id === id) {
      found = true;
      return res.json(user);
    }
  });
  if (!found) {
    res.status(400).json("user not found");
  }
});

router.post("/siginin", (req, res) => {
  if (
    req.body.email === database.users[1].email &&
    req.body.password === database.users[1].password
  ) {
    res.json("success");
  } else {
    res.status(400).json("Signin error");
  }
});

router.post("/register", (req, res) => {
  const { name, email, password } = req.body;
  database.users.push({
    id: 777,
    name: "Micheal Ebenazer",
    email: "the.storm@gmail.co.uk",
    password: "password",
    joined: new Time()
  });
  res.json(database.users[database.users.length - 1]);
});

module.exports = router;
