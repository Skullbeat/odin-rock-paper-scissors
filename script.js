let computerScore = 0;
let playerScore = 0;

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
                console.log('Tie');
            } else if (playerChoice == 'paper') {
                playerScore++;
                console.log('You Win this round');
            } else if (playerChoice == 'scissors') {
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
            } else if (playerChoice == 'scissors') {
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
            } else if (playerChoice == 'scissors') {
                console.log('Tie');
            } else {
                console.log('You have entered a wrong value, invalid round.');
            }
            break; 
    }

}

/*let game = () => {
    let player = playerChoice();
    let computer = getComputerChoice();
    playRound(player, computer);

    player = playerChoice();
    computer = getComputerChoice();
    playRound(player, computer);

    player = playerChoice();
    computer = getComputerChoice();
    playRound(player, computer);

    player = playerChoice();
    computer = getComputerChoice();
    playRound(player, computer);

    player = playerChoice();
    computer = getComputerChoice();
    playRound(player, computer);

    if (computerScore > playerScore) {
        console.log('YOU LOOSE, Computer Wins!');
    } else if (computerScore < playerScore) {
        console.log('CONGRATS YOU Win!');
    } else {
        console.log('It is a TIE!');
    }
}

game();*/

document.getElementById("rock").addEventListener("click", function(e){playRound(getPlayerChoice(e.target.id), getComputerChoice())});
document.getElementById("paper").addEventListener("click", function(e){playRound(getPlayerChoice(e.target.id), getComputerChoice())});
document.getElementById("scissors").addEventListener("click", function(e){playRound(getPlayerChoice(e.target.id), getComputerChoice())});
