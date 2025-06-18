let arr = [5, 3, 8, 1];

function filterRange(array, min, max){
  const filteredArray = array.filter((number) => {
    return min <= number && number <= max;
  });
  return filteredArray;
}
let filtered = filterRange(arr, 1, 4);

alert( filtered ); // 3,1 (matching values)

alert( arr ); // 5,3,8,1 (not modified)