
$(document).ready(function(){
  //Business logic
  

  //User Interface logic
  $("form#user-name").submit(function(event){
    console.log("working!");
    var name1 = $("#player-1").val();
    var name2 = $("#player-2").val();

    $(".player1-Name").text(name1);
    $(".player2-Name").text(name2);

    event.preventDefault();
  });
  $("#roll1").click(function(){
      var diceRoll1 = Math.ceil(Math.random()*6);

      document.getElementById('currentScore1').innerHTML=diceRoll1;

  });
  $("#roll2").click(function(){
    var diceRoll2 = Math.ceil(Math.random()*6);

    document.getElementById('currentScore2').innerHTML=diceRoll2;
  });

});
