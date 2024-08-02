let computerChoice;
let humanChoice;
let computerScore = 0;
let humanScore = 0;

// Function for getting the computer's choice.
// Takes a number between 0 and 2, assigns number to one of 
// three string options to be compared to player string.
function getComputerChoice() {
    computerChoice = Math.floor(Math.random() * 3);
    if (computerChoice === 0) {
        computerChoice = "rock";
    } else if (computerChoice === 1) {
        computerChoice = "paper";
    } else if (computerChoice === 2) {
        computerChoice = "scissors";
    } else {
        computerChoice = "error";
    }
    return computerChoice;
}

// Function for getting the player's choice. Corrects them
// if player chooses anything but rock, paper, or scissors
// and prompts a new choice.
function getHumanChoice() {
    humanChoice = prompt("Make your choice! Rock, paper, or scissors?");
    humanChoice = humanChoice.toLowerCase();
    return humanChoice;
}

getHumanChoice();
getComputerChoice();
console.log(humanChoice + " is the player choice!");
console.log(computerChoice + " is the computer's choice!")