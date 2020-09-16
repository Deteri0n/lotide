const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✔️ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(sentence) {
  let result  = {};
  for (const character of sentence) {
    if (character !== "") {
      if (result[character]) {
        result[character] += 1;
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