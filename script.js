function getComputerChoice() {
  let randomInt = Math.floor(Math.random() * 3);
  let computerChoice = "Rock";
  if (randomInt === 1) {
    computerChoice = "Paper";
  } else if (randomInt === 2) {
    computerChoice = "Scissors";
  } 
  return computerChoice;
}

function getHumanChoice() {
  let rightChoice = false;

  while (!rightChoice) {
    humanChoice = prompt("What's your choice? (Choose between Rock, Paper and Scissors.)");
    humanScore.toUpperCase();

    if (humanChoice === "ROCK" || humanChoice === "PAPER" || humanChoice === "SCISSORS") {
      rightChoice = true;
    } 
  }

  return humanChoice;
}

getHumanChoice();
let humanScore = 0;
let computerScore = 0;

function playRound() {

}