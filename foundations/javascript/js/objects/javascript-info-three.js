function totalOfAllSalaries(input){
  let cumulativeSalaries = 0;
  for (let key in input){
    cumulativeSalaries += input[key];
  }
  return cumulativeSalaries;
}

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}

alert(totalOfAllSalaries(salaries));

let empty = {

}

alert(totalOfAllSalaries(empty));