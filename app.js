function computerPlay(){
    const element = ['Rock','Paper','Scissors'];
    const randomNumber = Math.floor(Math.random() * element.length);
    return element[randomNumber];
}

function playerSelection(){
    let choix = '';
    while(choix !== 'ROCK' && choix !== 'PAPER' && choix !== 'SCISSORS'){
        choix = prompt("Rock, paper or scissors ?").toUpperCase();
    }
    return choix;
}

function singleRound(computerSelection, playerSelection){
    //BUG A CORRIGER
    if (computerSelection === 'ROCK' && playerSelection !== 'PAPER') return `You Lose! Rock beats ${playerSelection}`; 
    if (computerSelection === 'PAPER' && playerSelection !== 'SCISSORS') return `You Lose! Paper beats ${playerSelection}`; 
    if (computerSelection === 'SCISSORS' && playerSelection !== 'ROCK') return `You Lose! Scissors beats ${playerSelection}`; 
    if (computerSelection === playerSelection) return `Equality!`;
    return `You Win! ${playerSelection} beats ${computerSelection}`;
}

const computerElement = computerPlay();
const playerElement = playerSelection();
console.log(singleRound(computerElement, playerElement));