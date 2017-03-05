var db = require("./db");
var drivers = db.getCollection("drivers");
var {validateLatitude, validateLongitude, validateDriverId, validateAll} = require("./validate");
const getDistanceBetweenTwoLatLang = require("./getDistanceBetweenTwoLatLang");
exports.updateDriverLocation = function (driverId, latitude, longitude, accuracy) {
  if (validateDriverId(driverId).valid === false) {
    return {
      status: 404,
      body: {}
    };
  }
  var result = validateAll([
    validateLatitude(latitude),
    validateLongitude(longitude)
  ]);
  if (!result.valid) {
    return {
      status: 422,
      body: {errors: result.errors}
    };
  }
  //Step 2 - Check wether it exist in DB or not
  var obj = drivers.findOne({driverId});
  if (obj === null) {
    drivers.insert({driverId, latitude, longitude, accuracy});
  } else {
    //TODO find better way to update - Object.assign.
    obj.latitude = latitude;
    obj.longitude = longitude;
    obj.accuracy = accuracy;
    drivers.update(obj);
  }
  return {
    status: 200,
    body: {}
  };
};

exports.getDrivers = function (latitude, longitude, radius = 500, limit = 10) {
  console.log("Received Query", latitude, longitude, radius, limit);
  var result = validateAll([
    validateLatitude(latitude),
    validateLongitude(longitude)
  ]);
  if (result.valid) {
    var dataSet = [];
    drivers.chain().where(function (driver) {
      var distanceFromUser = getDistanceBetweenTwoLatLang(latitude, longitude, driver.latitude, driver.longitude);
      if (distanceFromUser <= radius) {
        dataSet.push({
          id: driver.driverId,
          latitude: driver.latitude,
          longitude: driver.longitude,
          distance: distanceFromUser
        });
      }
    });
    //TODO - Apply limit
    return {
      status: 200,
      body: dataSet
    };
  } else {
    return {
      status: 400,
      body: {errors: result.errors}
    };
  }
};
