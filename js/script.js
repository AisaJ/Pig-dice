//Business logic
function Player (name){
  this.playersName = name;
};
/*Player.prototype.oScore = function(){
  return this.overallScore + " Points"
};*/
function toGame(){
  window.scrollTo(0,1500);
}
function newGame(){
  location.reload();
  window.scrollTo(0,-1000);
};

//User Interface logic
$(document).ready(function(){
  $("form#user-name").submit(function(event){
    console.log("working!");
    name1 = $("#player-1").val();
    name2 = $("#player-2").val();

    diffPlayer = new Player(name1);
    diffPlayer2 = new Player(name2);

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
          $("#roll1").hide();
          $("#roll2").show();
          $("#diceOne").fadeIn(1500);
          $("#diceOne").fadeOut(3500);
          document.getElementById('roll2').disabled = false;
      };
      $("#currentTotal1").text(currentScore1);
      if(overallScore1+currentScore1>=10){
        alert("I love js");
        $("#roll1").hide();
        $("#roll2").hide();
        $('#win-msg').text("Game Over!"+diffPlayer.playersName+" wins, Yaaay!!! Points reached 100.");
        $("#win-msg").show();
      };
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
       $("#roll2").hide();
       $("#roll1").show();
       $("#diceOne").fadeIn(1500);
       $("#diceOne").fadeOut(3500);
       document.getElementById('roll1').disabled = false;
     };
     $("#currentTotal2").text(currentScore2);
     if(overallScore2+currentScore2>=100){
       $("#roll1").hide();
       $("#roll2").hide();
       $('#win-msg').text("Game Over!"+diffPlayer2.playersName+" wins, Yaaay!!! Points reached 100.");
       $("#win-msg").show();
     };
  });

  $("#pause1").click(function(){
    document.getElementById('roll1').disabled = true;
    document.getElementById('roll2').disabled = false;
    $("#roll2").show();
    overallScore1+=currentScore1;
    currentScore1=0;
    document.getElementById('tScore1').innerHTML=currentScore1;
    document.getElementById('tScore1').innerHTML=overallScore1;

  });
  $("#pause2").click(function(){
    document.getElementById('roll1').disabled = false;
    document.getElementById('roll2').disabled = true;
    $("#roll1").show();
    overallScore2+=currentScore2;
    currentScore2=0;
    document.getElementById('tScore2').innerHTML=currentScore2;
    document.getElementById('tScore2').innerHTML=overallScore2;

    if(overallScore1>=10){
      alert("I love js");
    };
  });

});
