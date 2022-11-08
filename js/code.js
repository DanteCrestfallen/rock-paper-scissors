//Check the number passed forward to figure out the computer's choice
function getComputerChoice(number) {
    return (number == 1) ? "Rock" : (number == 2) ? "Paper" : "Scissors";
}

//Get Player's Choice
function getPlayerChoice() {
    return prompt("You're playing against a computer. Rock, Paper or Scissors?", "Rock");
}

//Create the function that plays a single round
function playRound() {
    let player = getPlayerChoice();

    //1 = Lose; 2 = Win; 3 = Tie; 0 is for troubleshooting
    let result = 3;
    if(player != null) {
        console.log("You chose: " + player);
        let cpu = getComputerChoice(Math.floor(Math.random()*3)+1);
        console.log("Computer chose: " + cpu);

        let p = player.toLowerCase();
        let c = cpu.toLowerCase();
        
        if(p === "rock") {
            if(c === "paper") {result = 1;}
            else if(c === "scissors") {result = 2;}
        } else if (p === "paper") {
            if (c === "scissors") {result = 2;}
        } else if (p === "scissors") {
            if(c === "rock") {result = 1;}
            else if(c === "paper") {result = 2;}
        } else {
            result = 1;
        }
        console.log((result == 1) ? "You lose!" : (result == 2) ? "You win!" : "It's a tie!");
    } else {
        result = 0;
    }
    return result;
}

//Create a function to play multiple rounds
function playGame() {
    let rounds = prompt("How many rounds would you like to play?", 1);
    let result = cpuWins = playerWins = ties = 0;
    for(i=1; i<=(+rounds); i++) {
        result = playRound();
        if(result == 0) {break;}
        if(result == 1) {cpuWins = cpuWins + 1;} 
        else if(result == 2) {playerWins = playerWins + 1;}
        else {ties = ties + 1;}
    }
    console.log("You played " + (i-1) + " round(s) of " + rounds + " total.");
    console.log("Computer had a total of: " + cpuWins + " wins.");
    console.log("Player had a total of: " + playerWins + " wins.");
    console.log("There was a total of: " + ties + " ties.")
    console.log((cpuWins > playerWins) ? "Computer wins!" : (cpuWins < playerWins) ? "Player wins!" : "You both tied!");
}

playGame();
