let humanScore = 0;
let computerScore = 0;

// let getHumanChoice = function () {
//   let choice = prompt("Input your option - rock, paper, scissors");
//   return choice.toLowerCase();
// };

const container = document.querySelector("#keys");
const content = document.createElement("div");
content.classList.add("content");

const rock = document.createElement("button");
rock.classList.add("rock");
rock.textContent = "Rock";

const paper = document.createElement("button");
paper.classList.add("paper");
paper.textContent = "Paper";

const scissors = document.createElement("button");
scissors.classList.add("scissors");
scissors.textContent = "Scissors";

container.appendChild(content);

content.appendChild(rock);
content.appendChild(paper);
content.appendChild(scissors);

let choice = "";
function getHumanChoice() {
  const buttons = document.querySelectorAll(".content button");
  buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
      choice = e.target.textContent;
      console.log("Human Choice: ", choice);
    });
  });
}

let getComputerChoice = function () {
  let choiceIndex = Math.floor(Math.random() * 3);
  let choices = ["rock", "paper", "scissors"];
  return choices[choiceIndex];
};

// async function playGame() {
//   let humanChoice = await getHumanChoice();
//   console.log(`Human: ${humanChoice}`);
//   let computerChoice = getComputerChoice();
//   console.log(`Computer: ${computerChoice}`);
//   playRound(humanChoice, computerChoice);
// }

let playRound = (human, computer) => {
  if (human === computer) {
    console.log("Its a draw");
    computerScore++, humanScore++;
  } else if (
    (human === "scissors" && computer === "rock") ||
    (human === "rock" && computer === "paper") ||
    (human === "paper" && computer === "scissors")
  ) {
    console.log("Computer wins");
    computerScore++;
  } else {
    console.log("Human wins");
    humanScore++;
  }
  console.log(
    `Player score is ${humanScore} and Computer score is ${computerScore}`
  );
};

let humanC = getHumanChoice();
let computerC = getComputerChoice();

playRound(humanC, computerC);
