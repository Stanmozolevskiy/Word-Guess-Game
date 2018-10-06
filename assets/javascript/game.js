// our word-list that computer will choose from: 
var wordList = ["brazil", "argentina", "chile", "peru", "colombia"];

// make variables for our wins losses = set to 0.
var wins = 0;
var losses = 0;
var lives;

// var vor wrong guessed letters to display it, underscores
var wrongGuess;
var underScores;
var usersGuess;



// fired when the entire page loads
window.onload = function() {

    function newGame() {
        // generating the random word from our list, and pushing underscores. attempts set to 12
        usersGuess = wordList[Math.floor(Math.random() * wordList.length)];
        console.log(usersGuess);
        lives = 12;
        wrongGuess = [];
        underScores = [];

        for (i = 0; i < usersGuess.length; i++) {
            underScores.push("_");
        }

        // peferens ids in HTML file
        document.getElementById("underScores").innerHTML = underScores.join(" ");
        document.getElementById("livesLeft").innerHTML = "Attempts: " + lives;
        document.getElementById("wins").innerHTML = "Wins: " + wins;
        document.getElementById("losses").innerHTML = "Losses: " + losses;

    }

    document.onkeyup = function(event) {
        // make sure key is a letter by setting key index
        if (event.keyCode >= 65 && event.keyCode <= 90) {
            // put the pressed key into letterGuess
            var letterGuess = String.fromCharCode(event.keyCode).toLowerCase();
            // send the letter to the compare loop
            compare(letterGuess);
        }

    }

    function compare(letter) {
        if (wrongGuess.indexOf(letter) > -1) {
            return;
        }

        // check for matching letter 
        var guessedLetter = false;

        for (var i = 0; i < usersGuess.length; i++) {
            if (usersGuess[i] == letter) {
                guessedLetter = true;
                underScores[i] = letter;
            }
        }

        // location of the letter
        if (!guessedLetter) {
            wrongGuess.push(letter);
            lives--;
        }
        count();
    }

    // this function does count wins and losses
    function count() {

        document.getElementById("livesLeft").innerHTML = "Attempts: " + " " + lives;
        document.getElementById("underScores").innerHTML = underScores.join(" ");
        document.getElementById("wrongGuess").innerHTML = "Guessed Wrong: " + " " + wrongGuess.join(" ");


        if (usersGuess == underScores.join("")) {

            wins++;
            alert("Good job Mayson !");
            document.getElementById("wins").innerHTML = "wins: " + " " + wins;

            newGame();
        } else if (lives < 1) {
            losses++;
            alert("You need too buy a ticket to Soth America");
            document.getElementById("losses").innerHTML = "losses: " + " " + losses;

            newGame();
        }

    }

    newGame();


}