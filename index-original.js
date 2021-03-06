
function computerPlay(){
    let num = Math.floor(Math.random() * 3);

    switch(num){
        case 0:
            return 'rock';
            break;
        case 1: 
            return 'paper';
            break;
        case 2:
            return 'scissors';
            break;
    }
}

function playRound(playerSelection, computerSelection){
    let player = playerSelection.toLowerCase();

    //player and computer tie
    if (player===computerSelection){
        return 0;
    }
    //computer wins
    else if (player==='rock'&&computerSelection==='paper'){  
        return 1;
    }
    else if (player==='paper'&&computerSelection==='scissors'){  
        return 1;
    }
    //player wins
    else if (player==='rock'&&computerSelection==='scissors'){  
        return 2;
    }
    else{
        return 2;
    }
}

/*
let playerSelection = 'paper';
let computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));
*/

function game(){
    let count = 0;
    let playerScore=0;
    let computerScore=0;

    while(count<=5){
        let playerSelection = prompt('enter you choice');
        let result = playRound(playerSelection, computerPlay());

        if(result===1){
            computerScore++;
            console.log('Computer Wins!');
        }
        else if(result===2){
            playerScore++;
            console.log('You Win!');
        }
        else{
            console.log('Tie!');
        }

        console.log(`Player: ${playerScore}`)
        console.log(`Computer: ${computerScore}`);
        
        count++;
    }
    if(playerScore > computerScore){
        console.log('You Win the Game!');
    }
    else if(playerScore < computerScore){
        console.log('Computer Wins the Game');
    }
    else{
        console.log('You Tie the Game!');
    }
}
game();