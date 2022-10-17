console.log("main.js loaded successfully");
// Higher or lower?

const computerNumber = document.querySelector("#computerNumber");
const playerNumber = document.querySelector("#playerNumber");
const message = document.querySelector("#message");

let randomNumber = Math.floor(Math.random() * 100) + 1;


function setComputerNumber() {
    computerNumber.textContent = randomNumber;
}
function setPlayerNumber(val) {
  playerNumber.textContent = val;
}

function setMessage(msg) {
  message.textContent = msg;
}

const higher = document.querySelector("#higher").addEventListener("click", function() {
    let newNumber = Math.floor(Math.random() * 100) + 1;
    setPlayerNumber(newNumber);
    if (newNumber > randomNumber) {
        setMessage("You guessed correctly!");
        }
    else {
        setMessage("You guessed incorrectly!");
        }
});
