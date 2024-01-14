const rockBtn = document.querySelector("#rock-btn");
const paperBtn = document.querySelector("#paper-btn");
const scissorsBtn = document.querySelector("#scissors-btn");
const leftDiv = document.querySelector("#leftSide");
const rightDiv = document.querySelector("#rightSide");
const playerNameText = document.querySelector(".userName");
const parent = document.querySelector(".btn-content");

let currentBtnId = "";
let player = 0;
let computer = 0;

let endGametext = document.createElement("div");

function endText(p) {
  let para = p;
  endGametext.id = "endGameStyle";
  document.body.prepend(endGametext);
  p = endGametext.innerText = para;

  endGametext.innerHTML = `<button id="btnReplay"> relancer le jeux</button>`;

  endGametext.prepend(p);

  btnReset = document.querySelector("#btnReplay");
  btnReset.addEventListener("click", function () {
    location.reload();
  });
}

const rockImg = "../img/rock.svg";
const paperImg = "../img/paper.svg";
const scissorsImg = "../img/scissors.svg";

rockBtn.addEventListener("click", function () {
  currentBtnId = "rock";
  game();
  leftDiv.src = rockImg;

  return currentBtnId;
});

paperBtn.addEventListener("click", function () {
  currentBtnId = "paper";
  game();
  leftDiv.src = paperImg;

  return currentBtnId;
});

scissorsBtn.addEventListener("click", function () {
  currentBtnId = "scissors";
  game();
  leftDiv.src = scissorsImg;

  return currentBtnId;
});

function game() {
  endGame();

  getComputerChoice = (function () {
    let choice = ["rock", "paper", "scissors"];
    let cpuChoice = choice[Math.floor(Math.random() * choice.length)];
    if (cpuChoice === "rock") {
      rightDiv.src = rockImg;
    }
    if (cpuChoice === "paper") {
      rightDiv.src = paperImg;
    }
    if (cpuChoice === "scissors") {
      rightDiv.src = scissorsImg;
    }
    return cpuChoice;
  })();

  if (
    currentBtnId === "rock" &&
    getComputerChoice != "paper" &&
    getComputerChoice != "rock"
  ) {
    player++;
    return console.log("you win");
  } else if (
    currentBtnId === "paper" &&
    getComputerChoice != "scissors" &&
    getComputerChoice != "paper"
  ) {
    player++;
    return console.log("you win");
  } else if (
    currentBtnId === "scissors" &&
    getComputerChoice != "rock" &&
    getComputerChoice != "scissors"
  ) {
    player++;
    return console.log("you win");
  } else if (currentBtnId === getComputerChoice) {
    return console.log("equal");
    game();
  } else {
    computer++;
    return console.log("you lose");
  }
}

function endGame() {
  let winText = `you win player: ${player} computer: ${computer}`;
  let loseText = `you lose player: ${player} computer: ${computer}`;

  if (player === 5 || computer === 5) {
    if (player > computer) {
      endText(winText);
    } else if (player < computer) {
      endText(loseText);
    }
  }
}
