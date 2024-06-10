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

const buttons = document.querySelectorAll("button");

function playGame() {
  let humanScore = 0;
  let computerScore = 0;
  let round = 0;
  const div = document.createElement("div");
  const container = document.querySelector("#container");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      div.textContent = "";
      round++; 
      playRound(button.id, getComputerChoice());
      container.appendChild(div);
      displayResult();
      container.appendChild(div)
    });
  }) 

  function playRound(humanChoice, computerChoice) {
    if (
      (humanChoice === "Rock" && computerChoice === "Scissors") || 
      (humanChoice === "Paper" && computerChoice === "Rock") ||
      (humanChoice === "Scissors" && computerChoice === "Paper")
    ) {
      humanScore++;
      div.textContent = `Round ${round}: You win! ${humanChoice} beats ${computerChoice}`;
    } else if (humanChoice === computerChoice) {
      div.textContent = `Round ${round}: It's a tie!`;
    } else {
      computerScore++;
      div.textContent = `Round ${round}: You lose! ${computerChoice} beats ${humanChoice}`;
    }
  }
  
  function displayResult() {
    if (round >= 5) {
      if (humanScore > computerScore) {
        div.textContent = `You win! Your score: ${humanScore}. Computer score: ${computerScore}`;
      } else if (humanScore === computerScore) {
        div.textContent = `It's a tie! Your score: ${humanScore}. Computer score: ${computerScore}`;
      } else if (humanScore < computerScore){
        div.textContent = `You lose! Your score: ${humanScore}. Computer score: ${computerScore}`;
      }
      
      round = 0;
      humanScore = 0;
      computerScore = 0;
    }
  }
}

playGame();
  
  