//Copying the function because I don't know yet how to import one from another file
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✔️ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const head = function(array) {
  return (array[0]);
};

//Test cases
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
console.log(head([1]));
console.log(head([]));