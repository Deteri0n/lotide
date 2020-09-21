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

const flatten = function(arrayToFlatten) {
  let flattenedArray = [];//Initialize the array to return
  arrayToFlatten.forEach(element => {//For each element of the array do...
    if (Array.isArray(element)) {//If the element of the array is an array
      for (let i = 0; i < element.length; i++) {
        flattenedArray.push(element[i]);//Add each sub-element to the array to return
      }
    } else {//In all other cases, add the element to the array to return
      flattenedArray.push(element);
    }
  });
  return flattenedArray;
};

//Test cases
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]),[1, 2, 3, 4, 5, 6]);

module.exports = flatten;