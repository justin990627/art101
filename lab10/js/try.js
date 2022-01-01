/**
* Author: Justin Juang
* Date: 12/26/2021
**/

function shuffleArray(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}

// sortUserName - a function that takes user input and sorts the letters
// of their name
function reorderUserName(word) {
    var wordArray = word.toLowerCase().split('');
    var newArray = shuffleArray(wordArray);
    return newArray.join('');
}

// given a string, return string in Title Case
// thanks to https://stackoverflow.com/questions/196972/convert-string-to-title-case-with-javascript
function toTitleCase(str) {
    return str.replace(
        /\w\S*/g,
        function(txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        }
    );
}

// find the button element
var buttonEl = document.getElementById("my-button");
console.log("button element:", buttonEl);
// find the form element
inputEl = document.getElementById("username");
console.log("input element:", inputEl);
// find output element
var outputEl = document.getElementById("output");
console.log("output element:", outputEl);

// add an event listener to button
buttonEl = document.addEventListener("click", function(){
  // Gets the value of your input field
  var userName = inputEl.value;
  // modify value - either sort or shuffle
  var newName = toTitleCase(reorderUserName(userName));

  //Replaces the html in <div id=output> with the results.
  outputEl.innerHTML = newName;
  outputEl.innerHTML = "<p id=name-results>" + newName + "</p>";
})
