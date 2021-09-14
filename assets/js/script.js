// Assignment code here



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
// Write password to the #password input
var charPrompts = function(){
    var sCasePrompt;
var uCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lCase = "abcdefghijklmnopqrstuvwxyz";
var specialChar = "!#$%&'*+-./;:=/";
var pNumbers = "123456789"
var passwordLength ="";
var gPassword ="";
    var passwordText = document.querySelector("#password");
    var uCasePrompt = window.prompt("Would you like the passowrd to contain UPPERCASE? Type y for 'yes' and n for 'No'");
    if (uCasePrompt === "y" || uCasePrompt === "Y") {
        gPassword = gPassword + uCase;
       
    } else {
        gPassword = gPassword;
    }
    var lCasePrompt = window.prompt("Would you like the passowrd to contain LOWERCASE? Type y for 'yes' and n for 'No'");
    if (lCasePrompt === "y" || lCasePrompt === "Y") {
        gPassword = gPassword + lCase;
       
    } else {
        gPassword = gPassword
    }
    var sCasePrompt = window.prompt("Would you like the passowrd to contain SPECIAL CHARACTERS? Type y for 'yes' and n for 'No'");
    if (sCasePrompt === "y" || sCasePrompt === "Y") {
        gPassword = gPassword + specialChar;
    } else {
        gPassword = gPassword;
    }
    var numbersPrompt = window.prompt("Would you like the passowrd to contain NUMBERS? Type y for 'yes' and n for 'No'");
    if (numbersPrompt === "y" || numbersPrompt === "Y") {
        gPassword = gPassword + pNumbers;
    } else {
        gPassword = gPassword;
    }
    var lengthPrompt = window.prompt("How long would you like the password? Please enter a number length.");
    if (lengthPrompt === lengthPrompt) {
        passwordLength = lengthPrompt
    } else {
        charPrompts
    }
    for (var i = 0; i < lengthPrompt;i++){
        var randomnum = Math.floor(Math.random()*gPassword.length);
        passwordText += gPassword.substring(randomnum,randomnum+1);
        }
        document.getElementById("password").value = passwordText;
};


// Add event listener to generate button
generateBtn.addEventListener("click", charPrompts);

