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
  let humanChoice;

  while (!rightChoice) {
    humanChoice = prompt("What's your choice? (Choose between Rock, Paper and Scissors.)");
    let humanChoiceUpper = humanChoice.toUpperCase();
    if (humanChoiceUpper === "ROCK" 
    || humanChoiceUpper === "PAPER" 
    || humanChoiceUpper === "SCISSORS") {
      rightChoice = true;
    } 
  }

  humanChoice = humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1);

  return humanChoice;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  if ((humanChoice === "Rock" && computerChoice === "Scissors") 
  || (humanChoice === "Paper" && computerChoice === "Rock") 
  || (humanChoice === "Scissors" && computerChoice === "Paper")) {
    humanScore++;
    console.log(`You win! ${humanChoice} beats ${computerChoice}`);
  } else if ((humanChoice === "ROCK" && computerChoice === "Rock") 
  || (humanChoice === "PAPER" && computerChoice === "PAPER") 
  || (humanChoice === "SCISSORS" && computerChoice === "Scissors")) {
    console.log("It's a tie! Try again");
  } else {
    computerScore++;
    console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
  }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);