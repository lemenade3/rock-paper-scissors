// Create a function called computerPlay

function computerPlay() {

    // Generate a random num between 1 and 3

    let num = Math.floor((Math.random() * 3) + 1);

    // Assign a num to 'rock' 'paper' or 'scissors' and return the string

    switch(num) {
        case 1:
          return "rock";
          break;
        case 2: 
          return "paper";
          break;
        case 3:
          return "scissors";
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

    playerSelection = playerSelection.toLowerCase();

    // Use a switch statement with if else statements to evaluate winning condition and output result to console.

    switch(playerSelection) {
      case "rock":
        if (computerSelection == "rock") {
          return `${playerSelection} and ${computerSelection}! It's a draw!`
        } else if (computerSelection == "paper") {
          score = --score;
          return `${computerSelection} beats ${playerSelection}! You Lose!`
        } else if (computerSelection == "scissors") {
          score = ++score;
          return `${playerSelection} beats ${computerSelection}! You Win!`
        } break;

      case "paper":
        if (computerSelection == "rock") {
          score = ++score;
          return `${playerSelection} beats ${computerSelection}! You Win!`
        } else if (computerSelection == "paper") {
          return `${playerSelection} and ${computerSelection}! It's a draw!`
        } else if (computerSelection == "scissors") {
          score = --score;
          return `${computerSelection} beats ${playerSelection}! You Lose!`
        } break;

      case "scissors":
        if (computerSelection == "rock") {
          score = --score;
          return `${computerSelection} beats ${playerSelection}! You Lose!`
        } else if (computerSelection == "paper") {
          score = ++score;
          return `${playerSelection} beats ${computerSelection}! You Win!`
        } else if (computerSelection == "scissors") {
          return `${playerSelection} and ${computerSelection}! It's a draw!`
        } break;
    }
}

// Create a global variable called score

let score = 0;

// Create a global variable called round

let round;

// Create a function to run through 5 rounds and output a win condition at the end called game()

function game() {

// Run a for loop for 5 rounds, after each round increase the round counter by 1
// At the end of each loop edit the score counter

for (round = 0; round < 5; round++) {
  console.log(playRound(computerSelection, playerSelection));
  console.log(score);
}
// Evaluate whether player has won and print result

if (score > 0) {
  return "You beat the computer! Well done!";
} else if (score < 0) {
  return "The computer beat you! You Lose!";
} else if (score == 0) {
  return "You drew with the computer! Want to play again?";
}
}

console.log(game());