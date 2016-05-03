/**
 * "Kotitehtävä"
 * Controller for HSL Routes
 * 
 */
var RouteModel = require('../models/hslroutes.server.model.js');

exports.list = function(callback) {
  var query = RouteModel.find();  
  query.sort({createdOn: 'desc'})
       //.limit(12)
       .exec(function(err, results) {
          callback(results); 
       });
};
