// rock paper scissors game against a computer
let tieGames = 0;
let playerWins = 0;
let computerWins = 0;

// computer randomly picks between three options
function getComputerChoice () {
    let result = Math.floor(Math.random() * 3);
    if (result === 0) {
        return 'Rock';
    } else if (result === 1) {
        return 'Paper';
    } else {
        return 'Scissors';
    }
}
// computer returns and stores it in a variable
// let computerSelection = getComputerChoice();
// player picks and returns rock paper or scissors
// let playerSelection = prompt('Rock, paper or scissors?', '');
// a single round is played comparing them
function playRound () {
    let computerSelection = getComputerChoice();
    if (computerSelection.toLowerCase() === 'rock' && playerSelection.toLowerCase() === 'scissors') {
        computerWins++;
        return 'You lose! Rock beats scissors!';
    } else if (computerSelection.toLowerCase() === 'rock' && playerSelection.toLowerCase() === 'paper') {
        playerWins++;
        return 'You win! Paper beats rock!';
    } else if (computerSelection.toLowerCase() === 'rock' && playerSelection.toLowerCase() === 'rock') {
        tieGames++;
        return 'Tie game!';
    } else if (computerSelection.toLowerCase() === 'scissors' && playerSelection.toLowerCase() === 'scissors') {
        tieGames++;
        return 'Tie game!';
    } else if (computerSelection.toLowerCase() === 'scissors' && playerSelection.toLowerCase() === 'paper') {
        computerWins++;
        return 'You lose! Scissors beats paper!';
    } else if (computerSelection.toLowerCase() === 'scissors' && playerSelection.toLowerCase() === 'rock') {
        playerWins++;
        return 'You win! Rock beats scissors!';
    } else if (computerSelection.toLowerCase() === 'paper' && playerSelection.toLowerCase() === 'scissors') {
        playerWins++;
        return 'You win! Scissors beats rock!';
    } else if (computerSelection.toLowerCase() === 'paper' && playerSelection.toLowerCase() === 'paper') {
        tieGames++;
        return 'Tie game!';
    }  else if (computerSelection.toLowerCase() === 'paper' && playerSelection.toLowerCase() === 'rock') {
        computerWins++;
        return 'You lose! Paper beats rock!';
    }
}
// choose a winner
// let winner = playRound();
// declare that winner in a string or console log it
// console.log(winner);

//now make it a best of five
function game () {
    for (let i = 0; i < 5; i++) {
        playerSelection = '';
        playerSelection = prompt('Rock, paper or scissors?', '');
        playRound();
        console.log(playRound());
    }

    if (playerWins > computerWins && playerWins > tieGames) {
        console.log('You won the match!');
    } else if (tieGames > playerWins && tieGames > computerWins) {
        console.log('Tie match! Try again!')
    } else if (computerWins > playerWins && computerWins > tieGames) {
        console.log('You lost the match!');
    } else {
        console.log('I\'m not sure how we got here.');
    }
}

game();