//This function grabs the computer's choice for the Rock, Paper, Scissors
function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3)
    if (randomNumber === 0) {
        randomNumber = 'Rock'
    } else if (randomNumber === 1) {
        randomNumber = 'Paper'
    } else if (randomNumber === 2) {
        randomNumber = 'Scissors'
    }
    return randomNumber
  }

//This function grabs the player's option via a pop-up box. 
//It also checks that the option specifically matches either "Rock", "Paper" or "Scissors"
function getPlayerChoice() {
    let rps = prompt("Please write down your choice: Rock, Paper, or Scissors")

    let playerSelection = rps.toLowerCase()

    if (playerSelection === 'rock' || playerSelection === 'paper' || playerSelection === 'scissors') {
        console.log(playerSelection);
    } else {
        getPlayerChoice();
    }
}

  console.log(getComputerChoice());

  console.log(getPlayerChoice());