let computerScore = 0;
let playerScore = 0;

let playerChoice = () => {
    let choice = prompt('Choose: Rock, Paper or Scissor.').toLowerCase();

    return choice;
}

let getComputerChoice = () => {
    let choice = Math.floor(Math.random() * 3);

    return choice;
}

let playRound = (playerChoice, ComputerChoice) => {
    switch (ComputerChoice) {
        case 0: // Computer choice Rock
            if (playerChoice == 'rock') {
                console.log('Tie');
            } else if (playerChoice == 'paper') {
                playerScore++;
                console.log('You Win this round');
            } else if (playerChoice == 'scissor') {
                computerScore++;
                console.log('computer Win this round');
            } else {
                console.log('You have entered a wrong value, invalid round.');
            }
            break;
        case 1: // Computer choice Paper
            if (playerChoice == 'rock') {
                computerScore++;
                console.log('computer Win this round');
            } else if (playerChoice == 'paper') {
                console.log('Tie');
            } else if (playerChoice == 'scissor') {
                playerScore++;
                console.log('You Win this round');
            } else {
                console.log('You have entered a wrong value, invalid round.');
            }
            break;
        case 2: // Computer choice Scissor
            if (playerChoice == 'rock') {
                playerScore++;
                console.log('You Win this round');
            } else if (playerChoice == 'paper') {
                computerScore++;
                console.log('computer Win this round');
            } else if (playerChoice == 'scissor') {
                console.log('Tie');
            } else {
                console.log('You have entered a wrong value, invalid round.');
            }
            break; 
    }

}