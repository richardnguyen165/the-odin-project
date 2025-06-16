
let response;
let score = -20;
let machineActive = false;
let para1 = document.createElement('p');
let para2 = document.createElement('p');

// Add your code here
if (score < 0 || score > 100){
  console.log("This is not possible, an error has occurred.");
}
else{
  // Don't edit the code below here!
  if (score >= 90){
    response = "What an amazing score! Did you cheat? Are you for real?";
  }
  else if (score >= 70){
    response = "That\'s a great score, you really know your stuff.";
  }
  else if (score >= 40){
    response =  "You did a passable job, not bad!";
  }
  else if (score >= 20){
    response = "You know some things, but it\'s a pretty bad score. Needs improvement."
  }
  else{
    response =  "That was a terrible score — total fail!";
  }
  section.innerHTML = ' ';
  para1.textContent = `Your score is ${ score }`;
}

para2.textContent = response;

section.appendChild(para1);
section.appendChild(para2);