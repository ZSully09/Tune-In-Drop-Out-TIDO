const { Router } = require("express");
const bcrypt = require("bcrypt");

const router = new Router();

router.post("/users", (req, res, next) => {
  const user = {
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 10),
    password_confirmation: bcrypt.hashSync(req.body.password_confirmation, 10)
  };

  if (req.body.password !== req.body.password_confirmation) {
    return res.status(400).send({
      message: "password and password confirmation are not the same"
    });
  } else {
    User.create(user)
      .then(() => {
        return res.status(201).send({
          message: `Welcome, You are now signed in!`
        });
      })
      .catch(error => next(error));
  }
});

router.get("/users", (req, res, next) => {
  const limit = req.query.limit || 25;
  const offset = req.query.offset || 0;

  Promise.all([User.count(), User.findAll({ limit, offset })])
    .then(Users => {
      res.send({ Users });
    })
    .catch(error => next(error));
});

module.exports = router;
