
const rulesButton = document.getElementById("rules-text");
const rulesParent = document.getElementById("rules-parent");
const closeButton = document.getElementById("close-rules");

rulesButton.addEventListener("click", () => {
  rulesParent.style.display = "flex";
});

closeButton.addEventListener("click", () => {
  rulesParent.style.display = "none";
});

const playAgainBtn = document.getElementById("play-again");
playAgainBtn.addEventListener("click", () => {
  window.location.href = "../../app.html";
});

const playerMove = localStorage.getItem('playerMove');
const computerMove = localStorage.getItem('computerMove');

if (playerMove) {
  document.getElementById('player-move').src = `../../Images/page2/${playerMove}.png`;
} else {
  console.warn("No playerMove found in localStorage.");
}

if (computerMove) {
  document.getElementById('computer-move').src = `../../Images/page2/${computerMove}.png`;
} else {
  console.warn("No computerMove found in localStorage.");
}

const playerScore = localStorage.getItem('playerScore');
const computerScore = localStorage.getItem('computerScore');

document.getElementById('player-score').textContent = playerScore || 0;
document.getElementById('computer-score').textContent = computerScore || 0;
