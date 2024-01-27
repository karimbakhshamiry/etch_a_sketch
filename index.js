const defaultButton = document.getElementById("default");
const colorButton = document.getElementById("color");
const resetButton = document.getElementById("reset");
const size = document.getElementById("size");
const applyButton = document.getElementById("apply-size");
let color = "random";

defaultButton.addEventListener("click", function () {
  color = "white";
});

colorButton.addEventListener("click", function () {
  color = "random";
});

resetButton.addEventListener("click", function () {
  document.querySelectorAll(".squares").forEach(function (square) {
    square.style.background = "white";
  });
});

const squares = document.querySelectorAll(".squares");
squares.forEach(function (square) {
  square.addEventListener("mouseover", function (e) {
    if (color === "white") {
      square.style.background = "white";
    } else {
      square.style.background = "#" + Math.round(Math.random() * 1000000);
    }
  });
});

applyButton.addEventListener("click", function () {
  if (size.value > "30") {
    alert("the size should not be more than 30");
    return;
  }
  const numberOfSquare = size.value ** 2;
  document.getElementById("board").innerHTML = "";
  document.getElementById(
    "board"
  ).style.gridTemplateColumns = `repeat(${size.value}, 1fr)`;
  document.getElementById(
    "board"
  ).style.gridTemplateRows = `repeat(${size.value}, 1fr)`;
  for (let i = 0; i < numberOfSquare; i++) {
    const div = document.createElement("div");
    div.className = "squares";
    div.addEventListener("mouseover", function () {
      if (color === "white") {
        div.style.background = "white";
      } else {
        div.style.background = "#" + Math.round(Math.random() * 1000000);
      }
    });
    document.getElementById("board").appendChild(div);
  }
});
