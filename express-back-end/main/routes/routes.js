var express = require('express');
var router = express.Router();
var client = require('../db');

// USERS

router.get('/api/users', (req, res) => {
  client
    .query(`SELECT * FROM users`)
    .then(result => {
      console.log('result', result);
      res.json(result.rows);
    })
    .catch(error => {
      console.log('error', error);
      res.send(500);
    });
});

router.post('/api/users', (req, res) => {
  const values = [req.body.email, req.body.password];
  console.log('values', values);
  client
    .query(
      `INSERT INTO users(email, password)
              VALUES($1, $2)
              ON CONFLICT DO NOTHING`,
      values
    )
    .then(result => {
      console.log('result', result);
      res.json(result.rows);
    })
    .catch(error => {
      console.log('error', error);
      res.sendStatus(500);
    });
});

// PLAYLISTS

router.get('/api/party', (req, res) => {
  client
    .query(`SELECT * FROM party`)
    .then(result => {
      console.log('result', result);
      res.json(result.rows);
    })
    .catch(error => {
      console.log('error', error);
      res.send(500);
    });
});

router.post('/api/party', (req, res) => {
  const values = [req.body.partyName];
  console.log('values', values);
  client
    .query(
      `INSERT INTO party(partyName)
              VALUES($1)
              ON CONFLICT DO NOTHING`,
      values
    )
    .then(result => {
      console.log('result', result);
      res.json(result.rows);
    })
    .catch(error => {
      console.log('error', error);
      res.sendStatus(500);
    });
});

module.exports = router;
