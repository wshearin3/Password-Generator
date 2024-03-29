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

  //ensuring function doesnt break if an invalid number is entered
  if (muchInt>128 || muchInt<8 ) {
    return("Please input a value between 8 and 128.")
  } else {
    
let passwords = "";

//If statements to ensure character types are included based on user input
if (numericBool) {
  var char2 = Math.floor(Math.random() * nums.length);
passwords  = passwords + nums[char2];
passwordLength = muchInt - 1;
}

if (lowerCaseBool) {
  var char3 = Math.floor(Math.random() * nums.length);
passwords  = passwords + lows[char3];
passwordLength = passwordLength - 1;
}

if (upperCaseBool) {
  var char4 = Math.floor(Math.random() * caps.length);
passwords  = passwords + caps[char4];
passwordLength = passwordLength - 1;
}

if (specialCharactersBool) {
  var char5 = Math.floor(Math.random() * spec.length);
passwords  = passwords + spec[char5];
passwordLength = passwordLength - 1;
}

if (numericBool && lowerCaseBool && upperCaseBool && specialCharactersBool) {
  for (let i = 0; i < passwordLength; i++) {
    
    var char1 = Math.floor(Math.random() * allChars.length);
    passwords  = passwords + allChars[char1];
  }
} else if (!numericBool && lowerCaseBool && upperCaseBool && specialCharactersBool){
  for (let i = 0; i < passwordLength; i++) {
    
    var char6 = Math.floor(Math.random() * noNums.length);
    passwords  = passwords + noNums[char6];
  }
} else if (numericBool && !lowerCaseBool && upperCaseBool && specialCharactersBool){
  for (let i = 0; i < passwordLength; i++) {
    
    var char7 = Math.floor(Math.random() * noLows.length);
    passwords  = passwords + noLows[char7];
  }
} else if (numericBool && lowerCaseBool && !upperCaseBool && specialCharactersBool){
  for (let i = 0; i < passwordLength; i++) {
    
    var char8 = Math.floor(Math.random() * noUps.length);
    passwords  = passwords + noUps[char8];
  }
} else if (numericBool && lowerCaseBool && upperCaseBool && !specialCharactersBool){
  for (let i = 0; i < passwordLength; i++) {
    
    var char9 = Math.floor(Math.random() * noSpec.length);
    passwords  = passwords + noSpec[char9];
  }
} else if (!numericBool && lowerCaseBool && !upperCaseBool && specialCharactersBool){
  for (let i = 0; i < passwordLength; i++) {
    
    var char10 = Math.floor(Math.random() * noUpsNoNums.length);
    passwords  = passwords + noUpsNoNums[char10];
  }
} else if (numericBool && !lowerCaseBool && !upperCaseBool && specialCharactersBool){
  for (let i = 0; i < passwordLength; i++) {
    
    var char11 = Math.floor(Math.random() * noUpsNoLows.length);
    passwords  = passwords + noUpsNoLows[char11];
  }
} else if (numericBool && lowerCaseBool && !upperCaseBool && !specialCharactersBool){
  for (let i = 0; i < passwordLength; i++) {
    
    var char12 = Math.floor(Math.random() * noUpsNoSpec.length);
    passwords  = passwords + noUpsNoSpec[char12];
  }
} else if (numericBool && !lowerCaseBool && upperCaseBool && !specialCharactersBool){
  for (let i = 0; i < passwordLength; i++) {
    
    var char13 = Math.floor(Math.random() * noLowsNoSpec.length);
    passwords  = passwords + noLowsNoSpec[char13];
  }
} else if (!numericBool && !lowerCaseBool && upperCaseBool && specialCharactersBool){
  for (let i = 0; i < passwordLength; i++) {
    
    var char14 = Math.floor(Math.random() * noLowsNoNums.length);
    passwords  = passwords + noLowsNoNums[char14];
  }
} else if (!numericBool && lowerCaseBool && upperCaseBool && !specialCharactersBool){
  for (let i = 0; i < passwordLength; i++) {
    
    var char15 = Math.floor(Math.random() * noNumsNoSpec.length);
    passwords  = passwords + noNumsNoSpec[char15];
  }
} else if (!numericBool && !lowerCaseBool && !upperCaseBool && specialCharactersBool){
  for (let i = 0; i < passwordLength; i++) {
    
    var char16 = Math.floor(Math.random() * spec.length);
    passwords  = passwords + spec[char16];
  }
} else if (!numericBool && !lowerCaseBool && upperCaseBool && !specialCharactersBool){
  for (let i = 0; i < passwordLength; i++) {
    
    var char17 = Math.floor(Math.random() * caps.length);
    passwords  = passwords + caps[char17];
  }
} else if (!numericBool && lowerCaseBool && !upperCaseBool && !specialCharactersBool){
  for (let i = 0; i < passwordLength; i++) {
    
    var char18 = Math.floor(Math.random() * lows.length);
    passwords  = passwords + lows[char18];
  }
} else if (numericBool && !lowerCaseBool && !upperCaseBool && !specialCharactersBool){
  for (let i = 0; i < passwordLength; i++) {
    
    var char19 = Math.floor(Math.random() * nums.length);
    passwords  = passwords + nums[char19];
  }
} else if (!numericBool && !lowerCaseBool && !upperCaseBool && !specialCharactersBool){
  passwords = "Please type Yes for at least one value type"
} 
  /*for (let i = 0; i < passwordLength; i++) {
    
    var char1 = Math.floor(Math.random() * allChars.length);
    passwords  = passwords + allChars[char1];
        
  } */


return (passwords);

}
}
  var passwordText = document.querySelector("#password");
  

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
