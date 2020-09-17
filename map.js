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

const assertArraysEqual = function(arrayA, arrayB) {
  if (eqArrays(arrayA, arrayB)) {
    console.log(`✔️ Assertion Passed: ${arrayA} === ${arrayB}`);
  } else {
    console.log(`❌ Assertion Failed: ${arrayA} !== ${arrayB}`);
  }
};

let map = function(array, callback) {
  let newArray = [];
  for (let element of array) {
    // console.log('element BEFORE: ', element);
    // console.log('element AFTER: ', callback(element));
    // console.log('---');
    newArray.push(callback(element));
  }
  return newArray;
};

//Test cases
const words = ["ground", "control", "to", "major", "tom"];
assertArraysEqual(map(words, word => word[0]), ["g", "c", "t", "m", "t"]);

const numbers = [65, 66, 67, 68, 69];
assertArraysEqual(map(numbers, number => String.fromCharCode(number)), ["A", "B", "C", "D", "E"]);

assertArraysEqual(map(numbers, number => String(number)), ["65", "66", "67", "68", "69"]);