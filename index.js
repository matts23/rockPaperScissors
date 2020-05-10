//global variables
let playerScoreCount=0;
let computerScoreCount=0;

const playerScore = document.querySelector('#player-score');
const computerScore = document.querySelector('#computer-score');

const gameResult = document.querySelector('#game-result');

const rockBtn = document.querySelector('#rock-btn');
const paperBtn = document.querySelector('#paper-btn');
const scissorsBtn = document.querySelector('#scissors-btn');
const resetBtn = document.querySelector('#reset-btn');



function computerPlay(){
    let arr = ['rock','paper','scissors'];
    let num = arr[Math.floor(Math.random() * 3)];
    return num;
}

function resetGame(){
    playerScoreCount = 0;
    playerScore.textContent = '0';

    computerScoreCount = 0;
    computerScore.textContent = '0';

    gameResult.textContent = 'Play Game'
}

//call this on each button click
function playRound(playerSelection, computerSelection){
    let player = playerSelection;

    if(playerScoreCount < 5 && computerScoreCount < 5){
        //player and computer tie
        if (player===computerSelection){
            gameResult.textContent = 'Tie';
        }
        //computer wins
        else if (player==='rock'&&computerSelection==='paper'){  
            computerScoreCount++;
            computerScore.textContent = `${computerScoreCount}`;
            gameResult.textContent = 'Computer Wins';
        }
        else if (player==='paper'&&computerSelection==='scissors'){  
            computerScoreCount++;
            computerScore.textContent = `${computerScoreCount}`;
            gameResult.textContent = 'Computer Wins';
        }
        //player wins
        else if (player==='rock'&&computerSelection==='scissors'){  
            playerScoreCount++;
            playerScore.textContent = `${playerScoreCount}`;
            gameResult.textContent = 'Player Wins';
        }
        else{
            playerScoreCount++;
            playerScore.textContent = `${playerScoreCount}`;
            gameResult.textContent = 'Player Wins';
        }
    }
    else if(computerScoreCount > playerScoreCount){
        console.log('computer wins game');
        gameResult.textContent = 'Computer Wins the Game!';
    }
    else {
        gameResult.textContent = 'Player Wins the Game!';
        console.log('player wins game');
    }
}



rockBtn.addEventListener('click', () => {
    playRound('rock', computerPlay());
})

paperBtn.addEventListener('click', () => {
    playRound('paper', computerPlay());
})

scissorsBtn.addEventListener('click', () => {
    playRound('scissors', computerPlay());
})

resetBtn.addEventListener('click', () => {
    resetGame();
})





