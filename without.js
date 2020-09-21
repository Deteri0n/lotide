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

const without = function(originalArray, arrayOfElementsToRemove) {
  let arrayWithoutElementsToRemove = [];//Initialize the new array to return
  for (let i = 0; i < originalArray.length; i++) {//Loop through the array to rework
    let addElementIs = true;//Initialize the condition to add the element to the new array to "true"
    for (let j = 0; j < arrayOfElementsToRemove.length; j++) {//Loop through the elements to remove
      if (originalArray[i] === arrayOfElementsToRemove[j]) {//Change the condition to false if the element is to bo removed
        addElementIs = false;
      }
    }
    if (addElementIs) {//add the element to the new array if it is not to be removed
      arrayWithoutElementsToRemove.push(originalArray[i]);
    }
  }
  return arrayWithoutElementsToRemove;
};

//Test cases
assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

module.exports = without;