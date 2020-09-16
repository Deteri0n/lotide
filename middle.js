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

const middle = function(array) {
  //Initialize the array to return to an emtpy array
  let middleOfArray = [];
  //If the array is composed of less than 3 numbers, return the empty array
  if (array.length <= 2) {
    return middleOfArray;
    //If the array is composed of an even number of values, add the 2 middle values to the array to return
  } else if (array.length % 2 === 0) {
    middleOfArray.push(array[(array.length) / 2 - 1]);
    middleOfArray.push(array[(array.length) / 2]);
    //Else (the array is composed of an odd number of values, add the middle value to the array to return)
  } else {
    middleOfArray.push(Math.ceil(array.length / 2));
  }
  return middleOfArray;
};

//Test Cases
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);