//console.log and div version
let playerScore = 0;
let computerScore = 0;
let round = 0;

function getComputerChoice() {
  let choice = Math.floor((Math.random() * 3)); // will get a number from 0 to 2
  let output; 

  switch(choice) {
    case 0:
      output="rock";
      break;
    case 1:
      output="paper";
      break;
    case 2:
      output="scissors";
      break;
    default:
      console.log("You shouldn't see this message");
      break;
    
  }
     
  return output;
}


// RPS UI Code
// line 2 has getComputerChoice() function
function playRoundBtn(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase();
  let divOutput = document.querySelector('.results');     
  let divAnalysis = document.querySelector('.result-analysis');
  let divRounds = document.querySelector('.rounds');
  
  // human picks rock
  if (humanChoice==="rock" && computerChoice ==="rock"){
    divAnalysis.textContent = "Draw! You both picked rock!";
  }
  else if(humanChoice ==="rock" && computerChoice ==="paper") {
    divAnalysis.textContent = "You lose! Paper beats rock!";
    computerScore++;
    divOutput.textContent = "Player score: " + playerScore + ", Computer Score: " + computerScore;
  }
  else if(humanChoice==="rock" && computerChoice==="scissors") {
    divAnalysis.textContent = "You win! Rock beats scissors!";
    playerScore++;
    divOutput.textContent = "Player score: " + playerScore + ", Computer Score: " + computerScore;
  }

  // human picks paper
  else if (humanChoice==="paper" && computerChoice ==="rock"){
    divAnalysis.textContent = "You win! Paper beats rock!";
    playerScore++;
    divOutput.textContent = "Player score: " + playerScore + ", Computer Score: " + computerScore;
  }
  else if(humanChoice ==="paper" && computerChoice ==="paper") {
    divAnalysis.textContent = "Draw! You both picked paper!";
  }
  else if(humanChoice==="paper" && computerChoice==="scissors") {
    divAnalysis.textContent = "You lose! Scissors beats paper!";
    computerScore++;
    divOutput.textContent = "Player score: " + playerScore + ", Computer Score: " + computerScore;
  }

  // human picks scissors
  else if (humanChoice==="scissors" && computerChoice ==="rock"){
    divAnalysis.textContent = "You lose! Rock beats scissors";
    computerScore++;
    divOutput.textContent = "Player score: " + playerScore + ", Computer Score: " + computerScore;
  }
  else if(humanChoice ==="scissors" && computerChoice ==="paper") {
    divAnalysis.textContent = "You win! Scissors beats paper!";
    playerScore++;
    divOutput.textContent = "Player score: " + playerScore + ", Computer Score: " + computerScore;
  }
  else if(humanChoice==="scissors" && computerChoice==="scissors") {
    divAnalysis.textContent = "Draw! You both picked scissors!";
    
  }

  round++;
  divRounds.textContent = "Round: " + round;
  if(playerScore === 5 || computerScore === 5)
  {
    gameOver(playerScore, computerScore);

  }
    return;
}


// UI version
// put correct player choice on button (if player clicks paper button has this reflected in the argument passed to the playRoundBtn function). Ex: playRoundBtn('paper', getComputerChoice());
let rockBtn = document.querySelector("#rock");
let paperBtn = document.querySelector("#paper");
let scissorsBtn = document.querySelector("#scissors");

function rockBtnListenFunc () {
  playRoundBtn("rock", getComputerChoice());
}

function paperBtnListenFunc () {
  playRoundBtn("paper", getComputerChoice());
}

function scissorsBtnListenFunc () {
  playRoundBtn("scissors", getComputerChoice());
}

function resetBtnListenFunc () {
  //reset score and round
  round = 0;
  playerScore = 0;
  computerScore = 0;
  let resetBtnEl = document.querySelector('.reset-btn');
  let divOutput = document.querySelector('.results');     
  let divAnalysis = document.querySelector('.result-analysis');
  let divRounds = document.querySelector('.rounds');

  divOutput.textContent = "Player Score: 0, Computer Score: 0";
  divAnalysis.textContent = "";
  divRounds.textContent = "Round: 0";
  // add back even listeners to player buttons
  rockBtn.addEventListener("click", rockBtnListenFunc);
  paperBtn.addEventListener("click", paperBtnListenFunc);
  scissorsBtn.addEventListener("click", scissorsBtnListenFunc);
   
  //delete reset button
  resetBtnEl.remove(); 
}

rockBtn.addEventListener("click", rockBtnListenFunc);
paperBtn.addEventListener("click", paperBtnListenFunc);
scissorsBtn.addEventListener("click", scissorsBtnListenFunc);


function gameOver(playerScore, computerScore) {
  let gameOverDiv = document.querySelector(".game-over");
  const resetBtn = document.createElement('button');
  let bodyEl = document.body;
  
  if(+playerScore === 5) {
    gameOverDiv.textContent = "Congratulations! You won the game!"; 
  }
  else if(+computerScore === 5) {
    gameOverDiv.textContent = "Sorry! You lost the game...";
  }

  resetBtn.textContent = "Reset";
  resetBtn.classList.add('btn-choice');
  resetBtn.classList.add('reset-btn');
  bodyEl.appendChild(resetBtn);
  
  //remove btn listeners
  rockBtn.removeEventListener("click", rockBtnListenFunc);
  paperBtn.removeEventListener("click", paperBtnListenFunc);
  scissorsBtn.removeEventListener("click", scissorsBtnListenFunc); 
  
  //add btn listener to reset
  resetBtn.addEventListener("click", resetBtnListenFunc);
}

