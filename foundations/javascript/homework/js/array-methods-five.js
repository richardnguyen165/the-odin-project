let arr = ["HTML", "JavaScript", "CSS"];

function copySorted(array){
  const copyOfArray = array.slice(0);
  return copyOfArray.sort();
}
let sorted = copySorted(arr);

alert( sorted ); // CSS, HTML, JavaScript
alert( arr ); // HTML, JavaScript, CSS (no changes)