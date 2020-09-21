const eqArrays = require('../eqArrays');
const assert = require('chai').assert;

describe("#eqArrays", () => {
  it("eqArrays([1, 2, 3], [1, 2, 3]) should return true", () => {
    assert.isTrue(eqArrays([1, 2, 3], [1, 2, 3]));
  });

  it("eqArrays([1, 2, 3], [3, 2, 1]) should return false", () => {
    assert.isFalse(eqArrays([1, 2, 3], [3, 2, 1]));
  });

  it("eqArrays(['1', '2', '3'], ['1', '2', '3']) should return true", () => {
    assert.isTrue(eqArrays(['1', '2', '3'], ['1', '2', '3']));
  });

  it("eqArrays(['1', '2', '3'], ['1', '2', 3]) should return false", () => {
    assert.isFalse(eqArrays(["1", "2", "3"], ["1", "2", 3]));
  });

});