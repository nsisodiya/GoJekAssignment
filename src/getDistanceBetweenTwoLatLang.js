/**
 * Created by narendrasisodiya on 04/03/17.
 */
//Copy Paste from  - http://stackoverflow.com/questions/27928/calculate-distance-between-two-latitude-longitude-points-haversine-formula
function deg2rad(deg) {
  return deg * (Math.PI / 180);
}
module.exports = function getDistanceBetweenTwoLatLang(lat1, lon1, lat2, lon2) {
  //Validation of Lat/Long is not done here. We assume, that we have got correct result.
  var R = 6371; // Radius of the earth in km
  var dLat = deg2rad(lat2 - lat1);  // deg2rad below
  var dLon = deg2rad(lon2 - lon1);
  var a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2)
    ;
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  var d = R * c * 1000; // Distance in m
  return parseInt(d);
};
