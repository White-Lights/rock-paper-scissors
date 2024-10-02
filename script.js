let computerChoice;
let humanChoice;
let winner;
let computerScore = 0;
let humanScore = 0;
let tieScore = 0;
let round = 1;

const btn = document.querySelector("#humanPlayer")
btn.addEventListener("click", (event) => {
    if(event.target.tagName === "BUTTON") {
        if(event.target.id === "rock") {
            console.log("rock!");
            humanChoice = "rock";
        } else if(event.target.id === "scissors") {
            console.log("scissors!");
            humanChoice = "scissors";
        } else if(event.target.id === "paper") {
            console.log("paper");
            humanChoice = "paper";
        }
        playRound(humanChoice, computerChoice);
    }
})

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
    console.log(`Computer choice is ${computerChoice}.`)
    return computerChoice;
}

// function getHumanChoice() {
//     humanChoice = prompt("Make your choice! Rock, paper, or scissors?").toLowerCase();
//     return humanChoice;
// }

function playRound (humanChoice, computerChoice) {
    if (round < 6) {
        computerChoice = getComputerChoice();
        // humanChoice = getHumanChoice();
        // console.log("The meatbag throws " + humanChoice + " and computer throws " + computerChoice + "!");
        
        // Compare the two choices and return a winner. Increment score based on victor.
        if (humanChoice === computerChoice) {
            console.log("Tie!");
            tieScore++;
            winner = "tie";
        } else if ((humanChoice === "rock" && computerChoice === "scissors") 
            || (humanChoice === "scissors" && computerChoice === "paper")
            || (humanChoice === "paper" && computerChoice === "rock")) {
                console.log("You win!");
                winner = "player";
                humanScore++;
                round++;
        } else {
                console.log("Computer wins!");
                winner = "computer"
                computerScore++;
                round++;
            }
        console.log("The humans currently score " + humanScore + " and the robots score " + computerScore + ".");
        updateUI();
        updateAnn(winner);
    }

    if(round == 6) {
        winner = "winner";
        updateAnn(winner);
        round = 7;
    } else if (round == 7) {
        alert("Press reset to start a new game!");
    }
}

function updateUI() {
    let rounds = document.querySelector("#roundCount");
    rounds.textContent = `ROUND ${round}.`

    let playCont = document.querySelector("#humanPlayer");
    let playerScore = playCont.lastElementChild;
    playerScore.textContent = `SCORE: ${humanScore}`;

    let compCont = document.querySelector("#computerPlayer");
    let compScore = compCont.lastElementChild;
    compScore.textContent = `SCORE: ${computerScore}`;
}

function updateAnn(winner) {
    ann = document.querySelector(".announcements");
    if(winner == "tie") {
        ann.textContent = "It's a tie! Let's try that round again!";
    } else if(winner == "computer" | winner == "computer") {
        ann.textContent = `And the winner is ${winner}! Let the next round begin!`;
    } else if(winner == "winner") {
        let rounds = document.querySelector("#roundCount");
        rounds.textContent = "Game over!";
        if(humanScore > computerScore) {
            ann.textContent = "You've won the game! Hit reset to play agian!";
        } else if (computerScore > humanScore) {
            ann.textContent = "You've lost! Hit reset to try again!";
        }
    }
}

// for (let round = 1; round < 6; round++) {
//     playRound(humanChoice, computerChoice);
// }