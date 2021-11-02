/**
* Author: Justin Juang & Christian Decareau
* Date: 11/1/2021
**/

// Use getElementById() to find your output <div> and assign it to a variable outputEl
var outputEl = document.getElementById("output");

  //finds the HTML element by ID; 'output' <div> from index.html
  console.log(outputEl);

// Create a new element with document.createElement("p") and assign it to a variable new1El
var new1El = document.createElement("p"); //new <p>

  // Change the html attribute of new1El to say something new.
  new1El = "Is this how it works? "; //add text inside <p></p>

  console.log(new1El); //prints new1El as appears in <p>

// Create another new element and assign it to a variable new2El
var new2El = document.createElement("p"); //new <p>

  // Change the html attribute of new2El to say something else.
  new2El = "Yes, it is how it works"; //add text inside <p></p>

  console.log(new2El); //prints new1El as appears in <p>

// Append both new elements one at a time using appendChild() to your output <div>


var test2 = document.createTextNode(new1El); //make new1El into text node

  console.log(test2); //test print new1El assigned as textNode

var test3 = document.createTextNode(new2El);

  console.log(test3);

// Change the css attributes of at least two elements of your page
outputEl.appendChild(test2);
//properly attach new1El as a textNode to 'output' <div>
outputEl.appendChild(test3);
