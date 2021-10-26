/**
* Author: Justin Juang & Christian Decareau
* Date: 10/25/2021
**/

//Create a new function
function sortUserName(){
  //In the function, declare a variable userName and use window.prompt() to get the user's name from the user.
  var userName = window.prompt("Please Enter Your Name");
  console.log("userName = ", userName)

  //split string to array
  var nameArray = userName.split('');
  console.log("nameArray = ", nameArray);

  //sort the array
  var nameArraySort = nameArray.sort();
  console.log("nameArraySort = ", nameArraySort);

  //join array back to strings
  var nameSorted = nameArraySort.join('');
  console.log("nameSorted = ", nameSorted);

  //return the results
  return nameSorted;
}
//Output
document.writeln("Here's your new name: ", sortUserName(), "<br/>");
