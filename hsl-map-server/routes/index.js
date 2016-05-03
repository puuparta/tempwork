var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('index', { title: 'HSL Realtime' });
});

module.exports = router;
