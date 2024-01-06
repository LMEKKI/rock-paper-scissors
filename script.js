let player = 0;
let computer = 0;
let turn = 0;

function playerRound() {
  getUserInput = (function () {
    let a = prompt("choose response").toLowerCase();

    return a;
  })();

  getComputerChoice = (function () {
    let choice = ["rock", "paper", "scissors"];
    let cpuChoice = choice[Math.floor(Math.random() * choice.length)];

    return cpuChoice;
  })();
  if (
    getUserInput === "rock" &&
    getComputerChoice != "paper" &&
    getComputerChoice != "rock"
  ) {
    player++;
    return console.log("you win");
  } else if (
    getUserInput === "paper" &&
    getComputerChoice != "scissors" &&
    getComputerChoice != "paper"
  ) {
    player++;
    return console.log("you win");
  } else if (
    getUserInput === "scissors" &&
    getComputerChoice != "rock" &&
    getComputerChoice != "scissors"
  ) {
    player++;
    return console.log("you win");
  } else if (getUserInput === getComputerChoice) {
    if (turn < 0 || turn != 0) {
      turn--;
    }
    return console.log("equal");
  } else {
    computer++;
    return console.log("you lose");
  }
}

function game() {
  for (turn; turn < 5; turn++) {
    playerRound();
    console.log(
      `turn = ${turn} playerScore = ${player} computerScore = ${computer}`
    );
  }

  if (player > computer) {
    alert(`Your win || Player score = ${player} computer SCORE = ${computer}`);
  } else if (player < computer) {
    alert(`Your lose || computer score = ${computer} your  SCORE = ${player}`);
  } else {
    alert(`equal || computer score = ${computer} your  SCORE = ${player}`);
  }
}

game();
