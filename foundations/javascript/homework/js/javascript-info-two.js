let john = { name: "John", surname: "Smith", id: 1 };
let pete = { name: "Pete", surname: "Hunt", id: 2 };
let mary = { name: "Mary", surname: "Key", id: 3 };

let users = [ john, pete, mary ];

function mapToId(userArray){
  let newArray = userArray.map(item => {
    let newObject = {
      fullName: `${item.name} ${item.surname}`,
      id: item.id
    }
    return newObject;
  });
  return newArray;
}

let usersMapped = mapToId(users);


/*
usersMapped = [
  { fullName: "John Smith", id: 1 },
  { fullName: "Pete Hunt", id: 2 },
  { fullName: "Mary Key", id: 3 }
]
*/

console.log(usersMapped);
alert( usersMapped[0].id ) // 1
alert( usersMapped[0].fullName ) // John Smith