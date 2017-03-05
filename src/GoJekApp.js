/**
 * Created by narendrasisodiya on 05/03/17.
 */

var express = require("express");
var bodyParser = require("body-parser");
//var expressJsonq = require("express-jsonq");

class GoJekApp {
  constructor() {
    this.app = express();
    this.app.use(bodyParser.json());
  }

  startServer(port) {
    this.setRoutes();
    this.app.listen(port, function () {
      console.log(`GoJek app listening on port ${port}!`);
    });
  }

  setRoutes() {
    this.app.get("/", function (req, res) {
      res.send("GoJek Assignment By Narendra Sisodiya");
    });

    this.app.put("/drivers/:driverId/location", function (req, res) {
      const {latitude, longitude, accuracy} = req.body;
      //TODO
      res.json({latitude, longitude, accuracy});
    });

    this.app.get("/drivers", function (req, res) {
      //TODO
      var {latitude, longitude, radius, limit} = req.query;
      latitude = parseFloat(latitude);
      longitude = parseFloat(longitude);
      radius = parseFloat(radius);
      limit = parseFloat(limit);
      console.log({latitude, longitude, radius, limit});
      res.json({latitude, longitude, radius, limit});
    });
  }

  stopServer() {
    this.app.close();
  }
}

module.exports = GoJekApp;
