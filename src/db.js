/*
 * In memory DB
 * */

var Lokijs = require("lokijs");
var db = new Lokijs("example.db");
db.addCollection("drivers");
module.exports = db;

//var drivers = db.addCollection('users', { unique: ['driverId'] });
//drivers.insert({driverId: 30, latitude: 12.97161923, longitude: 77.59463452, accuracy: 0.7});
//drivers.insert({driverId: 31, latitude: 12.97161924, longitude: 77.59463453, accuracy: 0.8});
