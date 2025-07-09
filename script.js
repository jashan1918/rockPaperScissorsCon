console.log("Hello World!")

let computerScore = 0;
let userScore = 0;



function getComputerChoice() {

    const num = Math.random();
    console.log(num);

    if(num < 0.333) return "Rock"

    if(num > 0.666) return "Scissors"
    else {
        return "Paper"
    }
}

function getUserChoice() {

    let choice = prompt("enter your choice")

    return choice;
}


function playRound(humanChoice, computerChoice) {

     humanChoice = humanChoice.toLowerCase();
     computerChoice = computerChoice.toLowerCase();

     //if it is a draw

     if(humanChoice === computerChoice){
        return "it's a tie"
     }

     if(humanChoice === "rock" && computerChoice === "scissors" ||
        humanChoice === "scissors" && computerChoice === "paper" || 
        humanChoice === "paper" && computerChoice === "rock"
     ) {
        userScore = userScore + 1;
        return "you won this round"
     } else {
        computerScore = computerScore + 1;
        return "computer won this round"
     }

}

const result = getComputerChoice();
console.log(result);

const userChoice = getUserChoice();
console.log(userChoice);