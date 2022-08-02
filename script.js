// rock paper scissors game against a computer

// amount of wins/tie games
let playerWins = 0;
let computerWins = 0;

function getComputerChoice () { 
// computer randomly picks between three options
    let result = Math.floor(Math.random() * 3);
    if (result === 0) {
        return 'rock';
    } else if (result === 1) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

function playRound (playerSelection) {                          
// a single round is played comparing them
    let computerSelection = getComputerChoice();

    if ((computerSelection === 'rock' && playerSelection === 'scissors') || 
        (computerSelection === 'paper' && playerSelection === 'rock') || 
        (computerSelection === 'scissors' && playerSelection === 'paper')) {

        computerWins++;
        para.textContent = 'You lose!';
        computerScore.textContent = `Computer score:${computerWins}`;

            if (computerWins == 5) {
                para.textContent = `The computer won this best of five! You lose!`;
                resetGame();
            }


    } else if (computerSelection === 'paper' && playerSelection === 'paper') {    

        para.textContent = 'Tie!';

    } else {

        playerWins++;
        para.textContent = 'You win!';
        playerScore.textContent = `Player score:${playerWins}`;

            if (playerWins == 5) {
                para.textContent = `You won the match! Congratulations!`;
                resetGame();
            }

    }
}

function resetGame () {
    playerWins = 0;
    computerWins = 0;
    computerScore.textContent = `Computer score:0`;
    playerScore.textContent = `Player score:0`;
}


const rock = document.querySelector('.rock');
rock.addEventListener('click', () => {
    playRound(rock.textContent);
});
const paper = document.querySelector('.paper');
paper.addEventListener('click', () => {
    playRound(paper.textContent);
});
const scissors = document.querySelector('.scissors');
scissors.addEventListener('click', () => {
    playRound(scissors.textContent);
});

const results = document.querySelector('.results');
const para = document.createElement('p');
const computerScore = document.createElement('h3');
const playerScore = document.createElement('h3');
results.appendChild(para);
results.appendChild(computerScore);
results.appendChild(playerScore);
para.textContent = `Click a button to start the game!`;
computerScore.textContent = `Computer score:0`;
playerScore.textContent = `Player score:0`;