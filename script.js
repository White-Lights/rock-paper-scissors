let computerChoice;
let humanChoice;
let computerScore = 0;
let humanScore = 0;
let tieScore = 0;

// Function for getting the computer's choice.
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
    humanChoice = prompt("Make your choice! Rock, paper, or scissors?").toLowerCase();
    return humanChoice;
}

function playRound (humanChoice, computerChoice) {
    // Take both choices, log in the console who picked what.
    computerChoice = getComputerChoice();
    humanChoice = getHumanChoice();
    console.log("The meatbag throws " + humanChoice + " and computer throws " + computerChoice + "!");
    
    // Compare the two choices and return a winner. Increment score based on victor.
    if (humanChoice === computerChoice) {
        console.log("Tie! The war continues.");
        tieScore++;
    } else if ((humanChoice === "rock" && computerChoice === "scissors") 
        || (humanChoice === "scissors" && computerChoice === "paper")
        || (humanChoice === "paper" && computerChoice === "rock")) {
            console.log("Victory for the meatbags!");
            humanScore++;
        } else {
            console.log("Computer victory! The robot war will continue until morale improves.");
            computerScore++;
        }
    console.log("The humans currently score " + humanScore + " and the robots score " + computerScore + ".");
}

// for (let round = 1; round < 6; round++) {
//     playRound(humanChoice, computerChoice);
// }