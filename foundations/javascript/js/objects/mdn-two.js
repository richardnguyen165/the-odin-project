let bandInfo;

// Put your code here

bandInfo = {
  name : "Cats",
  nationality: "USA",
  genre: "Classical",
  members: 2,
  formed: 1901,
  split: false,
  albums: [
    { 
      name:'All The Live Long Day',
      year: 1905
    },
    {
      name: 'Meow',
      year: 2025
    }
  ]
}
// Don't edit the code below here

let para1 = document.createElement('p');
para1.textContent = bandInfo;
section.appendChild(para1);