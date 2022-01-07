// Query selectors for HTML elements

const rock = document.querySelector('#Rock');
const paper = document.querySelector('#Paper');
const scissors = document.querySelector('#Scissors');
const result = document.querySelector("#result");
const compCount = document.querySelector('#compCount');
const playCount = document.querySelector('#playCount');
const winner = document.querySelector('#winner')

// functions for game

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
let playScore = 0;
let compScore = 0;

function playRound(computerSelection, playerSelection) {
    computerSelection = computerPlay();
    playerSelection = playerPlay;
    switch(playerSelection) {
      case "Rock":
        if (computerSelection == "Rock") {
          result.textContent = `${playerSelection} and ${computerSelection}! It's a draw!`
        } else if (computerSelection == "Paper") {
          compScore += 1;
          result.textContent = `${computerSelection} beats ${playerSelection}! You Lose!`
        } else if (computerSelection == "Scissors") {
          playScore += 1;
          result.textContent = `${playerSelection} beats ${computerSelection}! You Win!`
        } break;

      case "Paper":
        if (computerSelection == "Rock") {
          playScore += 1;
          result.textContent = `${playerSelection} beats ${computerSelection}! You Win!`
        } else if (computerSelection == "Paper") {
          result.textContent = `${playerSelection} and ${computerSelection}! It's a draw!`
        } else if (computerSelection == "Scissors") {
          compScore += 1;
          result.textContent = `${computerSelection} beats ${playerSelection}! You Lose!`
        } break;

      case "Scissors":
        if (computerSelection == "Rock") {
          compScore += 1;
          result.textContent = `${computerSelection} beats ${playerSelection}! You Lose!`
        } else if (computerSelection == "Paper") {
          playScore += 1;
          result.textContent = `${playerSelection} beats ${computerSelection}! You Win!`
        } else if (computerSelection == "Scissors") {
          result.textContent = `${playerSelection} and ${computerSelection}! It's a draw!`
        } break;
    }
}

function checkWinner() {
  if (compScore == 5) {
    winner.textContent = "Oh no! You've been beaten by a computer! Shameful!";
    rock.remove();
    paper.remove();
    scissors.remove();
  } else if (playScore == 5) {
    winner.textContent = "You've beaten a computer, I bet you think you're so big and clever don't you?";
    rock.remove();
    paper.remove();
    scissors.remove();
  };
};

// Event listeners for buttons

rock.addEventListener('click', function () {
  computerPlay();
  playerPlay = "Rock";
  playRound();
  compCount.textContent = compScore;
  playCount.textContent = playScore;
  checkWinner();
});

paper.addEventListener('click', function () {
  computerPlay();
  playerPlay = "Paper";
  playRound();
  compCount.textContent = compScore;
  playCount.textContent = playScore;
  checkWinner();
});

scissors.addEventListener('click', function () {
  computerPlay();
  playerPlay = "Scissors";
  playRound();
  compCount.textContent = compScore;
  playCount.textContent = playScore;
  checkWinner();
});
