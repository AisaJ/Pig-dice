//Business logic
function Player (name){
  this.playersName = name;
  this.overallScore = 0;
}
Player.prototype.oScore = function(){
  return this.overallScore + " Points"
}

//User Interface logic
$(document).ready(function(){
  $("form#user-name").submit(function(event){
    console.log("working!");
    var name1 = $("#player-1").val();
    var name2 = $("#player-2").val();

    var diffPlayer = new Player(name1);
    var diffPlayer2 = new Player(name2);

    $(".player1-Name").text(diffPlayer.playersName);
    $(".player2-Name").text(diffPlayer2.playersName);

    event.preventDefault();
  });
  var currentScore1 = 0;
  var overallScore1 = 0;

  $("#roll1").click(function(){
      var diceRoll1 = Math.ceil(Math.random()*6);
      document.getElementById('currentScore1').innerHTML=diceRoll1;
      //Business logic
      if (diceRoll1 !==1){
          currentScore1+=diceRoll1;
      }else {
         currentScore1=0;
         //User Interface logic
         alert("Bummer! You Lost!");
          $("#roll1").hide();
          $("#roll2").show();
          $("#diceOne").fadeIn(1500);
          document.getElementById('roll2').disabled = false;
      };
      $("#currentTotal1").text(currentScore1);
  });

  var currentScore2=0;
  var overallScore2 = 0;
  $("#roll2").click(function(){
    var diceRoll2 = Math.ceil(Math.random()*6);

    document.getElementById('currentScore2').innerHTML=diceRoll2;
    //Business logic
    if (diceRoll2 !==1){
       currentScore2+=diceRoll2;
     }else {
       currentScore2=0;
       //User Interface logic
       alert("Bummer! You Lost!");
       $("#roll2").hide();
       $("#roll1").show();
       $("#diceOne").fadeIn(1500);
       document.getElementById('roll1').disabled = false;
     };
     $("#currentTotal2").text(currentScore2);
  });

  $("#pause1").click(function(){
    document.getElementById('roll1').disabled = true;
    document.getElementById('roll2').disabled = false;
    $("#roll2").show();
    overallScore1+=currentScore1;
    currentScore1=0;
    document.getElementById('tScore1').innerHTML=currentScore1;
    document.getElementById('tScore1').innerHTML=overallScore1;

    if(overallScore1>=100){
      alert("I love js");
    };
  });
  $("#pause2").click(function(){
    document.getElementById('roll1').disabled = false;
    document.getElementById('roll2').disabled = true;
    $("#roll1").show();
    overallScore2+=currentScore2;
    currentScore2=0;
    document.getElementById('tScore1').innerHTML=currentScore1;
    document.getElementById('tScore1').innerHTML=overallScore1;

    if(overallScore1>=100){
      alert("I love js");
    };
  });

});
