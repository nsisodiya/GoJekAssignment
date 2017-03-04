var chai, {expect} = require("chai");

var {validateLatitude, validateLongitude} = require("../src/validate");
describe("Testing validateLatitude function", function () {
  var tests = [
    {
      d: "Should return true for 34",
      i: [34],
      o: true
    }
  ];
  it("Should return true for 34", function () {
    expect(validateLatitude(34)).to.equal(true);
  });
  it("Should return true for -34", function () {
    expect(validateLatitude(-34)).to.equal(true);
  });
  it("Should return true for 34.667677", function () {
    expect(validateLatitude(34.667677)).to.equal(true);
  });
  it("Should return true for -34.667677", function () {
    expect(validateLatitude(-34.667677)).to.equal(true);
  });
  it("Should return true for 90", function () {
    expect(validateLatitude(90)).to.equal(true);
  });
  it("Should return true for -90", function () {
    expect(validateLatitude(-90)).to.equal(true);
  });
  it("Should return true for 0", function () {
    expect(validateLatitude(0)).to.equal(true);
  });
  it("Should return fail for 90.0001", function () {
    expect(validateLatitude(90.0001)).to.equal(false);
  });
  it("Should return fail for -90.0001", function () {
    expect(validateLatitude(-90.0001)).to.equal(false);
  });
  it("Should return fail for 1600", function () {
    expect(validateLatitude(1600)).to.equal(false);
  });
  it("Should return fail for -1600", function () {
    expect(validateLatitude(-1600)).to.equal(false);
  });
  it("Should return fail when no input is given", function () {
    expect(validateLatitude()).to.equal(false);
  });
  it("Should return fail when empty string is given", function () {
    expect(validateLatitude("")).to.equal(false);
  });
  it("Should return fail when string is given", function () {
    expect(validateLatitude("34")).to.equal(false);
    expect(validateLatitude("100")).to.equal(false);
    expect(validateLatitude("abcd")).to.equal(false);
  });
  it("Should return fail when input is null", function () {
    expect(validateLatitude(null)).to.equal(false);
  });
  it("Should return fail when input is undefined", function () {
    expect(validateLatitude(undefined)).to.equal(false);
  });
  it("Should return fail when input is Object", function () {
    expect(validateLatitude({})).to.equal(false);
  });
  it("Should return fail when input is Array", function () {
    expect(validateLatitude([])).to.equal(false);
  });
});

describe("Testing validateLongitude function", function () {
  var tests = [
    {
      d: "Should return true for 34",
      i: [34],
      o: true
    }
  ];
  it("Should return true for 34", function () {
    expect(validateLongitude(34)).to.equal(true);
  });
  it("Should return true for -34", function () {
    expect(validateLongitude(-34)).to.equal(true);
  });
  it("Should return true for 34.667677", function () {
    expect(validateLongitude(34.667677)).to.equal(true);
  });
  it("Should return true for -34.667677", function () {
    expect(validateLongitude(-34.667677)).to.equal(true);
  });
  it("Should return true for 180", function () {
    expect(validateLongitude(180)).to.equal(true);
  });
  it("Should return true for -180", function () {
    expect(validateLongitude(-180)).to.equal(true);
  });
  it("Should return true for 0", function () {
    expect(validateLongitude(0)).to.equal(true);
  });
  it("Should return fail for 180.0001", function () {
    expect(validateLongitude(180.0001)).to.equal(false);
  });
  it("Should return fail for -180.0001", function () {
    expect(validateLongitude(-180.0001)).to.equal(false);
  });
  it("Should return fail for 1600", function () {
    expect(validateLongitude(1600)).to.equal(false);
  });
  it("Should return fail for -1600", function () {
    expect(validateLongitude(-1600)).to.equal(false);
  });
  it("Should return fail when no input is given", function () {
    expect(validateLongitude()).to.equal(false);
  });
  it("Should return fail when empty string is given", function () {
    expect(validateLongitude("")).to.equal(false);
  });
  it("Should return fail when string is given", function () {
    expect(validateLongitude("34")).to.equal(false);
    expect(validateLongitude("100")).to.equal(false);
    expect(validateLongitude("abcd")).to.equal(false);
  });
  it("Should return fail when input is null", function () {
    expect(validateLongitude(null)).to.equal(false);
  });
  it("Should return fail when input is undefined", function () {
    expect(validateLongitude(undefined)).to.equal(false);
  });
  it("Should return fail when input is Object", function () {
    expect(validateLongitude({})).to.equal(false);
  });
  it("Should return fail when input is Array", function () {
    expect(validateLongitude([])).to.equal(false);
  });
});