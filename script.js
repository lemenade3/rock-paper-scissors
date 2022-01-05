
function computerPlay() {
    let num = Math.floor((Math.random() * 3) + 1);
    switch(num) {
        case 1:
          return "Rock";
          break;
        case 2: 
          return "Paper";
          break;
        case 3:
          return "Scissors";
          break;
        default:
          return "Something has gone horribly wrong";
    }

}
let computerSelection;
let playerSelection;
function playRound(computerSelection, playerSelection) {
    computerSelection = computerPlay();
    playerSelection = prompt("Please input either 'Rock', 'Paper' or 'Scissors'");
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();
    switch(playerSelection) {
      case "Rock":
        if (computerSelection == "Rock") {
          return `${playerSelection} and ${computerSelection}! It's a draw!`
        } else if (computerSelection == "Paper") {
          score = --score;
          return `${computerSelection} beats ${playerSelection}! You Lose!`
        } else if (computerSelection == "Scissors") {
          score = ++score;
          outOf = ++outOf;
          return `${playerSelection} beats ${computerSelection}! You Win!`
        } break;

      case "Paper":
        if (computerSelection == "Rock") {
          score = ++score;
          outOf = ++outOf;
          return `${playerSelection} beats ${computerSelection}! You Win!`
        } else if (computerSelection == "Paper") {
          return `${playerSelection} and ${computerSelection}! It's a draw!`
        } else if (computerSelection == "Scissors") {
          score = --score;
          return `${computerSelection} beats ${playerSelection}! You Lose!`
        } break;

      case "Scissors":
        if (computerSelection == "Rock") {
          score = --score;
          return `${computerSelection} beats ${playerSelection}! You Lose!`
        } else if (computerSelection == "Paper") {
          score = ++score;
          outOf = ++outOf;
          return `${playerSelection} beats ${computerSelection}! You Win!`
        } else if (computerSelection == "Scissors") {
          return `${playerSelection} and ${computerSelection}! It's a draw!`
        } break;
    }
}
let score = 0;
let round;
let outOf = 0;
function game() {
for (round = 1; round < 6; round++) {
  console.log(`Round ${round}`);
  console.log(playRound(computerSelection, playerSelection));
}
if (score > 0) {
  return `You scored ${outOf} out of 5 rounds and beat the computer! Well done!`;
} else if (score < 0) {
  return `You scored ${outOf} out of 5 rounds and the computer beat you! You Lose!`;
} else if (score == 0) {
  return `You scored ${outOf} out of 5 rounds and drew with the computer! Want to play again?`;
}
}

console.log(game());