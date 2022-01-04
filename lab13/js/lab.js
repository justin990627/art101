/**
* Author: Christian Decareau & Justin Juang
* Date: 11/19/2021
*
**/


$(function(){
  $("#button").click(function FizzBuzz(){
    var oneLongString = "";
    for (i= 1; i <= 200; i++){

      if (i%3 == 0 && i%5 == 0 && i%7 == 0){
        oneLongString += " FizzBuzzBoom!<br>";
         $("#output").html(oneLongString);
      }
      if (i%3 == 0 && i%5 == 0){
         oneLongString += " FizzBuzz!<br>";
          $("#output").html(oneLongString);

      }
      if (i%3 == 0 && i%7 == 0){
         oneLongString += " FizzBoom!<br>";
          $("#output").html(oneLongString);

      }
      if (i%5 == 0 && i%7 ==0){
         oneLongString += " BuzzBoom!<br>";
         $("#output").html(oneLongString);

      }
      if (i%3 == 0){
           oneLongString += " Fizz! <br>";
           $("#output").html(oneLongString);

      }
      if (i%5 == 0){
         oneLongString += " Buzz!<br>";
         $("#output").html(oneLongString);

      }
      if (i%7 == 0){
         oneLongString += " Boom!<br>";
         $("#output").html(oneLongString);

      }
      else{
         oneLongString += i + "<br>";
         $("#output").html(oneLongString);

      }
    }
  });
});
