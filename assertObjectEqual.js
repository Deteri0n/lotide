const eqArrays = function(arrayA, arrayB) {
  if (arrayA.length !== arrayB.length) {
    return false;
  } else {
    for (let i = 0; i < arrayA.length; i++) {
      if (arrayA[i] !== arrayB[i]) {
        return false;
      }
    }
  }
  return true;
};

const eqObjects = function(objA, objB) {
  //Extracting the keys of objA and objB in two different arrays
  let keysObjA = Object.keys(objA);
  let keysObjB = Object.keys(objB);
  //If the arrays are not of the same length, there is a different number of keys so the objects are different
  if (keysObjA.length !== keysObjB.length) {
    return false;
  } else {
    //For each element (key) of keysObjA (objA)
    for (let element of keysObjA) {
      //If the value of tje element is an array, use the function eqArray
      if (Array.isArray(objA[element])) {
        return eqArrays(objA[element], objB[element]);
      //If it's not an array compare the values of the elment in the other array
      //NOTE : If the key is not defined in the other array, it will return undifined and therefor the expression will be falsy
      } else if (objA[element] !== objB[element]) {
        return false;
      }
    }
  }
  return true;
};

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