//Business logic
function Player (name){
  this.playersName = name;
  this.totalScore = 0;

}
Player.prototype.currentScore = function(){
  this.currentScore = 0;
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
  var currentScore1 = 0;
  $("#roll1").click(function(){
      var diceRoll1 = Math.ceil(Math.random()*6);
      document.getElementById('currentScore1').innerHTML=diceRoll1;

      /*var scores = [];
      scores.push(diceRoll1);
      var newScore = 0;
        for (var i = 0; i < scores.length; i++) {
          if (diceRoll1!==1){
            newScore+=scores[i];
          }else {
            newScore = 0;
          }
        };*/

        if (diceRoll1 !==1){
           currentScore1+=diceRoll1;
         }else {
           currentScore1=0;
           alert("Bummer! You Lost!");
         };

         $("#currentTotal1").text(currentScore1);
  });

  var currentScore2=0;
  $("#roll2").click(function(){
    var diceRoll2 = Math.ceil(Math.random()*6);

    document.getElementById('currentScore2').innerHTML=diceRoll2;

    if (diceRoll2 !==1){
       currentScore2+=diceRoll2;
     }else {
       currentScore2=0;
       alert("Bummer! You Lost!");
     };
     $("#currentTotal2").text(currentScore2);
  });

});
