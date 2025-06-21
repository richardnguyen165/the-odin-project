let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [ john, pete, mary ];

function mapToNames(inputArray){
  let newArray = inputArray.map(item => item.name);
  return newArray.join(", ");
}

let names = mapToNames(users);

alert( names ); // John, Pete, Mary