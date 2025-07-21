const rulesButton = document.getElementById("rules-text");
const rulesParent = document.getElementById("rules-parent");
const closeButton = document.getElementById("close-rules");

rulesButton.addEventListener("click", () => {
  rulesParent.style.display = "flex";
});

closeButton.addEventListener("click", () => {
  rulesParent.style.display = "none";
});

const playAgainBtn = document.querySelector("#you-win-text-sec button");
if (playAgainBtn) {
  playAgainBtn.addEventListener("click", () => {
    window.location.href = "../../index.html";
  });
}

const playerMove = localStorage.getItem("playerMove");
const computerMove = localStorage.getItem("computerMove");

const playerImage = document.getElementById("player-choice") || document.getElementById("player-move");
if (playerImage && playerMove) {
  playerImage.src = `../../Images/page2/${playerMove}.png`;
}

const computerImage = document.getElementById("computer-choice") || document.getElementById("computer-move");
if (computerImage && computerMove) {
  computerImage.src = `../../Images/page2/${computerMove}.png`;
}

const playerScore = localStorage.getItem("playerScore");
const computerScore = localStorage.getItem("computerScore");

const playerScoreEl = document.getElementById("YS-text");
const computerScoreEl = document.getElementById("CS-text");

if (playerScoreEl) playerScoreEl.textContent = playerScore || 0;
if (computerScoreEl) computerScoreEl.textContent = computerScore || 0;

const nextButton = document.getElementById("next-text");
if (nextButton) {
  nextButton.addEventListener("click", () => {
    window.location.href = "../../pages/Hurray/hurray.html";
  });
}
