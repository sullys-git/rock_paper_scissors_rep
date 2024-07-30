const choices =  ["rock", "paper", "scissors"]
const rpsBtns = document.querySelectorAll(".rps-btns")
const playerScoreDisplay = document.getElementById("player-score-display")
const computerScoreDisplay = document.getElementById("computer-score-display")
const winnerDisplay = document.getElementById("winner-display")
let playerScore = 0
let computerScore = 0

const playerWinsHTML = `
<h1 class="player-wins-display">You Win! 👏</h1>
`
const computerWinsHTML = `
<h1 class="computer-wins-display">You Lose! 😥</h1>
`
const tieGameHTML = `
<h1 class="tie-game-display">It's a tie! 🫣</h1>
`

rpsBtns.forEach(function (btn) {
  btn.addEventListener("click", function () {
    gameChoices = []
    let playerChoice = btn.value
    let computerChoice = choices[Math.floor(Math.random() * choices.length)]
    gameChoices.push(playerChoice)
    gameChoices.push(computerChoice)
    getWinner(gameChoices)

  });
});

function getWinner(array) {
  console.log(array)
  let playerChoiceString = JSON.stringify(array)

  if (array[0] === array[1]){
    winner = "tie"
  } else if (playerChoiceString === JSON.stringify(["rock", "scissors"])) {
    winner = "Player"
  } else if (playerChoiceString === JSON.stringify(["paper", "rock"])) {
    winner = "player"
  } else if (playerChoiceString === JSON.stringify(["scissors", "paper"])) {
    winner = "player"
  } else {
    winner = "computer"
  }
  processGame(winner)
}

function processGame(winner) {
  if (winner === "computer") {
    computerScore += 1
    computerScoreDisplay.textContent = computerScore
    winnerDisplay.innerHTML = computerWinsHTML
  } else if (winner === "tie") {
    winnerDisplay.innerHTML = tieGameHTML
  } else {
    winnerDisplay.innerHTML = playerWinsHTML
    playerScore += 1
    playerScoreDisplay.textContent = playerScore
  }
}
