//So far this code works as it should, please do not kill it.

//Variables
var randomNumber;
var wins= 0;
var losses = 0;
var totalScore = 0;

//Because all crystals have the same code in order to assign them a random value
function randomCrystalNumber(){
    var random = 1 + Math.floor(Math.random() * 12);
    return random;
};

//Initial status
function resetStats() {
    //Declare reset values.
    totalScore = 0;
    var crystalOne = randomCrystalNumber();
    var crystalTwo = randomCrystalNumber();
    var crystalThree = randomCrystalNumber();
    var crystalFour = randomCrystalNumber();
    randomNumber = 19 + Math.floor(Math.random() * 120);
    //Now, we assign the values to the elements in HTML
    $(".random-number").val(randomNumber) ;
    $(".crystal-one").val(crystalOne) ;
    $(".crystal-two").val(crystalTwo);
    $(".crystal-three").val(crystalThree) ;
    $(".crystal-four").val(crystalFour) ;
    $(".total-score").val(totalScore) ;
    //show
    $(".random-number").text(randomNumber);
    $(".total-score").text(totalScore);
};

function initialStats() {
    //Declare starting values.
    totalScore = 0;
    var crystalOne = randomCrystalNumber();
    var crystalTwo = randomCrystalNumber();
    var crystalThree = randomCrystalNumber();
    var crystalFour = randomCrystalNumber();
    //Now, we assign the values to the elements in HTML
    $(".crystal-one").val(crystalOne) ;
    $(".crystal-two").val(crystalTwo);
    $(".crystal-three").val(crystalThree) ;
    $(".crystal-four").val(crystalFour) ;
    $(".total-score").val(totalScore) ;
    ////
    $(".wins").text("Wins: " + wins);
    $(".losses").text("Losses: " + losses);
    $(".total-score").text(totalScore);
};


//Main program
$(document).ready(function(){  
        randomNumber = 19 + Math.floor(Math.random() * 120);
        $(".random-number").val(randomNumber) ;
        $(".random-number").text(randomNumber);
        initialStats();
    $(".crystal").click(function () {
        //Parse int to detect them as numbers.
        //If there is no parseInt it concatenates the numbers as a string.
        totalScore += parseInt(this.value);
        $(".total-score").text(totalScore); 
        if(totalScore === randomNumber){
            wins ++;
            $(".wins").text("Wins: " + wins);
            alert("Congrats!!");
            resetStats();
        }else if (totalScore > randomNumber){
            losses ++;
            $(".losses").text("Losses: " + losses);
            alert("You almost did it. Good luck the next time!");
            resetStats();
        }

    });

});