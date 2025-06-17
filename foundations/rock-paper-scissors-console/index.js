let continueGame = true;

while (continueGame){
  let userInput = prompt("Rock, Paper, or Scissors?");

  fixedInput = userInput.toLowerCase().trim();

  if (fixedInput === 'rock' || fixedInput === 'paper' || fixedInput === 'scissors'){
    computerMove(fixedInput);
  } 
  else{
    console.log(`INVALID MOVE: ${userInput}`);
  }
}


function computerMove(playerMove){
  const randomNumber = Math.floor(Math.random() * 3);
  let computerMove;

  if (randomNumber === 0){
    computerMove = 'rock';  
  }
  else if (randomNumber === 1){
    computerMove = 'paper';
  }
  else{
    computerMove = 'scissors';
  }

  let finalMessage = `Your Move: ${playerMove[0].toUpperCase() + playerMove.slice(1)}. Computer Move: ${computerMove[0].toUpperCase() + computerMove.slice(1)}. Result: `;
  if (playerMove === computerMove){
    finalMessage += 'Tie!';
  }
  else if ((playerMove === 'rock' && computerMove === 'scissors') || (playerMove === 'scissors' && computerMove === 'paper') || (playerMove === 'paper' && computerMove === 'rock')){
    finalMessage += 'Win!';
  }
  else{
    finalMessage += 'Lost!';
  }
  console.log(finalMessage);
  return;
}