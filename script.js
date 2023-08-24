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