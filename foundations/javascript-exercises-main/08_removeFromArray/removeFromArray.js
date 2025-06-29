const removeFromArray = function(array, ...args) {
  const filteredArray = array.filter((number) => {
    return !(args.includes(number));
  })
  return filteredArray;
};

// Do not edit below this line
module.exports = removeFromArray;
