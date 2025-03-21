//console.log("Hello world!");

//let humanScore = 0;
//let computerScore = 0;


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

function getHumanChoice() {
  let choice = prompt("Pick rock, paper, or scissors: ");
  return choice;
}

/*
function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase();
  
  // human picks rock
  if (humanChoice==="rock" && computerChoice ==="rock"){
    console.log("Draw! You both picked rock!");
  }
  else if(humanChoice ==="rock" && computerChoice ==="paper") {
    console.log("You lose! Paper beats rock!");
    computerScore++;
  }
  else if(humanChoice==="rock" && computerChoice==="scissors") {
    console.log("You win! Rock beats scissors!");
    humanScore++;
  }

  // human picks paper
  else if (humanChoice==="paper" && computerChoice ==="rock"){
    console.log("You win! Paper beats rock!");
    humanScore++;
  }
  else if(humanChoice ==="paper" && computerChoice ==="paper") {
    console.log("Draw! You both picked paper!");
  }
  else if(humanChoice==="paper" && computerChoice==="scissors") {
    console.log("You lose! Scissors beats paper!");
    computerScore++;
  }

  // human picks scissors
  else if (humanChoice==="scissors" && computerChoice ==="rock"){
    console.log("You lose! Rock beats scissors");
    computerScore++;
  }
  else if(humanChoice ==="scissors" && computerChoice ==="paper") {
    console.log("You win! Scissors beats paper!");
    humanScore++;
  }
  else if(humanChoice==="scissors" && computerChoice==="scissors") {
    console.log("Draw! You both picked scissors!");
    
  }

  return;
}
*/


function testPlayRound() {
  console.log("Player picks rock (computer always goes in order: rock, paper, scissors): ");
  playRound("rock","rock");
  playRound("rock","paper");
  playRound("rock","scissors");

  console.log("Player picks paper (computer always goes in order: rock, paper, scissors): ");
  playRound("paper","rock");
  playRound("paper","paper");
  playRound("paper","scissors");

  console.log("Player picks scissors (computer always goes in order: rock, paper, scissors): ");
  playRound("scissors","rock");
  playRound("scissors","paper");
  playRound("scissors","scissors");


}

// tests getComputerChoice()
//console.log(getComputerChoice());

// tests getHumanChoice()
//console.log(getHumanChoice());

// tests playRound()
//testPlayRound();

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    
    // human picks rock
    if (humanChoice==="rock" && computerChoice ==="rock"){
      console.log("Draw! You both picked rock!");
    }
    else if(humanChoice ==="rock" && computerChoice ==="paper") {
      console.log("You lose! Paper beats rock!");
      computerScore++;
    }
    else if(humanChoice==="rock" && computerChoice==="scissors") {
      console.log("You win! Rock beats scissors!");
      humanScore++;
    }

    // human picks paper
    else if (humanChoice==="paper" && computerChoice ==="rock"){
      console.log("You win! Paper beats rock!");
      humanScore++;
    }
    else if(humanChoice ==="paper" && computerChoice ==="paper") {
      console.log("Draw! You both picked paper!");
    }
    else if(humanChoice==="paper" && computerChoice==="scissors") {
      console.log("You lose! Scissors beats paper!");
      computerScore++;
    }

    // human picks scissors
    else if (humanChoice==="scissors" && computerChoice ==="rock"){
      console.log("You lose! Rock beats scissors");
      computerScore++;
    }
    else if(humanChoice ==="scissors" && computerChoice ==="paper") {
      console.log("You win! Scissors beats paper!");
      humanScore++;
    }
    else if(humanChoice==="scissors" && computerChoice==="scissors") {
      console.log("Draw! You both picked scissors!");
      
    }

    return;
  }


  for(let i=0; i<5; i++) {
      playRound(getHumanChoice(), getComputerChoice());    
  }
  
  if(humanScore > computerScore) {
    console.log(`Congratulations! You win! Final score, Human = ${humanScore}, Computer = ${computerScore}`);
  }
  else if(humanScore < computerScore) {
    console.log(`Sorry! You lose! Final score, Human = ${humanScore}, Computer = ${computerScore}`);
  }
  else {
    console.log(`Draw! How boring... Final score, Human ${humanScore}, Computer = ${computerScore}`);
  }
}

playGame();
