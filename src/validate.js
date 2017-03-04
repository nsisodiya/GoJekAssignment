/**
 * Created by narendrasisodiya on 03/03/17.
 */
//This is for all sort of validations.

exports.validateLatitude = function (l) {
  if (typeof l === "number" && -90 <= l && l <= +90) {
    return true;
  } else {
    return false;
  }
};

exports.validateLongitude = function (l) {
  if (typeof l === "number" && -180 <= l && l <= +180) {
    return true;
  } else {
    return false;
  }
};

exports.validateDriverId = function (id) {
  if (typeof id === "number" && 1 <= id && id <= 50000) {
    return true;
  } else {
    return false;
  }
};
