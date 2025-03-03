let humanScore = 0;
let computerScore = 0;
const rockButton = document.getElementById('btn-rock');
const paperButton = document.getElementById('btn-paper');
const scissorsButton = document.getElementById('btn-scissors');

function getComputerChoice() {
    let randomChoice = Math.floor(Math.random() * 3);
    if (randomChoice === 0) {
        return 'Rock';
    } else if (randomChoice === 1) {
        return 'Paper';
    } else {
        return 'Scissors';
    }
}

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();

    if ((humanChoice === 'rock' && computerChoice === 'paper') || (humanChoice === 'paper' && computerChoice === 'scissors')
        || (humanChoice === 'scissors' && computerChoice === 'rock')) {
        computerScore++;
        console.log('Human Score: ' + humanScore + '| Computer Score: ' + computerScore);
    } else if ((humanChoice === 'rock' && computerChoice === 'scissors') || (humanChoice === 'paper' && computerChoice === 'rock')
        || (humanChoice === 'scissors' && computerChoice === 'paper')) {
        humanScore++;
        console.log('Human Score: ' + humanScore + '| Computer Score: ' + computerScore);
    } else {
        console.log('Draw!')
    }

    result.innerHTML = '<p>Human Score: ' + humanScore + ' | Computer Score: ' + computerScore + '</p>';
    
    if (humanScore === 5) {
        alert("Human reach 5 points. Human Wins!");
        location.reload();
    } else if (computerScore === 5) {
        alert("Computer reach 5 points. Computer Wins!");
        location.reload();
    }
}

function handleButtonClick(event) {
    const playerChoice = event.target.id.replace('btn-', '');
    playRound(playerChoice, getComputerChoice());
}

const resultContainer = document.querySelector('#display-result');
const result = document.createElement("div");
result.classList.add("result");
result.innerHTML = '<p>Human Score: ' + humanScore + ' | Computer Score: ' + computerScore + '</p>';

rockButton.addEventListener('click', handleButtonClick);
paperButton.addEventListener('click', handleButtonClick);
scissorsButton.addEventListener('click', handleButtonClick);
resultContainer.appendChild(result)
