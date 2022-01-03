/**
* Author: Justin Juang
* Date: 1/1/2022
*
**/

// Using jQuery, create buttons to add to the challenge, problems, and results sections of your document:
// Find the section you want to add the button to
// Create the button
// Give it a text label
// Add it to the section
$("#challenges").append("<button id=c_button> Press </button>")

$("#problems").append("<button id=p_button> Press </button>")

$("#results").append("<button id=r_button> Press </button>")


// Using jQuery, do the following for each button:
// Add a click event to each button
// Find the challenge, problems, or results section the button is in.
// Toggle a class special within the <div> of the section
// Go into your css and style each of the classes
$("#c_button").click(function(){
  $(this).parent().toggleClass("special");
});

$("#p_button").click(function(){
  $(this).parent().toggleClass("special");
})

$("#r_button").click(function(){
  $(this).parent().toggleClass("special");
})

// Test each button
