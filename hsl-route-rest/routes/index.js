/**
 * "Kotitehtävä"
 * REST View of HSL Routes
 * 
 */
var express = require('express');
var router = express.Router();
var hslRouteController = require('../controllers/hslroutes.server.controller.js');


router.get('/', function(req, res, next) {
  return res.render('index', { title: 'HSL GTFS API' });
});

router.get('/list', function(req, res, next) {
  hslRouteController.list(function(result) {
    return res.json(result);
  });
});

/* NOT USED HERE. STATIC DATA FOR MAP ONLY
router.get('/newservice', function(req, res) {
  return servicesCtrl.getService(req, res);
});

router.post('/newservice', function(req, res) {
  return servicesCtrl.create(req, res);
});

*/

module.exports = router;
