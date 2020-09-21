const eqObjects = require('./eqObjects');

const assertObjectEqual = function(objA, objB) {
  //Importing the util library's inspect function
  const inspect = require('util').inspect;
  if (eqObjects(objA, objB)) {
    console.log(`✔️ Assertion Passed: ${inspect(objA)} === ${inspect(objB)}`);
  } else {
    console.log(`❌ Assertion Failed: ${inspect(objA)} !== ${inspect(objB)}`);
  }
};


//Test Cases with primitive values

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectEqual(ab, ba);

const abc = { a: "1", b: "2", c: "3" };
assertObjectEqual(ab, abc);

const abd = { a: "1", b: "2", d: "3" };
assertObjectEqual(abc, abd);


//Test cases with Array as values

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertObjectEqual(cd, dc);

const cd2 = { c: "1", d: ["2", 3, 4] };
assertObjectEqual(cd, cd2);

module.exports = assertObjectEqual;