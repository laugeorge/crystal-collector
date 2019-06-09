$(document).ready(function() {
    var randomNumber = Math.floor(Math.random()*102+ 19)

    //Display & Console log to troubleshoot later
    $('#randomNumber-Text').text(randomNumber);
    console.log(randomNumber);

    var wins= 0;
    var losses= 0;
    var totalScore = 0;

    $("#wins-Text").text(wins);
    $("#losses-Text").text(losses);

    var crystal1 = Math.floor(Math.random()*12+1)
    var cyrstal2 = Math.floor(Math.random()*12+1)
    var crystal3 = Math.floor(Math.random()*12+1)
    var crystal4 = Math.floor(Math.random()*12+1)

    function reset() {
        randomNumber = Math.floor(Math.random()*102 + 19);
        
        $("#randomNumber-Text").text(randomNumber);
        console.log(randomNumber);

        totalScore = 0;
        var crystal1 = Math.floor(Math.random()*12+1);
        var cyrstal2 = Math.floor(Math.random()*12+1);
        var crystal3 = Math.floor(Math.random()*12+1);
        var crystal4 = Math.floor(Math.random()*12+1);
        
        $("#totalScore-Text").text(totalScore)
    }

    //Setup win/lose function
    function winsFunction() {
    alert("you won!");
    wins++
    $("#wins-Text").text(wins);
    reset();
    }

    function lossesFunction() {
    alert("you lose!");
    losses++
    $("#losses-Text").text(losses);
    reset();
    }

    //Setup game function
    function winloseFunction(){
        if (totalScore == randomNumber){
            winsFunction();
          }
        else if ( totalScore > randomNumber){
            lossesFunction();
          }
    }

    //Setup win/lose and game function to crystal
    $("#c1").on ("click", function(){
        totalScore = totalScore + crystal1;
        console.log("New Total Score= " + totalScore);
    $('#totalScore-Text').text(totalScore); 
      //sets win/lose conditions
      winloseFunction();
    })  

    $("#c2").on ("click", function(){
        totalScore = totalScore + crystal1;
        console.log("New Total Score= " + totalScore);
    $('#totalScore-Text').text(totalScore); 
      //sets win/lose condition
      winloseFunction();
    })


    $("#c3").on ("click", function(){
        totalScore = totalScore + crystal1;
        console.log("New Total Score= " + totalScore);
    $('#totalScore-Text').text(totalScore); 
      //sets win/lose conditions
      winloseFunction();
    })

    $("#c4").on ("click", function(){
        totalScore = totalScore + crystal1;
        console.log("New Total Score= " + totalScore);
    $('#totalScore-Text').text(totalScore); 
      //sets win/lose conditions
      winloseFunction();
    });
});