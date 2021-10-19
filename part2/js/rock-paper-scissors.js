/* eslint-env browser */

var choice = window.prompt("Make a choice: rock, paper, or scissors:");
var computer = Math.random();

if (computer < 0.3333) {
    computer = "rock";
} else if (computer <= 0.6666) {
    computer = "paper";
} else {
    computer = "scissors";
}

if (choice === "rock") {
    if (computer === "scissors") {
        window.alert("You won!");
    } else if (computer === "paper") {
        window.alert("You Lost!");
    } else if (computer === "rock") {
        window.alert("It's a tie!");
    }
} else if (choice === "paper") {
    if (computer === "scissors") {
        window.alert("You Lost!");
    } else if (computer === "rock") {
        window.alert("You won!");
    } else if (computer === "paper") {
        window.alert("It's a tie!");
    }

} else if (choice === "scissors") {
    if (computer === "paper") {
        window.alert("You won!");
    } else if (computer === "rock") {
        window.alert("You Lost!");
    } else if (computer === "scissors") {
        window.alert("It's a tie!");
    }

}

if (choice === "rock" || choice === "paper" || choice === "scissors") {
    window.document.write("Your choice was: " + choice + "<br> Computer's choice was: " + computer);
} else {
    window.document.write("Please enter rock, paper, or scissors correctly!");
}
