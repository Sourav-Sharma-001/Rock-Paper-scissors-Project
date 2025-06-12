const rulesParent = document.getElementById("rules-parent");
const rulesButton = document.getElementById("rules-text");
const closeButton = document.getElementById("close-rules");

rulesButton.addEventListener("click", () => {
  rulesParent.style.display = "flex";
});
closeButton.addEventListener("click", () => {
  rulesParent.style.display = "none";
});

const computerScoreEl = document.getElementById("computer-score");
const playerScoreEl = document.getElementById("player-score");

let playerScore = Number(localStorage.getItem("playerScore")) || 0;
let computerScore = Number(localStorage.getItem("computerScore")) || 0;

playerScoreEl.textContent = playerScore;
computerScoreEl.textContent = computerScore;

export function playGame(playerMove) {
  let computerRandom = Math.random();
  let computerMove = "";

  if (computerRandom <= 1 / 3) {
    computerMove = "Rock";
  } else if (computerRandom <= 2 / 3) {
    computerMove = "Paper";
  } else {
    computerMove = "Scissors";
  }

  localStorage.setItem("playerMove", playerMove);
  localStorage.setItem("computerMove", computerMove);

  let result = "";
  if (playerMove === computerMove) {
    result = "Tie";
  } else if (
    (playerMove === "Rock" && computerMove === "Scissors") ||
    (playerMove === "Paper" && computerMove === "Rock") ||
    (playerMove === "Scissors" && computerMove === "Paper")
  ) {
    result = "You win";
    playerScore++;
  } else {
    result = "You lost";
    computerScore++;
  }

  localStorage.setItem("playerScore", playerScore);
  localStorage.setItem("computerScore", computerScore);

  playerScoreEl.textContent = playerScore;
  computerScoreEl.textContent = computerScore;

  console.log(`Player: ${playerMove}, Computer: ${computerMove}`);
  console.log(result);

  if (result === "You win") {
    window.location.href = "Pages/Hurray/hurray.html";
  } else if (result === "You lost") {
    window.location.href = "Pages/Page3/page3.html";
  } else {
    window.location.href = "Pages/Page4/page4.html";
  }
}

const rockBtn = document.getElementById("rock-circle");
const paperBtn = document.getElementById("paper-circle");
const scissorsBtn = document.getElementById("scissors-circle");

rockBtn.addEventListener("click", () => playGame("Rock"));
paperBtn.addEventListener("click", () => playGame("Paper"));
scissorsBtn.addEventListener("click", () => playGame("Scissors"));

const playAgainBtn = document.getElementById("play-again");
playAgainBtn.addEventListener("click", () => {
  window.location.href = "../../app.html";
});
