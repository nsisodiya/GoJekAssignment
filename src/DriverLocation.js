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
    };

    return {
      success: true, //false
      errors: [
        "Driver Id cannot be empty",
        "Driver Id is Not Valid",
        "Latitude cannot be empty",
        "Longitude cannot be empty",
        "Accuracy cannot be empty",
        "Latitude should be between +/- 90",
        "Longitude should be between +/- 180",
      ]
    };
  },

  /*
   * This method will give all Drivers who are in the given radius
   * */
  getDriversInLocation(latitude, longitude, radius = 500, limit = 10) {
    console.log(limit);
  }
};

module.exports = methods;
