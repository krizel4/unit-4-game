$(document).ready(function() {

// Global Variables 
var wins = 1;
var losses = 1;
var computerNumber = 0;
var crystalsCollected = 0;
var gem1 = 0;
var gem2 = 0;
var gem3 = 0;
var gem4 = 0; 

// Randomized target score and randomized gems
var randomNumber = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function newGame () {
    crystalsCollected = 0;
    computerNumber = randomNumber(19,120);
    gem1 = randomNumber(1, 12);
    gem2 = randomNumber(1, 12);
    gem3 = randomNumber(1, 12);
    gem4 = randomNumber(1, 12);

// Record target score and crystals collected for the viewer to see
    $("#computerNumber").html(computerNumber);
    $("#crystalsCollected").html(crystalsCollected);

// Test Scores and Gems
console.log("Target Score: " + computerNumber);
console.log("Gem 1: " + gem1);
console.log("Gem 2: " + gem2);
console.log("Gem 3: " + gem3);
console.log("Gem 4: " + gem4);
}

// Call the game
newGame ();

// Applying click function to the gems and add value to the crystals collected
$("#gem1").on("click", function() {
    crystalsCollected = crystalsCollected + gem1;
    $("#crystalsCollected").html(crystalsCollected);

// Check if user won or lost
    checkWinLose();
});

$("#gem2").on("click", function() {
    crystalsCollected = crystalsCollected + gem2;
    $("#crystalsCollected").html(crystalsCollected);
    checkWinLose();
});

$("#gem3").on("click", function() {
    crystalsCollected = crystalsCollected + gem3;
    $("#crystalsCollected").html(crystalsCollected);
    checkWinLose();
});

$("#gem4").on("click", function() {
    crystalsCollected = crystalsCollected + gem4;
    $("#crystalsCollected").html(crystalsCollected);
    checkWinLose();
});
    


// Check crystals collected against the target number

function checkWinLose() {
    
    if (crystalsCollected === computerNumber){ 
    alert("You win! Hit 'OK' to play again.");
    $("#wins").html("Wins: " + wins);
    
    // increase score
    wins++;

    // start a new game
    newGame();
   
    } else if (crystalsCollected > computerNumber){
    alert("You lost! Hit 'OK' to play again.");
    $("#losses").html("Losses: " + losses);

    // add to losses
    losses++;

    // start a new game
    newGame();
    }
}


});