const select = document.querySelector('select');
const html = document.querySelector('.output');

select.addEventListener('change', () => {
  const choice = select.value;
  // ADD SWITCH STATEMENT
  switch (choice) {
    case "white":
      update("white", "black");
      break;
    case "black":
      update("black", "white");
      break;
    case "yellow":
      update("yellow", "black");
      break;
    case "psychedelic":
      update("psychedelic", "red");
    case "purple":
      update("purple", "yellow");
    default:
      break;
  }
});

function update(bgColor, textColor) {
  html.style.backgroundColor = bgColor;
  html.style.color = textColor;
}
