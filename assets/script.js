// Assignment code here
var toUpper = function(x) {  // found this code snippet, gonna try to use. confusing but it works" probably wont remember it.
  return x.toUpperCase();
};


 var specialChars = ["!", "#", "$", "%", "&", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?"];
 var numericChars = ["1", "2", "3", "4", "5", "6", "7","8","9"];
 var lowerCaseChars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s","t","u","v","w","x","y","z" ];
 var upperCaseChars = lowerCaseChars.map(toUpper); 
  console.log(upperCaseChars);
  
  
  var randomNumber = function(min, max) {
    var value = Math.floor(Math.random() * (max - min + 1) + min); // randomize // need to make a var look like this inorder to use: var random = randomNumber(0, (lowerCaseChars.length - 1));
  
    return value;
  };

 function generatePassword() {
  var password = "";
  var passwordLength = parseInt(prompt("Choose a length of at least 8 characters and no more than 128 characters."));
  
  while(!passwordLength || passwordLength < 8 || passwordLength > 128) {
    alert("Please choose a valid number between 8 and 128");
    passwordLength = parseInt(prompt("Choose a length of at least 8 characters and no more than 128 characters."));
    console.log(passwordLength);//output of wrong answer
  }
  console.log(passwordLength);

  var includeLowerCase = confirm("Do you want to include lowercase charaters in your password?");
  var includeUpperCase = confirm("Do you want to include uppercase charaters in your password");
  var includeNumeric = confirm("Do you want to include numeric charaters in your password");
  var includeSpecial = confirm("Do you want to include special charaters in your password");
  console.log(includeLowerCase);
  console.log(includeUpperCase);
  console.log(includeNumeric);
  console.log(includeSpecial);

  while(!includeLowerCase && !includeUpperCase && !includeNumeric && !includeSpecial){
    alert("Please choose at least one option");
    includeLowerCase = confirm("Do you want to include lowercase charaters in your password?");
    includeUpperCase = confirm("Do you want to include uppercase charaters in your password");
    includeNumeric = confirm("Do you want to include numeric charaters in your password");
    includeSpecial = confirm("Do you want to include special charaters in your password");
    console.log(includeLowerCase);
    console.log(includeUpperCase);
    console.log(includeNumeric);
    console.log(includeSpecial);
  }

  for(i = 0; i < passwordLength; i++ ) {

    if(includeLowerCase === true){
      var random = randomNumber(0, (lowerCaseChars.length - 1));
      var char = lowerCaseChars[random];
      password = password += char;
      if(password.length === passwordLength) {
        break;
      }
    }
    
    if(includeUpperCase === true) {
      var random = randomNumber(0, (upperCaseChars.length - 1));
      var char = upperCaseChars[random];
      password = password += char;
      if(password.length === passwordLength) {
        break;
      }
    }
    
    if(includeNumeric === true) {
      var random = randomNumber(0, (numericChars.length - 1));
      var char = numericChars[random];
      password = password += char;
      if(password.length === passwordLength) {
        break;
      }
    }
    
    if(includeSpecial === true) {
      var random = randomNumber(0, (specialChars.length - 1))
      var char = specialChars[random];
      password = password += char;
      if(password.length === passwordLength) {
        break;
      }
    }
    
  };


  return password;
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
