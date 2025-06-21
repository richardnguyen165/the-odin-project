let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };

function getAverageAge(arr){
  let total = arr.reduce((past, now) => past += now.age, 0);
  return (total / arr.length);
}
let arr = [ john, pete, mary ];

alert( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28