/**
* Author: Justin Juang & Christian Decareau
* Date: 11/1/2021
**/

// Borrow the nameSort() function or my anagram() function from Lab 7.
function username (name) {
  //split string to array
  var userArray = name.split('');
  console.log("userArray = ", userArray);

  //sort the array
  var userArraySort = userArray.sort();
  console.log("userArraySort = ", userArraySort);

  //join array back to strings
  var userSorted = userArraySort.join('');
  console.log("new name = ", userSorted);

  //return the results
  return userSorted;
}
var bottonEl = document.getElementById("my-button");

// Attach an event listener to your button that does the following:
function buttonPush(){
// Gets the value of your input field
var originName = document.getElementById("username");
var inputName = originName.value;

// Runs that value through your sort() or anagram() function and saves the results.
var sortedName = username(inputName);
console.log(sortedName);

// Replaces the html in <div id=output> with the results.
var outputEl = document.getElementById("output");
outputEl.innerHTML = "New Name " + sortedName;
console.log("New Name " + sortedName);
}

buttonEl = document.addEventListener("click", buttonPush);
