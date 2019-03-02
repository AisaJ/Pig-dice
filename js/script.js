//Business logic
function Player (name){
  this.playersName = name;
  this.currentScore = 0;
  this.totalScore = 0;
}

$(document).ready(function(){

  //User Interface logic
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
  $("#roll1").click(function(){
      var diceRoll1 = Math.ceil(Math.random()*6);
      document.getElementById('currentScore1').innerHTML=diceRoll1;

      var scores = [];
      scores.push(new Player(diceRoll1));
      var newScore = scores.forEach(function(score){
        for (var i = 0; i < scores.length; i++) {
          return score += score;
        }
      });
    $("#currentTotal1").text(newScore.this.currentScore);

  });
  $("#roll2").click(function(){
    var diceRoll2 = Math.ceil(Math.random()*6);

    document.getElementById('currentScore2').innerHTML=diceRoll2;
  });

});
