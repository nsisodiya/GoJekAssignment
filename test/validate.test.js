var {expect} = require("chai");

var {validateLatitude, validateLongitude, validateDriverId} = require("../src/validate");
describe("Testing validateLatitude function", function () {
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
  // var tests = [
  //   {
  //     d: "Should return true for 34",
  //     i: [34],
  //     o: true
  //   },
  //   {
  //     d: "Should return true for 34",
  //     i: [-34],
  //     o: true
  //   }
  // ];
  // var funcToCall = validateLongitude;
  // tests.forEach(function (T) {
  //   it(T.d, function () {
  //     expect(funcToCall(...T.i)).to.equal(T.o);
  //   });
  // });
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

describe("Testing validateDriverId function", function () {

  it("Should return true for 1", function () {
    expect(validateDriverId(1)).to.equal(true);
  });
  it("Should return true for 2", function () {
    expect(validateDriverId(2)).to.equal(true);
  });
  it("Should return true for 10", function () {
    expect(validateDriverId(10)).to.equal(true);
  });
  it("Should return true for 100", function () {
    expect(validateDriverId(100)).to.equal(true);
  });
  it("Should return true for 1000", function () {
    expect(validateDriverId(1000)).to.equal(true);
  });
  it("Should return true for 50000", function () {
    expect(validateDriverId(50000)).to.equal(true);
  });
  it("Should return false for 50001", function () {
    expect(validateDriverId(50001)).to.equal(false);
  });
  it("Should return false for 0", function () {
    expect(validateDriverId(0)).to.equal(false);
  });
  it("Should return fail when input is null", function () {
    expect(validateDriverId(null)).to.equal(false);
  });
  it("Should return fail when input is undefined", function () {
    expect(validateDriverId(undefined)).to.equal(false);
  });
  it("Should return fail when input is Object", function () {
    expect(validateDriverId({})).to.equal(false);
  });
  it("Should return fail when input is Array", function () {
    expect(validateDriverId([])).to.equal(false);
  });
});