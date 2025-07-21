window.addEventListener("DOMContentLoaded", () => {
  const rulesButton = document.getElementById("rules-text");
  const rulesParent = document.getElementById("rules-parent");
  const closeButton = document.getElementById("close-rules");

  rulesButton.addEventListener("click", () => {
    rulesParent.style.display = "flex";
  });

  closeButton.addEventListener("click", () => {
    rulesParent.style.display = "none";
  });

  const playAgainBtn = document.getElementById("play-again-page3");
  playAgainBtn.addEventListener("click", () => {
    window.location.href = "../../index.html";
  });

  const playerMove = localStorage.getItem("playerMove");
  const computerMove = localStorage.getItem("computerMove");

  if (playerMove) {
    document.getElementById("player-choice-page3").src = `../../Images/page2/${playerMove}.png`;
  }

  if (computerMove) {
    document.getElementById("computer-choice-page3").src = `../../Images/page2/${computerMove}.png`;
  }

  const playerScore = localStorage.getItem("playerScore");
  const computerScore = localStorage.getItem("computerScore");

  const playerScoreEl = document.getElementById("YS-text");
  const computerScoreEl = document.getElementById("CS-text");

  if (playerScoreEl) playerScoreEl.textContent = playerScore || 0;
  if (computerScoreEl) computerScoreEl.textContent = computerScore || 0;
});
