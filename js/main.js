console.log("main.js loaded successfully");

// Variables

const computerNumber = document.querySelector("#computerNumber"); // Get computer number display (DOM)
const playerNumber = document.querySelector("#playerNumber"); // Get player number display (DOM)

const winDisplay = document.querySelector("#wins"); // Get win rate display (DOM)
const lossDisplay = document.querySelector("#losses"); // Get lose rate display (DOM)
const scoreDisplay = document.querySelector("#score"); // Get score display (DOM)

const message = document.querySelector("#message"); // Get message display (DOM)

let wins = 0; // Default wins = 0
let losses = 0; // Default losses = 0
let score = 10; // Start with 10 points (so the player can have chance to win)
let difficulty = 1; // Starting difficulty

let playerGuess, computerGuess; // Define guesses for later

function setComputerNumber(val) { // Function to set the computer display in the DOM
  computerNumber.textContent = val;
}
function setPlayerNumber(val) { // Function to set the player display in the DOM
  playerNumber.textContent = val;
}

function setMessage(msg) { // Function to set message display in the DOM
  message.textContent = msg;
}

function addWin() { // Function to increase win rate
  wins++; // Increase wins by 1
  winDisplay.textContent = wins; // Change wins DOM to the new value
  document.querySelector(".container").style.backgroundColor = "green"; // Change background color to green (Win)
  setScore(score + 5); // Increase score by 5
}

function addLoss() { // Function to increase loss rate
  losses++; // Increase losses by 1
  lossDisplay.textContent = losses; // Change losses DOM to the new value
  document.querySelector(".container").style.backgroundColor = "red"; // Change background color to red (Lost)
  setScore(score - (3 * difficulty)); // Decrease score by 3 multiplied by difficulty (The higher the difficulty the more you lose)
}

function setScore(val) { // Function to set the score in the DOM
  score = val;
  scoreDisplay.textContent = score;
}


function getRandomNumber() { // Function to generate random number
  return Math.floor(Math.random() * 100) + 1;
}

function guessHigher() { // Guess higher function

  if(score < 1) { // Check if score is less than 1
    // Player can't play because the score is less than 1
    setMessage("You don't have enough points to guess higher"); // Show message
    return; // Ignore the next commands and leave the function
  }

  computerGuess = getRandomNumber(); // Generate computer guess
  playerGuess = getRandomNumber(); // Generate player guess
  setComputerNumber(computerGuess) // Change computer DOM
  setPlayerNumber(playerGuess) // Change player DOM

  if (playerGuess > computerGuess) { // If player guess is higher than computer guess
    setMessage("You win! Your score has increased 5+ points"); // Change message in DOM
    addWin();
  }
  else { // If computer guess is higher than player guess
    setMessage(`You lose! Your score has decreased ${(3 * difficulty)} points`); // Change message in DOM
    addLoss();
  }

  checkDifficulty(); // Check difficulty and increase it if player passed score 100,200 or 300

  
}

function guessLower () { // Guess lower function

  if(score < 1) { // Check if score is less than 1
    // Player can't play because the score is less than 1
    setMessage("You don't have enough points to guess lower"); // Set message
    return; // Ignore other commands and return
  }

  computerGuess = getRandomNumber(); // Generate random number for computer
  playerGuess = getRandomNumber(); // Generate random number for player
  setComputerNumber(computerGuess) // Display computer number
  setPlayerNumber(playerGuess) // Display player number

  if (playerGuess < computerGuess) { // if player guess is less than computer gues
    setMessage("You win! Your score has increased 5+ points"); // Set message
    addWin(); // add win
  }
  else { // if computer guess is higher than player guess
    setMessage("You lose! Your score has decreased -3 points"); // Set message
    addLoss(); // Add lose point
  }

  checkDifficulty(); // Check difficulty
  

}

function startGame() {
  // Initialize game
  computerGuess = getRandomNumber();
  setComputerNumber(computerGuess);
  setPlayerNumber("?");
  setMessage("Guess Higher or Lower");
}

function checkDifficulty() {
  // Check difficulty
  if(score > 100) {
    difficulty = 2;
    setMessage("Difficulty increased to 2");
  }
  else if(score > 200) {
    difficulty = 3;
    setMessage("Difficulty increased to 3");
  }
  else if(score > 300) {
    difficulty = 4;
    setMessage("Difficulty increased to 4");
  }
}

startGame(); // Start game


// Event listeners
document.querySelector("#higher").addEventListener("click", guessHigher);
document.querySelector("#lower").addEventListener("click", guessLower);