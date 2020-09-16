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

const letterPosition = function(sentence) {
  //Initialize the object to return to an empty object
  let result  = {};
  //For every character of the sentence
  for (let i = 0; i < sentence.length; i++) {
    let character = sentence.charAt(i);
    if (character !== " ") {
      //If the key associated to the character exists, add the index of the character to the key"s value (an array) 
      if (result[character]) {
        result[character].push(i);
      //Else create an array with the index an associate it to the key value
      } else {
        result[character] = [i];
      }
    }
  }
  return result;
};

assertArraysEqual(letterPosition("lighthouse in the house")["l"], [0]);
assertArraysEqual(letterPosition("lighthouse in the house")["i"], [1, 11]);
assertArraysEqual(letterPosition("lighthouse in the house")["g"], [2]);
assertArraysEqual(letterPosition("lighthouse in the house")["h"], [3, 5, 15, 18]);
assertArraysEqual(letterPosition("lighthouse in the house")["t"], [4, 14]);
assertArraysEqual(letterPosition("lighthouse in the house")["o"], [6, 19]);
assertArraysEqual(letterPosition("lighthouse in the house")["u"], [7, 20]);
assertArraysEqual(letterPosition("lighthouse in the house")["s"], [8, 21]);
assertArraysEqual(letterPosition("lighthouse in the house")["e"], [9, 16, 22]);
assertArraysEqual(letterPosition("lighthouse in the house")["n"], [12]);

console.log(letterPosition("lighthouse in the house"));