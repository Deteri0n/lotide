const tail = require('../tail');
const assert = require('chai').assert;

describe("#tail", () => {
  it("returns 2 for tail(['Yo Yo', 'Lighthouse', 'Labs']).length", () => {
    assert.strictEqual(tail(["Yo Yo", "Lighthouse", "Labs"]).length, 2);
  });

  it("returns [][0] for [1])[0]", () => {
    assert.strictEqual(tail([1])[0], [][0]);
  });

  it("returns 'Hello' for 'tail([]).length'", () => {
    assert.strictEqual(tail([]).length, [].length);
  });

});