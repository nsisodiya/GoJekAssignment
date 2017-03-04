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
