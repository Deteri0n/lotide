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

module.exports = middle;