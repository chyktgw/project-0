// wait for DOM to load before running JS
$(document).ready(function(){
console.log("sanity check");

//playerOne (rabbit) keypress 97
	var playerOne = 'A' ;
    $('.start').append(playerOne);
//playerTwo (turtle) keypress 108
	var playerTwo = 'B' ;
    $('.start').append(playerTwo);


    var position1 = 0;
    var position2 = 0;

    $(window).on("keypress", function handler (event) {

      if (event.which === 97 ) {
        console.log('a pressed');
        if(position1 < 40){
          $('.box').empty();
          $('.'+ position2).text(playerTwo);
        position1++;
        $("." + position1).append(playerOne);
        }
        if(position1 === 40){
          alert("Rabbit wins!");
        }

      } if(event.which === 108) {
        console.log('l pressed');
         if(position1 < 40){
           $('.box').empty();
           $('.'+ position1).text(playerOne);
         position2++;
         $("." + position2).append(playerTwo);
         }
         if(position2 === 40){
           alert("Turtle wins!");
         }
      }

    });



  if (position2 === 40){
    alert("turtle"+"wins!");
  }

    $('.btn').click(function clearBoard(){
      $(".box").empty();
      position1 = 0;
      position2 = 0;
      $('.start').append(playerOne);
      $('.start').append(playerTwo);
    });


  });