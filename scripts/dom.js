const rockBtn = document.querySelector("#rock-btn");
const paperBtn = document.querySelector("#paper-btn");
const scissorsBtn = document.querySelector("#scissors-btn");
const leftDiv = document.querySelector("#leftSide");
const rightDiv = document.querySelector("#rightSide");
const playerNameText = document.querySelector(".userName");
const parent = document.querySelector(".btn-content");
let currentBtnId = "";
let turn =0;
let player =0;
let computer = 0;

const rockImg = "../img/rock.svg"
const paperImg = "../img/paper.svg"
const scissorsImg = "../img/scissors.svg"

rockBtn.addEventListener("click", function () {
  currentBtnId= "rock";
  game();
  leftDiv.src=rockImg;
  turn++

  console.log(currentBtnId);

  return currentBtnId 
});

paperBtn.addEventListener("click", function () {
    currentBtnId= "paper";
    game();
    leftDiv.src=paperImg;
  turn++


  console.log(currentBtnId);

  return currentBtnId 
});

scissorsBtn.addEventListener("click", function () {
  currentBtnId= "scissors";
  game();
  leftDiv.src=scissorsImg;

  turn++



  console.log(currentBtnId);

  return currentBtnId 
});




  function game() {
    endGame();

    getComputerChoice = (function () {
      let choice = ["rock", "paper", "scissors"];
      let cpuChoice = choice[Math.floor(Math.random() * choice.length)];
      if (cpuChoice==="rock") {
        rightDiv.src=rockImg;
          
        }if (cpuChoice==="paper") {
          rightDiv.src=paperImg;
            
          }if (cpuChoice==="scissors") {
            rightDiv.src=scissorsImg;
              
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
      if (turn < 0 || turn != 0) {
    

      }
      return console.log("equal");
    } else {
      computer++;
      return console.log("you lose");
    }
    
    
  }

  function endGame() {

    if (turn===4) {
      if (player > computer) {
        alert(`Your win || Player score = ${player} computer SCORE = ${computer}`);
        location.reload()
        
      } else if (player < computer) {
        alert(`Your lose || computer score = ${computer} your  SCORE = ${player}`);
        location.reload()
        
      } else {
        alert(`equal || computer score = ${computer} your  SCORE = ${player}`);
        location.reload()
      }
      
    }
    
  }

