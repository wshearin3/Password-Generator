// Assignment code here
var caps = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lows = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var nums = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var spec = ["!", "@", "#", "$", "%", "^", "&", "*", "-"];
var allChars = caps.concat(lows, nums, spec);
var noUps = lows.concat(nums, spec);
var noLows = caps.concat(nums, spec);
var noSpec = caps.concat(lows, nums);
var noNums = caps.concat(lows, spec);
var noUpsNoNums = lows.concat(spec);
var noUpsNoLows = nums.concat(spec);
var noUpsNoSpec = lows.concat(nums);
var noLowsNoSpec = caps.concat(nums);
var noLowsNoNums = caps.concat(spec);
var noNumsNoSpec = caps.concat(lows);

// Get references to the #generate element, #generate is button id
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var much = prompt("How may characters does your password need to be (between 8 & 128)?");
    muchInt = Number(much);
  var upperCase = prompt("Would you like to include uppercase characters (Yes or No)?");
  var lowerCase = prompt("Would you like to include lowercase characters (Yes or No)?");
  var numeric = prompt("Would you like to include numeric characters (Yes or No)?");
  var specialCharacters = prompt("Would you like to include special characters (Yes or No)?");

  var upperCaseBool;
if (upperCase == "Yes") {
  upperCaseBool = true;
} else{
  upperCaseBool = false;
}

var lowerCaseBool;
if (lowerCase == "Yes") {
  lowerCaseBool = true;
} else{
  lowerCaseBool = false;
}

var numericBool;
if (numeric == "Yes") {
  numericBool = true;
} else{
  numericBool = false;
}

var specialCharactersBool;
if (specialCharacters == "Yes") {
  specialCharactersBool = true;
} else{
  specialCharactersBool = false;
}


//TODO - Generate for statement to choose random characters from a concated array specified by user inputs
  var password = generatePassword(muchInt, numericBool, lowerCaseBool, upperCaseBool, specialCharactersBool);
  
function generatePassword(passwordLength, numericBool, lowerCaseBool, upperCaseBool, specialCharactersBool) {

let passwords = "";

console.log("Function Start" + passwords)
console.log(muchInt)
console.log(passwordLength)


if (numericBool) {
  var char2 = Math.floor(Math.random() * nums.length);
passwords  = passwords + nums[char2];
passwordLength = muchInt - 1;
}

console.log("After Numeric Bool" + passwords)
console.log(muchInt)
console.log(passwordLength)

if (lowerCaseBool) {
  var char3 = Math.floor(Math.random() * nums.length);
passwords  = passwords + lows[char3];
passwordLength = passwordLength - 1;
}

console.log("After Numeric Bool" + passwords)
console.log(muchInt)
console.log(passwordLength)

  for (let i = 0; i < passwordLength; i++) {
    //console.log("before" + passwords + numericBool);
    var char1 = Math.floor(Math.random() * allChars.length);
    passwords  = passwords + allChars[char1];
        
        //console.log("after" + passwords);
  }


 /* if (lowerCaseBool) {
    var char3 = Math.floor(Math.random() * lows.length);
  passwords  = passwords + lows[char3];
  remainingChar = passwords - 1;
  } */
return (passwords);

}
  var passwordText = document.querySelector("#password");
  

  passwordText.value = password;

}


//TODO - generate else statement to insure console doesnt break
//TODO - Make sure one of every specified character is guaranteed to be included

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
