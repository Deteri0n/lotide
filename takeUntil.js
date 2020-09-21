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

const takeUntil = function(array, callback) {
  let newArray = [];
  let counter = 0;
  while (!callback(array[counter])) {
    newArray.push(array[counter]);
    counter++;
  }
  return newArray;
};

//Test cases

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
assertArraysEqual(takeUntil(data1, x => x < 0), [ 1, 2, 5, 7, 2 ]);

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
assertArraysEqual(takeUntil(data2, x => x === ','), [ 'I\'ve', 'been', 'to', 'Hollywood' ]);

module.exports = takeUntil;