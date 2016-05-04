var express = require('express');
var request = require('request');
var router = express.Router();
var routeRestApiUrl = process.env.ROUTE_REST_URL || 'http://localhost:3030/api/list';

router.get('/', function(req, res) {
  res.render('index', { title: 'HSL Realtime'});
});

// this support better linked docker images with own bridged network for now
router.get('/api/list', function(req, res) {
  request.get(routeRestApiUrl).pipe(res);
});

module.exports = router;
