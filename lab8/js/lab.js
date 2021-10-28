/**
* Author: Justin Juang & Christian Decareau
* Date: 10/27/2021
**/

score = [3, 84, 62, 11, 25, 9, 1, 99]



//function to  create percentages of total scores
function decimalScore(x){
return x / 100.00;
}

//tests function
console.log("The result of 33 / 100 is: ", decimalScore(33));

//lists unedited array
console.log("The beginning array: ", score);

//changes array values to decimals and assigns them to a new array firstTest
var firstTest = score.map(decimalScore);

//prints out new array values
console.log("The decimal version of the array: " + firstTest);

//converts new array values, multiplying them to the second power and assigning them to a new array secondTest
var secondTest = firstTest.map(function(x){
  return x ** 2;
})

//prints out new array values of secondTest
console.log("The decimal values to the second power of the array: " + secondTest);
