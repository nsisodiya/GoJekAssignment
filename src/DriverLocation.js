var db = require("./db");
var drivers = db.getCollection("drivers");
var {validateLatitude, validateLongitude, validateDriverId} = require("./validate");
const getDistanceBetweenTwoLatLang = require("./getDistanceBetweenTwoLatLang");
function validateAll(arr) {
  //TODO - we can use reduce function of array
  var result = {
    valid: true,
    errors: []
  };
  arr.forEach(function (v) {
    result.valid = result.valid && v.valid;
    if (v.valid === false) {
      result.errors.push(v.error);
    }
  });
  return result;
}

exports.updateDriverLocation = function (driverId, latitude, longitude, accuracy) {
//Step 1 - Validate Parameters TODO
  var result = validateAll([
    validateDriverId(driverId),
    validateLatitude(latitude),
    validateLongitude(longitude)
  ]);
  if (result.valid) {
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
      success: true
    };
  } else {
    return {
      success: false,
      errors: result.errors
    };
  }
  // return {
  //   success: true, //false
  //   errors: [
  //     "Driver Id cannot be empty",
  //     "Driver Id is Not Valid",
  //     "Latitude cannot be empty",
  //     "Longitude cannot be empty",
  //     "Accuracy cannot be empty",
  //     "Latitude should be between +/- 90",
  //     "Longitude should be between +/- 180",
  //   ]
  // };
};

exports.getDrivers = function (latitude, longitude, radius = 500, limit = 10) {
  console.log("Received Query", latitude, longitude, radius, limit);
  var result = validateAll([
    validateLatitude(latitude),
    validateLongitude(longitude)
  ]);
  if (result.valid) {
    var dataSet = drivers.chain().where(function (driver) {
      var distanceFromUser = getDistanceBetweenTwoLatLang(latitude, longitude, driver.latitude, driver.longitude);
      return distanceFromUser <= radius;
    }).limit(limit).data();
    return {
      success: true,
      data: dataSet
    };
  } else {
    return {
      success: false,
      errors: result.errors
    };
  }
};
