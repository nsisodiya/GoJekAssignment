/**
 * Created by narendrasisodiya on 05/03/17.
 */
var chakram = require("chakram");
var expect = chakram.expect;

describe("Driver API Testing", function () {
  it("should make HTTP assertions easy", function () {
    var url = "http://localhost:3000/drivers?latitude=12.97161920&longitude=77.59463462&radius=2000&limit=20";
    var response = chakram.get(url);
    expect(response).not.to.be.encoded.with.gzip;
    expect(response).to.have.status(400);
    expect(response).to.have.header("content-type", "application/json; charset=utf-8");
    expect(response).to.comprise.of.json({});
    return chakram.wait();
  });
});
