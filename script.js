console.log("Hello World!")

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

const result = getComputerChoice();
console.log(result);

const userChoice = getUserChoice();
console.log(userChoice);