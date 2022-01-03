/**
* Author: Justin Juang
* Date: 1/3/2022
*
**/
// Create a function sortingHat()
function sortingHat(str){
  // that takes a string as an argument: function sortingHat(str)

  // counts the letters in str and assigns it to a variable length
  var len = str.length;
  // uses modulus (% operator) to get the remainder with 4: mod = length % 4;
  var mod = len % 4;
  // mod will now be a value between 0 and 3
  // create a conditional that will return Gryffindor, Ravenclaw, Slytherin, and Hufflepuff depending on whether the value of mod is 0, 1, 2, or 3
  if(mod%4 == 0){
    return "Gryffindor";
  }
  else if(mod%4 == 1){
    return "Ravenclaw";
  }
  else if(mod%4 == 2){
    return "Slytherin";
  }
  else{
    return "Hufflepuff";
  }
}

// Create an click listener attached to #button
  var myButton = document.getElementById("button");
  myButton.addEventListener("click", function(){
  // that gets the value of #input and assigns it to a variable name
  var name = document.getElementById("input").value;
  // runs sortingHat(name) and stores the result in a variable house
  var house = sortingHat(name);

  newText = "<p>The Sorting Hat has sorted you into "  + house + "</p>"
  // appends a new styled paragraph to #output that says "The Sorting Hat has sorted you into " + house
  document.getElementById("output").innerHTML = newText;
  //$("output").innerHTML = newText;
})
