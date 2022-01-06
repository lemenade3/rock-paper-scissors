
const body = document.querySelector('body');
const rock = document.querySelector('#Rock');
const paper = document.querySelector('#Paper');
const scissors = document.querySelector('#Scissors');

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

let playerPlay;
let computerSelection;
let playerSelection;
function playRound(computerSelection, playerSelection) {
    computerSelection = computerPlay();
    playerSelection = playerPlay;
    switch(playerSelection) {
      case "Rock":
        if (computerSelection == "Rock") {
          console.log(`${playerSelection} and ${computerSelection}! It's a draw!`)
        } else if (computerSelection == "Paper") {
          score = --score;
          console.log(`${computerSelection} beats ${playerSelection}! You Lose!`)
        } else if (computerSelection == "Scissors") {
          score = ++score;
          outOf = ++outOf;
          console.log(`${playerSelection} beats ${computerSelection}! You Win!`)
        } break;

      case "Paper":
        if (computerSelection == "Rock") {
          score = ++score;
          outOf = ++outOf;
          console.log(`${playerSelection} beats ${computerSelection}! You Win!`)
        } else if (computerSelection == "Paper") {
          console.log(`${playerSelection} and ${computerSelection}! It's a draw!`)
        } else if (computerSelection == "Scissors") {
          score = --score;
          console.log(`${computerSelection} beats ${playerSelection}! You Lose!`)
        } break;

      case "Scissors":
        if (computerSelection == "Rock") {
          score = --score;
          console.log(`${computerSelection} beats ${playerSelection}! You Lose!`)
        } else if (computerSelection == "Paper") {
          score = ++score;
          outOf = ++outOf;
          console.log(`${playerSelection} beats ${computerSelection}! You Win!`)
        } else if (computerSelection == "Scissors") {
          console.log(`${playerSelection} and ${computerSelection}! It's a draw!`)
        } break;
    }
}


let score = 0;
let round;
let outOf = 0;

rock.addEventListener('click', computerPlay);
rock.addEventListener('click', function () {playerPlay = "Rock"});
rock.addEventListener('click', playRound);

paper.addEventListener('click', computerPlay);
paper.addEventListener('click', function () {playerPlay = "Paper"});
paper.addEventListener('click', playRound);

scissors.addEventListener('click', computerPlay);
scissors.addEventListener('click', function () {playerPlay = "Scissors"});
scissors.addEventListener('click', playRound);
