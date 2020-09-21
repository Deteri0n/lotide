const tail = function(array) {
  let arrayTemp = [];
  if (array.length > 1) {
    arrayTemp = array.slice(1, array.length);
    console.log(arrayTemp);
  }
  return arrayTemp;
};

module.exports = tail;