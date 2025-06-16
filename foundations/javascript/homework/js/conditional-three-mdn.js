
let machineActive = true;
let pwd = 'cheese';

let machineResult = "Machine on.";
let pwdResult;

// Add your code here
/*
if (machineActive){
  machineResult = "Machine on.";
  if (pwd === 'cheese'){
    pwdResult = 'You have logged in successfully';
  }
  else{
    pwdResult = 'You have not logged in successfully';
  }
}
else{
  machineResult = "Machine off.";
}
*/

// pretty much, we already have the machineResult set as a default to "Machine on.", and if the machine is not  on, we inidicate its off
// else, we already know its on (meaning we dont change the message, and check the pwd) -> we need to have a default because we cannot do an assignment of an variable and have a conditional in the else clause of the outer ternary
(!machineActive) ? machineResult = "Machine off." : pwd === 'cheese' ? pwdResult = 'You have logged in successfully' : pwdResult = 'You have not logged in successfully';
// Don't edit the code below here!

section.innerHTML = ' ';
let para1 = document.createElement('p');
let para2 = document.createElement('p');

para1.textContent = machineResult;
para2.textContent = pwdResult;

section.appendChild(para1);
section.appendChild(para2);