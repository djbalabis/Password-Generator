// Assignment code here
function generatePassword() {
  var special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "~", "\\", "`", "|", "}", "{", "[", "]", ":", ";", "?", ">", "<", ",", ".", "/", "-", "="];
  var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var characters = [];

  numberOfCharacters = prompt("How many characters would you like your password to contain?");
  if (numberOfCharacters < 8 || numberOfCharacters > 128) {
    return "Please choose a number from 8-128 characters.";
  } else if (isNaN(numberOfCharacters)) {
    numberOfCharacters = prompt("Please enter a valid number only.");
  }

  hasSpecial = confirm("Do you want to include special characters?");
  hasNumbers = confirm("Do you want to use numbers?");
  hasLowercase = confirm("Do you want to include lowercase characters?");
  hasUppercase = confirm("Do you want to include uppercase characters?");

  if (hasSpecial === false && hasNumbers === false && hasLowercase === false && hasUppercase === false) {
    return "Please select at least one character type.";
  }

  if (hasSpecial) {
    characters = characters.concat(special);
  }
  if (hasNumbers) {
    characters = characters.concat(number);
  }
  if (hasLowercase) {
    characters = characters.concat(lowerCase);
  }
  if (hasUppercase) {
    characters = characters.concat(upperCase);
  }

  let finalPassword = ""
  for (let i = 0; i < numberOfCharacters; i++) {
    let range =[Math.floor(Math.random() * characters.length)];
    finalPassword = finalPassword + characters[range];
  }
  return finalPassword;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
