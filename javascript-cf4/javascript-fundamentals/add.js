

let playerScore = 0;
let computerScore = 0;
const player = "player 1";
const computer = getComputerChoice();

function getComputerChoice() {
  let compChoice = ["rock", "paper", "scissors"];
  
  return compChoice[Math.floor(Math.random() * compChoice.length)];
}

function counter() {
  if (computer === "rock" || computer === "paper" || computer === "scissors") {
    console.log("Truth")
  } else {
    console.log("False");
  }
}
counter();
getComputerChoice();
