// Create a function called computerPlay

function computerPlay() {

    // Generate a random num between 1 and 3

    let num = Math.floor((Math.random() * 3) + 1);

    // Assign a num to 'rock' 'paper' or 'scissors' and return the string

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

// Create a function to play a round with two parameters computerSelection and playerSelection.

let computerSelection;
let playerSelection;

function playRound(computerSelection, playerSelection) {

    // Store computer choice

    computerSelection = computerPlay();
    
    // Ask for player input or rock, paper or scissors

    playerSelection = prompt("Please input either 'Rock', 'Paper' or 'Scissors'");

    // Convert playerSelection to lower case to insure string is in correct format.

    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();

    // Use a switch statement with if else statements to evaluate winning condition and output result to console.

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

// Create a global variable called score

let score = 0;

// Create a global variable called round

let round;

// Create a global variable called outOf to show how many rounds were won out of 5

let outOf = 0;

// Create a function to run through 5 rounds and output a win condition at the end called game()

function game() {

// Run a for loop for 5 rounds, after each round increase the round counter by 1
// At the end of each loop edit the score counter

for (round = 1; round < 6; round++) {
  console.log(`Round ${round}`);
  console.log(playRound(computerSelection, playerSelection));
}
// Evaluate whether player has won and print result

if (score > 0) {
  return `You scored ${outOf} out of 5 rounds and beat the computer! Well done!`;
} else if (score < 0) {
  return `You scored ${outOf} out of 5 rounds and the computer beat you! You Lose!`;
} else if (score == 0) {
  return `You scored ${outOf} out of 5 rounds and drew with the computer! Want to play again?`;
}
}

console.log(game());