
$(document).ready(function(){
  //Business logic



  //User Interface logic
  $("form#user-name").submit(function(event){
    alert("working!");
    var name1 = $("#player-1").val();
    var name2 = $("#player-2").val();

    $(".player1-Name").text(name1);
    $(".player2-Name").text(name2);

    event.preventDefault();
  });
  $("#roll1").click(function(){
      alert('work!');
      var diceRoll = Math.ceil(Math.random()*6);

      document.getElementById('currentScore1').innerHTML=diceRoll;

  });


  /*$(".scroll").submit(function(event){


    event.preventDefault();
  });*/

});
