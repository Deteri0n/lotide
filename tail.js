//Copying the function because I don't know yet how to import one from another file
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✔️ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = function(array) {
  let arrayTemp = [];
  if (array.length > 1) {
    arrayTemp = array.slice(1, array.length);
    console.log(arrayTemp);
  }
  return arrayTemp;
};

//Test cases
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3);
assertEqual(tail([1])[0],[][0]);
assertEqual(tail([]).length,[].length);