/**
 * Created by narendrasisodiya on 03/03/17.
 */
//This is for all sort of validations.

exports.validateLatitude = function (l) {
  if (typeof l === "number" && l >= -90 && l <= +90) {
    return true;
  } else {
    return false;
  }
};

exports.validateLongitude = function (l) {
  if (typeof l === "number" && l >= -180 && l <= +180) {
    return true;
  } else {
    return false;
  }
};

exports.validateDriverId = function (id) {
  if (typeof id === "number" && id >= 1 && id <= 50000) {
    return true;
  } else {
    return false;
  }
};
