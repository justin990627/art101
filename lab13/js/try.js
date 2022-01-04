/**
* Author: Justin Juang
* Date: 1/3/2022
**/

// Create a "FizzBuzz" function similar to how we did in class.
$("#button").click(function FizzBuzz(){
  // Loop through numbers 1 to 200, listing them as you go
  var oneLongString = "";
  for(num = 1; num<=200; num++){
    if(num%3==0 && num%5==0 && num%7==0){
      oneLongString += "FizzBuzzBoom! <br>";
      $("#output").html(oneLongString);
    }
    if(num%3==0 && num%5==0){
      oneLongString += "FizzBuzz! <br>";
      $("#output").html(oneLongString);
    }
    if(num%3==0 && num%7==0){
      oneLongString += "FizzBoom! <br>";
      $("#output").html(oneLongString);
    }
    if(num%5==0 && num%7==0){
      oneLongString += "BuzzBoom! <br>";
      $("#output").html(oneLongString);
    }
    // If the number is a multiple of 3, if should print "Fizz!"
    if(num % 3 == 0){
      oneLongString += " Fizz! <br>";
      $("#output").html(oneLongString);
    }
    // If the number is a multiple of 5, it should print "Buzz!"
    if(num % 5 == 0){
      oneLongString += "Buzz! <br>";
      $("#output").html(oneLongString);
    }
    // If the number is a multiple of 7, it should print "Boom!"
    if(num % 7 == 0){
      oneLongString += "Boom! <br>";
      $("#output").html(oneLongString);
    }
    else{
      oneLongString += num + " <br>";
      $("#output").html(oneLongString);
    }
  }
})
