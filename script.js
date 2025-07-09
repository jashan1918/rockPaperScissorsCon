console.log("Hello World!")

let computerScore = 0;
let userScore = 0;



function getComputerChoice() {

    const num = Math.random();
    console.log(num);

    if(num < 0.333) return "Rock"

    if(num > 0.666) return "Scissors"

    return "Paper"
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

function playGame() {

    for( let i = 1; i <= 5; i++){
    console.log(`\nROUND ${i}`)

        const userChoice = getUserChoice();
        const compChoice = getComputerChoice();

        console.log(`You Chose ${userChoice}`);
        console.log(`Computer Chose ${compChoice}`);

        const result = playRound(userChoice, compChoice);

        console.log(result);
        console.log(`Score -> Your Score: ${userScore} | Computer Score: ${computerScore}`)

}

console.log("\nGame Over!!!");

    if (userScore > computerScore) {
        console.log("🎉 You won the game!");
    } else if (computerScore > userScore) {
        console.log("😞 Computer won the game!");
    } else {
        console.log("🤝 It's a tie game!");
    }
}

playGame();


