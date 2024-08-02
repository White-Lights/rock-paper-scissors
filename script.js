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

// Function for getting the player's choice.
function getHumanChoice() {
    humanChoice = prompt("Make your choice! Rock, paper, or scissors?");
    humanChoice = humanChoice.toLowerCase();
    return humanChoice;
}

function playRound (humanChoice, computerChoice) {
    // Take both choices, log in the console who picked what.
    computerChoice = getComputerChoice();
    humanChoice = getHumanChoice();
    console.log("The meatbag throws " + humanChoice + " and computer throws " + computerChoice + "!");
    
    // Compare the two choices and return a winner. Increment score based on victor.
    // First, check if the both players have the same choice.
    if (humanChoice === computerChoice) {
        console.log("Tie! The war continues.")
    } else if ((humanChoice === "rock" && computerChoice === "scissors") 
        || (humanChoice === "scissors" && computerChoice === "paper")
        || (humanChoice === "paper" && computerChoice === "rock")) {
            console.log("Victory for the meatbags!")
            humanScore++;
        } else {
            console.log("Computer victory! The robot war will continue until morale improves.")
            computerScore++;
        }
    console.log("The humans currently score " + humanScore + " and the robots score " + computerScore + ".")
}

playRound(humanChoice, computerChoice);