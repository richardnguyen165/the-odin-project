alert( null || 2 || undefined ); // 2
alert( alert(1) || 2 || alert(3) ); //alert(1) then 2 (remember: alert does not reutrn anything)
alert( 1 && null && 2 ); // shows  null is the falsy value (which stops execution)
alert( alert(1) && alert(2) ); // only alert(1) because it does not return anything (meaning, it returns null and is the first falsy value and stops execution)
alert( null || 2 && 3 || 4 ); // Remember: && has a higher precedence than || -> alert(null || 3 || 4) -> alert(3)
// if (age >= 14 && age <= 90)
// if (!(age >= 14 && age <= 90))


if (-1 || 0) alert( 'first' ); // executes becuse -1 is truthy
if (-1 && 0) alert( 'second' ); // does not execute because 0 is falsy
if (null || -1 && 1) alert( 'third' ); // executres because -1 && 1 is true, and thus the or expression evaluates to true


const userInput = "Admin";
const passwordInput = "TheMaster";

if (userInput === "Cancel"){
  console.log("Canceled");
}
else if (userInput === "Other"){
  console.log("I Don't Know You");
}
else if (userInput === "Admin"){
  if (passwordInput === 'Cancel'){
    console.log('Canceled');
  }
  else if ('Other'){
    console.log('Wrong password');
  }
  else if ('TheMaster'){
    console.log('Welcome!');
  }
}