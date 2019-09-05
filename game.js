var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var directionsText = document.getElementById("directions-text");
var userChoiceText = document.getElementById("userchoice-text");
var computerChoiceText = document.getElementById("computerchoice-text");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var tiesText = document.getElementById("ties-text");

document.onkeyup = function (event) {
    var userGuess = event.key;
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    alert("User guess: " + userGuess);
    alert("Computer guess: " + computerGuess);
    if (userGuess == computerGuess) {
        alert("userchoice-text" + userGuess)
    }
    else {
        alert("computerchoice-text" + computerGuess)
    }

  
    directionsText.textContent = "";

    userChoiceText.textContent = "You chose: " + userGuess;
    computerChoiceText.textContent = "The computer chose: " + computerGuess;
    winsText.textContent = "wins: " + wins;
    lossesText.textContent = "losses: " + losses;
    tiesText.textContent = "ties: " + ties;

}
