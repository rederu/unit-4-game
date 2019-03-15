//Global Variables
var randomNumber;
var wins= 0;
var losses = 0;
var totalScore = 0;
///
/// Enter the functions
///
//Because all crystals have the same code in order to assign them a random value
function randomCrystalNumber(){
    var random = 1 + Math.floor(Math.random() * 12);
    return random;
};
// The assignation of the number for every crystal happens from the beginning and every time the game resets
function crystals(){
    var crystalOne = randomCrystalNumber();
    var crystalTwo = randomCrystalNumber();
    var crystalThree = randomCrystalNumber();
    var crystalFour = randomCrystalNumber();
    $(".crystal-one").val(crystalOne) ;
    $(".crystal-two").val(crystalTwo);
    $(".crystal-three").val(crystalThree) ;
    $(".crystal-four").val(crystalFour) ;
    $(".total-score").val(totalScore) ;
};

//Initial stats of the game
function initialStats() {
    //Declare starting values.
    totalScore = 0;
    crystals();
    $(".wins").text("Wins: " + wins);
    $(".losses").text("Losses: " + losses);
    $(".total-score").text(totalScore);
};

function resetStats() {
    //Declare reset values.
    totalScore = 0;
    crystals();
    randomNumber = 19 + Math.floor(Math.random() * 120);
    $(".random-number").text(randomNumber);
    $(".total-score").text(totalScore);
};

///
///Main program
///
$(document).ready(function(){ 
    //Assign a random number for the user to reach
        randomNumber = 19 + Math.floor(Math.random() * 120);
        $(".random-number").val(randomNumber) ;
        $(".random-number").text(randomNumber);
        initialStats();
        //When the user clicks on any object with the "crystal" class in their html...
    $(".crystal").click(function () {
        //Parse int to detect them as numbers.
        //If there is no parseInt it concatenates the numbers as a string.
        totalScore += parseInt(this.value);
        $(".total-score").text(totalScore); 
        //If the user's score = random number 
        if(totalScore === randomNumber){
            //Add 1 to wins
            wins ++;
            //Shows number of wins
            $(".wins").text("Wins: " + wins);
            //and an alert congratulating the player
            alert("Congrats!!");
            //And reset stats
            resetStats();
        //Else, if total score is greater than the random number
        }else if (totalScore > randomNumber){
            // Losses +1
            losses ++;
            //And will show the number of losses +1
            $(".losses").text("Losses: " + losses);
            alert("You almost did it. Your number was "+ totalScore + " . Good luck the next time!");
            resetStats();
        }

    });

});