const middle = require('../middle');
const assert = require('chai').assert;

describe('#middle', () => {
  it('middle([1, 2] should return []', () => {
    assert.deepEqual((middle([1, 2])), []);
  });

  it('middle([1] should return []', () => {
    assert.deepEqual((middle([1])), []);
  });

  it('middle([1, 2, 3] should return [2]', () => {
    assert.deepEqual((middle([1, 2, 3])), [2]);
  });

  it('middle([1, 2, 3, 4, 5] should return [3]', () => {
    assert.deepEqual((middle([1, 2, 3, 4, 5])), [3]);
  });

  it('middle([1, 2, 3, 4] should return [2, 3]', () => {
    assert.deepEqual((middle([1, 2, 3, 4])), [2, 3]);
  });

  it('middle([1, 2, 3, 4, 5, 6] should return [2, 3]', () => {
    assert.deepEqual((middle([1, 2, 3, 4, 5, 6])), [3, 4]);
  });
  
})