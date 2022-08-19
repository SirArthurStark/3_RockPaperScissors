//This function grabs the computer's choice for the Rock, Paper, Scissors
function getComputerChoice() {
    let computerSelection = Math.floor(Math.random() * 3)
    if (computerSelection === 0) {
        computerSelection = 'rock'
    } else if (computerSelection === 1) {
        computerSelection = 'paper'
    } else if (computerSelection === 2) {
        computerSelection = 'scissors'
    }
    return computerSelection
  }

console.log(getComputerChoice());

//This function grabs the player's option via a pop-up box. 
//It also checks that the option specifically matches either "Rock", "Paper" or "Scissors"
function getPlayerChoice() {
    let rps = prompt("Please write down your choice: Rock, Paper, or Scissors")

    let playerSelection = rps.toLowerCase()

    if (playerSelection === 'rock' || playerSelection === 'paper' || playerSelection === 'scissors') {
        return playerSelection;
        console.log(playerSelection);
    } else {
        getPlayerChoice();
    }
}

console.log(getPlayerChoice());

//This function plays a single round of Rock, Paper, Scissors
function playRound() {
    let roundResult = ''
    if (playerSelection === 'rock' && computerSelection === 'rock') {
        roundResult = 'Tie game. You both picked rock.';
    } else if (playerSelection === 'paper' && computerSelection === 'paper') {
        roundResult = 'Tie game. You both picked paper.';
    } else if (playerSelection === 'scissors' && computerSelection === 'scissors') {
        roundResult = 'Tie game. You both picked scissors.';
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        roundResult = 'You lose. Rock loses to paper.';
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        roundResult = 'You win. Rock beats scissors.';
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        roundResult = 'You lose. Paper loses to scissors.';
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        roundResult = 'You win. Paper beats rock.';
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        roundResult = 'You lose. Scissors lose to rock.';
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        roundResult = 'You win. Scissors beat paper.';
    } 
    return roundResult;
}

console.log(playRound());