var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var expressJsonq = require('express-jsonq');

// parse application/json
app.use(bodyParser.json());
app.use(expressJsonq());

app.get('/', function (req, res) {
  res.send('GoJek Assignment By Narendra Sisodiya')
});

app.put('/drivers/:driverId/location', function (req, res) {
  const {latitude, longitude, accuracy} = req.body;
  //TODO
  res.json({});
});

app.get('/drivers', function (req, res) {
  //TODO
  var {latitude, longitude, radius, limit} = req.query;
  latitude = parseFloat(latitude);
  longitude = parseFloat(longitude);
  radius = parseFloat(radius);
  limit = parseFloat(limit);
  console.log({latitude, longitude, radius, limit});
  res.json({latitude, longitude, radius, limit});
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});