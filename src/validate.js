/**
 * Created by narendrasisodiya on 03/03/17.
 */
//This is for all sort of validations.

exports.validateAll = function (arr) {
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
};

exports.validateLatitude = function (l) {
  if (typeof l === "number" && l >= -90 && l <= +90) {
    return {
      valid: true
    };
  } else {
    return {
      valid: false,
      error: `Latitude should be number and in the Range (-90 to +90), But you gave ${l}`
    };
  }
};

exports.validateLongitude = function (l) {
  if (typeof l === "number" && l >= -180 && l <= +180) {
    return {
      valid: true
    };
  } else {
    return {
      valid: false,
      error: `Longitude should be number and in the Range (-180 to +180), But you gave ${l}`
    };
  }
};

exports.validateDriverId = function (id) {
  if (typeof id === "number" && id >= 1 && id <= 50000) {
    return {
      valid: true
    };
  } else {
    return {
      valid: false,
      error: `Driver Id should be number and in the Range (1 to 50000), But you gave ${id}`
    };
  }
};
