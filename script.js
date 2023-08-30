let computerScore = 0;
let playerScore = 0;

const resultGameDiv = document.getElementById("result-game");
const resultRoundDiv = document.getElementById("result-round");
const playerScoreDiv = document.getElementById("player-score");
const computerScoreDiv = document.getElementById("computer-score");

playerScoreDiv.textContent = playerScore;
computerScoreDiv.textContent = computerScore;

let getPlayerChoice = (choice) => {
    let playerChoice = choice.toLowerCase();

    return playerChoice;
}

let getComputerChoice = () => {
    let choice = Math.floor(Math.random() * 3);

    return choice;
}

let playRound = (playerChoice, ComputerChoice) => {
    switch (ComputerChoice) {
        case 0: // Computer choice Rock
            if (playerChoice == 'rock') {
                //console.log('Tie');
                resultRoundDiv.textContent = 'tie';
            } else if (playerChoice == 'paper') {
                playerScore++;
                playerScoreDiv.textContent = playerScore;
                //console.log('You Win this round');
                resultRoundDiv.textContent = 'You Win this round';
            } else if (playerChoice == 'scissors') {
                computerScore++;
                computerScoreDiv.textContent = computerScore;
                //console.log('computer Win this round');
                resultRoundDiv.textContent = 'computer Win this round';
            } else {
                alert('You have entered a wrong value, invalid round.');
            }
            break;
        case 1: // Computer choice Paper
            if (playerChoice == 'rock') {
                computerScore++;
                computerScoreDiv.textContent = computerScore;
                //console.log('computer Win this round');
                resultRoundDiv.textContent = 'computer Win this round';
            } else if (playerChoice == 'paper') {
                //console.log('Tie');
                resultRoundDiv.textContent = 'tie';
            } else if (playerChoice == 'scissors') {
                playerScore++;
                playerScoreDiv.textContent = playerScore;
                //console.log('You Win this round');
                resultRoundDiv.textContent = 'You Win this round';
            } else {
                alert('You have entered a wrong value, invalid round.');
            }
            break;
        case 2: // Computer choice Scissor
            if (playerChoice == 'rock') {
                playerScore++;
                playerScoreDiv.textContent = playerScore;
                //console.log('You Win this round');
                resultRoundDiv.textContent = 'You Win this round';
            } else if (playerChoice == 'paper') {
                computerScore++;
                computerScoreDiv.textContent = computerScore;
                //console.log('computer Win this round');
                resultRoundDiv.textContent = 'computer Win this round';
            } else if (playerChoice == 'scissors') {
                //console.log('Tie');
                resultRoundDiv.textContent = 'tie';
            } else {
                alert('You have entered a wrong value, invalid round.');
            }
            break; 
    }

    if (computerScore == 5 || playerScore == 5) {
        document.getElementById("rock").disabled = true;
        document.getElementById("paper").disabled = true;
        document.getElementById("scissors").disabled = true;
        if (computerScore == 5) {
            resultGameDiv.textContent = 'Sorry you loose, try again';
        } else {
            resultGameDiv.textContent =  'Congratulations, YOU WIN!';
        }
    }
}

const btnRock = document.getElementById("rock").addEventListener("click", function(e){playRound(getPlayerChoice(e.target.id), getComputerChoice())});
const btnPaper = document.getElementById("paper").addEventListener("click", function(e){playRound(getPlayerChoice(e.target.id), getComputerChoice())});
const btnScissors = document.getElementById("scissors").addEventListener("click", function(e){playRound(getPlayerChoice(e.target.id), getComputerChoice())});