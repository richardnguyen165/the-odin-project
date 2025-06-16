switch (expression) {
  case choice1:
    // run this code
    break;

  case choice2:
    // run this code instead
    break;

  // include as many cases as you like

  default: // the "else" condition
    // actually, just run this code
    break; // you need a break to stop the flow
}


let arg = prompt("Enter a value?");
switch (arg) {
  // can merge more than one case (if arg === '0' || arg === '1')
  case '0':
  case '1':
    alert( 'One or zero' );
    break;

  case '2':
    alert( 'Two' );
    break;

  case 3:
    alert( 'Never executes!' );
    break;
  default:
    alert( 'An unknown value' );
}

//** Let’s emphasize that the equality check is always strict. The values must be of the same type to match. -> all cases must be of the same data type