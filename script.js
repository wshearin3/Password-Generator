// Assignment code here


// Get references to the #generate element, #generate is button id
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var length = prompt("How may characters does your password need to be (between 8 & 128)?");
  var upperCase = prompt("Would you like to include uppercase characters (Yes or No)?");
  var lowerCase = prompt("Would you like to include lowercase characters (Yes or No)?");
  var numeric = prompt("Would you like to include numeric characters (Yes or No)?");
  var specialCharacters = prompt("Would you like to include special characters (Yes or No)?");
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
