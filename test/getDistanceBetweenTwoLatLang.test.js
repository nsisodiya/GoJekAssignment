var {expect} = require("chai");

var getDistanceBetweenTwoLatLang = require("../src/getDistanceBetweenTwoLatLang");
describe("Testing getDistanceBetweenTwoLatLang function", function () {
  it("Should return 0 for identical lat/lang combo", function () {
    expect(getDistanceBetweenTwoLatLang(20, 20, 20, 20)).to.equal(0);
    expect(getDistanceBetweenTwoLatLang(30, 50, 30, 50)).to.equal(0);
  });

  it("Should return 1499099 for combinations 20, 20, 30, 30", function () {
    expect(getDistanceBetweenTwoLatLang(20, 20, 30, 30)).to.equal(1499099);
  });

});
