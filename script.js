let humanScore = 0;
let computerScore = 0;

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

function getHumanChoice() {
    let message = 'Enter your choice (1, 2 or 3)';
    let humanChoice = prompt(message);

    if (humanChoice === '1') {
        return 'Rock';
    } else if (humanChoice === '2') {
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
}

function playGame(round) {
    for (let i = 0; i < round; i++) {
        const humanSelection = getHumanChoice()
        const computerSelection = getComputerChoice()
        
        playRound(humanSelection, computerSelection)
    }
}


playGame(5)
