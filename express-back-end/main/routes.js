var express = require('express');
var router = express.Router();

router.get('/api/track', (req, res) => {
  res.json('Winter Blues Joyner Lucas');
});

router.get('/api/home', (req, res) => {
  res.json('Winter Blues Joyner Lucas');
});

module.exports = router;
