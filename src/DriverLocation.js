var memoryDB = require("./db");
var db = memoryDB.db;
db.driverlocation = {};
console.log("db", db);
const methods = {
  /*
   * Set Driven Location
   * */
  setDriverLocation(driverId, latitude, longitude, accuracy) {
    //Step 1 - Validate Parameters TODO

    //Step 2 - Store in DB
    //Make it Async - TODO
    db.driverlocation[driverId] = {
      latitude,
      longitude,
      accuracy
    }
  },


  /*
   * This method will give all Drivers who are in the given radius
   * */
  getDriversInLocation(latitude, longitude, radius = 500, limit = 10) {

  }
};

module.exports = methods;