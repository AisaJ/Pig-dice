//Business logic
function Player (name){
  this.playersName = name;
  this.currentScore = 0;
  this.totalScore = 0;
}
Player.prototype.totalScore = function(){
  return this.currentScore+=this.totalScore;
  this.totalScore=0;
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
  	  var totalScore=0;
  $("#roll1").click(function(){
      var diceRoll1 = Math.ceil(Math.random()*6);
      document.getElementById('currentScore1').innerHTML=diceRoll1;
	  
	  if (diceRoll1 !=1){
		totalScore+=diceRoll1;
    }else {
		totalScore=0;
	window.alert("Bummer! You Lost!");
    } 
	  
	  
	  
   document.getElementById('currentTotal1').innerHTML=totalScore;

  });
  
  var totalscore2=0;
  $("#roll2").click(function(){
    var diceRoll2 = Math.ceil(Math.random()*6);

    document.getElementById('currentScore2').innerHTML=diceRoll2;
	
	
	if (diceRoll2 !=1){
		totalScore2+=diceRoll2;
    }else {
		totalScore2=0;
	window.alert("Bummer! You Lost!");
    } 
	
	document.getElementById('currentTotal2').innerHTML=totalScore2;
  });

});
