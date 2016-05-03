/**
 * "Kotitehtävä"
 * Model for HSL Routes
 * 
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var RouteSchema = new Schema({
    route_id :  String,
    agency_id : String,
    route_short_name : String,
    route_long_name : String,
    route_desc : String,
    route_type : String,
    route_url : String
});

var RouteModel = mongoose.model('routes', RouteSchema);

module.exports = RouteModel;