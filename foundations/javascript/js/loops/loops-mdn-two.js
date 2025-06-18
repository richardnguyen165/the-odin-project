const people = ['Chris', 'Anne', 'Colin', 'Terri', 'Phil', 'Lola', 'Sam', 'Kay', 'Bruce'];

const admitted = document.querySelector('.admitted');
const refused = document.querySelector('.refused');
admitted.textContent = 'Admit: ';
refused.textContent = 'Refuse: ';
// loop starts here
let admittedCounter = 0;
let refusedCounter = 0;
for (let i = 0; i < people.length; i++){
  let name = people[i];
  if (name === 'Phil' || name === 'Lola'){
    admitted.textContent += (admittedCounter === 0 ? "" : ", ") + name;
    admittedCounter += 1;
  }
  else{
    refused.textContent += (refusedCounter === 0 ? "" : ", ") + name;
    refusedCounter += 1;
  }
}
