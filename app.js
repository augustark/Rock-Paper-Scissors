const choices = ["rock", "paper", "scissor"]
const playerDisplay = document.querySelector("#player")
const compDisplay = document.querySelector("#comp")
const resetGame = document.querySelector("#reset")

let score = 0
let compScore = 0
let gameStatus = false
let maxScore = 5

const choiceBtn = document.getElementById("choice").children

function computerPlay() {
  const rand = Math.floor(Math.random() * 3)
  return rand
}

function playRound(playerSelection, computerSelection) {
    if (!gameStatus) {    
        if (playerSelection === 0 && computerSelection === 2) {
            score++
            playerDisplay.textContent = score
        } else if (playerSelection === 2 && computerSelection === 0) {
            compScore++
            compDisplay.textContent = compScore
        } else if (playerSelection > computerSelection) {
            score++
            playerDisplay.textContent = score
        } else if (playerSelection === computerSelection) {
            console.log("Draw")
        } else {
            compScore++
            compDisplay.textContent = compScore
        }
    }
}

resetGame.disabled = true

for (let i = 0; i < 3; i++) {
    const val = choiceBtn[i].textContent.toLowerCase()
    choiceBtn[i].addEventListener("click", function() {
        if (score === maxScore || compScore === maxScore) {
            resetGame.disabled = false
            choiceBtn[0].disabled = true
            choiceBtn[1].disabled = true
            choiceBtn[2].disabled = true
            gameStatus = true
            score === maxScore 
            ? playerDisplay.textContent += " You Win" 
            : playerDisplay.textContent += " You Lose"
        } else {
            playRound(choices.indexOf(val), computerPlay())
        }
    })
}

function reset() {
    score = 0
    compScore = 0
    compDisplay.textContent = 0
    playerDisplay.textContent = 0
    gameStatus = false
    choiceBtn[0].disabled = false
    choiceBtn[1].disabled = false
    choiceBtn[2].disabled = false
    resetGame.disabled = true
}

resetGame.addEventListener("click", reset)