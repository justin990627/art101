/**
* Author: Justin Juang
* Date: 11/29/2021
**/

// Create an array of numbers and assign it to a variable.
var arrayOfNums = [4, 6, 12, 1, 45, 23];

var funObject = {
  key: "value", //#key-value pairs
  another: "string",
  hereIsANum: 5,
  names: ["Justin", "John"]
}

funObject.thingsIForgot = "keys";


// Create a named function that will take a single parameter, do a calculation on it (sqrt, sqr, addition, etc), and return the result.

function doCalcOnNums(x){
    var results = x/40; // your operation on x here
    return results;
}


// Test your function with a few different numbers.
// Use map on your array using your function as a callback to operate on all the numbers in your array.

// array.map(yourFunctionName);

console.log("Here is map with a named function");
console.log(arrayOfNums.map(doCalcOnNums));

// Now use a new anonymous function as a callback with map to do some new operation on each of the numbers in your array.
// array.map(function(x){
//     var results = // your new operation on x here
//     return results;
// })

console.log("Here is map with an anonymous function. We are anonymous. We are legion");
console.log(arrayOfNums.map(function(n){
  return 2 ** n;
}));
