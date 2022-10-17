console.log("main.js loaded successfully");

const computerNumber = document.querySelector("#computerNumber");
const playerNumber = document.querySelector("#playerNumber");

const winDisplay = document.querySelector("#wins");
const lossDisplay = document.querySelector("#losses");
const scoreDisplay = document.querySelector("#score");

const message = document.querySelector("#message");

let wins = 0;
let losses = 0;
let score = 10;
let difficulty = 1;

let playerGuess, computerGuess;

function setComputerNumber(val) {
  computerNumber.textContent = val;
}
function setPlayerNumber(val) {
  playerNumber.textContent = val;
}

function setMessage(msg) {
  message.textContent = msg;
}

function addWin() {
  wins++;
  winDisplay.textContent = wins;
  document.querySelector(".container").style.backgroundColor = "green";
  setScore(score + 5);
}

function addLoss() {
  losses++;
  lossDisplay.textContent = losses;
  document.querySelector(".container").style.backgroundColor = "red";
  setScore(score - 3);
}

function setScore(val) {
  score = val;
  scoreDisplay.textContent = score;
}


function getRandomNumber() {
  return Math.floor(Math.random() * 100) + 1;
}

function guessHigher() {

  if(score < 1) {
    setMessage("You don't have enough points to guess higher");
    return;
  }

  computerGuess = getRandomNumber();
  playerGuess = getRandomNumber();
  setComputerNumber(computerGuess)
  setPlayerNumber(playerGuess)

  if (playerGuess > computerGuess) {
    setMessage("You win! Your score has increased 5+ points");
    addWin();
  }
  else {
    setMessage("You lose! Your score has decreased -3 points");
    addLoss();
  }

  
}

function guessLower () {

  if(score < 1) {
    setMessage("You don't have enough points to guess lower");
    return;
  }

  computerGuess = getRandomNumber();
  playerGuess = getRandomNumber();
  setComputerNumber(computerGuess)
  setPlayerNumber(playerGuess)

  if (playerGuess < computerGuess) {
    setMessage("You win! Your score has increased 5+ points");
    addWin();
  }
  else {
    setMessage("You lose! Your score has decreased -3 points");
    addLoss();
  }
  

}

function startGame() {
  computerGuess = getRandomNumber();
  setComputerNumber(computerGuess);
  setPlayerNumber("?");
  setMessage("Guess Higher or Lower");
}

startGame();

document.querySelector("#higher").addEventListener("click", guessHigher);
document.querySelector("#lower").addEventListener("click", guessLower);