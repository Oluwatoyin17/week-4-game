$(document).ready(function(){

    //Random variables for the crystals and start value
    var numberToGuess = Math.floor(Math.random()*101)+19;
    var redNum = Math.floor(Math.random()*12)+1;
    var blueNum = Math.floor(Math.random()*12)+1;
    var yellowNum = Math.floor(Math.random()*12)+1;
    var greenNum = Math.floor(Math.random()*12)+1;

    // Game Counter
    var winCounter = 0;
    var lossCounter = 0;
    var score = 0;

    //Testing
    // console.log(numberToGuess);
    // console.log(red);
    // console.log(blue);
    // console.log(yellow);
    // console.log(green);
    

    $("#wins").text(winCounter);
    console.log(winCounter);
    $("#loss").text(lossCounter);

    $("#value").text(numberToGuess);
    console.log(numberToGuess);


//To reset the game a function called newGame is created
function newGame(){
    numberToGuess = Math.floor(Math.random()*101)+19;
    redNum = Math.floor(Math.random()*12)+1;
    blueNum = Math.floor(Math.random()*12)+1;
    yellowNum = Math.floor(Math.random()*12)+1;
    greenNum = Math.floor(Math.random()*12)+1;
    score = 0;
//These are added because i only want the number to be guessed and the total store to reset
    $("#value").text(numberToGuess);
    $("#totalScore").text(score);
    console.log(score);
}

$("#red").on("click", function(){
    score = score + redNum;
    $("#totalScore").text(score);
    // console.log(score);
    if (score === numberToGuess){
        $("#status").text('You Won!!');
        winCounter++;
        $("#wins").text(winCounter);
        newGame();
    }
    else if (score > numberToGuess){
        $("#status").text('You Lose!!');
        lossCounter++;
        $("#loss").text(lossCounter);
        newGame();
    }
});
$("#blue").on("click", function(){
    score = score + blueNum;
    $("#totalScore").text(score);
    // console.log(score);
    if (score === numberToGuess){
        $('#status').text('You Won!!');
        winCounter++;
        $("#wins").text(winCounter);
        newGame();
        }
    else if (score > numberToGuess){
        $('#status').text('You Lose!!');
        lossCounter++;
        $("#loss").text(lossCounter);
        newGame();
        }
});
$("#yellow").on("click", function(){
        score = score + yellowNum;
        $("#totalScore").text(score);
        // console.log(score);
    if (score === numberToGuess){
        $('#status').text('You Won!!');
        winCounter++;
        $("#wins").text(winCounter);
        newGame();
        }
    else if (score > numberToGuess){
        $('#status').text('You Lose!!');
        lossCounter++;
        $("#loss").text(lossCounter);
        newGame();
        }
});
$("#green").on("click", function(){
        score = score + greenNum;
        $("#totalScore").text(score);
        // console.log(score);
        if (score === numberToGuess){
            $('#status').text('You Won!!');
            winCounter++;
            $("#wins").text(winCounter);
            newGame();
            }
        else if (score > numberToGuess){
            $('#status').text('You Lose!!');
            lossCounter++;
            $("#loss").text(lossCounter);
            newGame();
            }
});
});


