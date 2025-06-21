let users = [
  {id: 'john', name: "John Smith", age: 20},
  {id: 'ann', name: "Ann Smith", age: 24},
  {id: 'pete', name: "Pete Peterson", age: 31},
];

function groupById(usersInput){
  let newUsersObject = {

  };
  // user is only the index
  for (let userIndex in usersInput){
    let userObject = users[userIndex];
    newUsersObject[userObject.name] = userObject;
  }
  return newUsersObject;
}

let usersById = groupById(users);
console.log(usersById);

/*
// after the call we should have:

usersById = {
  john: {id: 'john', name: "John Smith", age: 20},
  ann: {id: 'ann', name: "Ann Smith", age: 24},
  pete: {id: 'pete', name: "Pete Peterson", age: 31},
}
*/