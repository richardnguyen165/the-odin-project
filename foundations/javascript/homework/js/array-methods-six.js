function unique(arr) {
  const alreadySeen = [];
  for (let i = 0; i < arr.length; i++){
    let word = arr[i];
    let present = alreadySeen.includes(word);
    if (!present){
      alreadySeen.push(word);
    }
  }
  return alreadySeen;
}

let strings = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

alert( unique(strings) ); // Hare, Krishna, :-O