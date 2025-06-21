function isEmpty(input){
  // pretty much, if there is nothing in the input, it skips over loop and returns true
  // else loop executes and returns false
  for (let key in input){
    return false;
  }
  return true;
}

let schedule = {};

alert( isEmpty(schedule) ); // true

schedule["8:30"] = "get up";

alert( isEmpty(schedule) ); // false