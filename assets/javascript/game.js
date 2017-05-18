var targetNumber = 0;

var counter = 0;

var wins = 0;

var losses = 0;

var uniqueRandoms = [];

var numRandoms = 10;

function makeUniqueRandom() {

    // refill the array if needed
    if (!uniqueRandoms.length) {
        for (var i = 1; i < numRandoms; i++) {
            uniqueRandoms.push(i);
        }
    }
    var index = Math.floor(Math.random() * uniqueRandoms.length);
    var val = uniqueRandoms[index];
    // now remove that value from the array
    uniqueRandoms.splice(index, 1);
    return val;
}

function startGame() {
    targetNumber = Math.floor(Math.random() * 50) + 10;;
    $("#number-to-guess").text(" " + targetNumber + " ");

    counter = 0;

    $("#count").text(" " + counter + " ");

    uniqueRandoms = [];

    numRandoms = 10;

    $("#imgDiamond").attr("data-crystalvalue", makeUniqueRandom());
    $("#imgSapphire").attr("data-crystalvalue", makeUniqueRandom());
    $("#imgEmerald").attr("data-crystalvalue", makeUniqueRandom());
    $("#imgRuby").attr("data-crystalvalue", makeUniqueRandom());
}


// This time, our click event applies to every single crystal on the page. Not just one.
$(".crystal-image").on("click", function() {

    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);

    counter += crystalValue;

    $("#count").text(" " + counter + " ");

    if (counter === targetNumber) {
        wins++;
        $("#win").text(" " + wins + " ");
        startGame();
    } else if (counter >= targetNumber) {
        losses++;
        $("#loss").text(" " + losses + " ");
        startGame();
    }

});

//When document is ready start your game;
$(document).ready(function() {


    startGame();



});
