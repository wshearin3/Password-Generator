// Assignment code here
var caps = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lows = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var nums = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
var spec = ["!", "@", "#", "$", "%", "^", "&", "*", "-"]

// Get references to the #generate element, #generate is button id
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var length = prompt("How may characters does your password need to be (between 8 & 128)?");
  var upperCase = prompt("Would you like to include uppercase characters (Yes or No)?");
  var lowerCase = prompt("Would you like to include lowercase characters (Yes or No)?");
  var numeric = prompt("Would you like to include numeric characters (Yes or No)?");
  var specialCharacters = prompt("Would you like to include special characters (Yes or No)?");
  console.log(writePassword.length);

  //var password = generatePassword();
  var passwordText = document.querySelector("#password");
  

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
