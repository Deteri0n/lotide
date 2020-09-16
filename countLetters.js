const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✔️ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(sentence) {
  //Initialize the object to return to an empty object
  let result  = {};
  //For every key of the object
  for (const character of sentence) {
    //If it's not a space
    if (character !== " ") {
      //If the key exists, add 1 to its value
      if (result[character]) {
        result[character] += 1;
      //Else create the key and give it 1 as a value
      } else {
        result[character] = 1;
      }
    }
  }
  return result;
};

assertEqual(countLetters("lighthouse in the house")["l"], 1);
assertEqual(countLetters("lighthouse in the house")["i"], 2);
assertEqual(countLetters("lighthouse in the house")["g"], 1);
assertEqual(countLetters("lighthouse in the house")["h"], 4);
assertEqual(countLetters("lighthouse in the house")["t"], 2);
assertEqual(countLetters("lighthouse in the house")["o"], 2);
assertEqual(countLetters("lighthouse in the house")["u"], 2);
assertEqual(countLetters("lighthouse in the house")["s"], 2);
assertEqual(countLetters("lighthouse in the house")["e"], 3);
assertEqual(countLetters("lighthouse in the house")["n"], 1);

console.log(countLetters("lighthouse in the house"));