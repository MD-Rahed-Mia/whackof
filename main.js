

//variable goes here

let currMoleTile;
let setlant;
let score = 0;
let hard = document.getElementById("hard");

hard.addEventListener("click", doubleF);

let gameOver = false;

window.onload = function () {
  setGame();
    setInterval(setMole, 1000);
    setInterval(setPlant, 1000);
    window.TransitionEvent = "1s";

}

function setGame() {
  
  for (let i = 0; i < 9; i++) {
    let tile = document.createElement("div");
    tile.id = i.toString();
    tile.addEventListener("click", scoreCount);
    document.getElementById("board").appendChild(tile);

  }
}

function getRandomNumber() {
  let num = Math.floor(Math.random() * 9);

  return num.toString();
}

function setMole() {
  if (gameOver) {
    return;
  }
  if (currMoleTile) {
    currMoleTile.innerText = "";
  }

  let mole = document.createElement("img");
  mole.src = "images/firanhatree.png"

  let num = getRandomNumber();


  if (setlant && setlant.id == num) {
    return;
  }

  currMoleTile = document.getElementById(num);
  currMoleTile.appendChild(mole);
}

function setPlant() {
  if (gameOver) {
    return;
  }

  if (setlant) {
    setlant.innerText = "";
  }

  let plant = document.createElement("img");
  plant.src = "images/tree.png";

  let num = getRandomNumber();

  if (currMoleTile && currMoleTile.id == num) {
    return;
  }
  setlant = document.getElementById(num)
  setlant.appendChild(plant);
}


function scoreCount() {
  if (gameOver) {
    return;
  }

  if (this == setlant) {
    score += 10;
    document.getElementById("score").innerText = score.toString();
  }
  else if (this == currMoleTile) { 
    document.getElementById("score").innerText = "game is over";
    gameOver = true;
  }  
}

function doubleF() {
  setMole();
  setMole();
}