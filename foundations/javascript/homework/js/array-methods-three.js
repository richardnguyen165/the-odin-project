let arr = [5, 3, 8, 1];

function filterRange(array, min, max){
  arr = array.filter((number) => {
    return min <= number && number <= max;
  });
}

filterRange(arr, 1, 4);

alert( arr ); // [3, 1]


// or 

let arrTwo = [5, 3, 8, 1];

function filterRangeTwo(array, min, max){
  for (let i = 0; i < array.length; i++){
    if (min <= array[i] <= max){
      array.splice(i, 1);
    }
  }
}

filterRangeTwo(arrTwo, 1, 4);

alert (arrTwo); // [3, 1]

// remember arrays are passed by reference (meaning it points to same location in memory)