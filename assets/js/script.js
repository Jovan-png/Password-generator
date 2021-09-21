// Assignment code here



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
// Write password to the #password input
var charPrompts = function(){
    var sCasePrompt;
var uCase = "ABCDEFGHIJK";
var lCase = "abcdefghijk";
var specialChar = "!#$%&'*+-.";
var pNumbers = "1234567890"
var passwordLength ="";
var gPassword ="";
var finalPassword =""
    var passwordText = document.querySelector("#password");
    var uCasePrompt = window.prompt("Would you like the password to contain UPPERCASE? Type 'yes' or 'no'");
    if (uCasePrompt === "yes" || uCasePrompt === "YES") {
        gPassword = gPassword + uCase;
       
    } else {
        gPassword = gPassword;
    }
    var lCasePrompt = window.prompt("Would you like the password to contain LOWERCASE? Type 'yes' or 'no'.");
    if (lCasePrompt === "yes" || lCasePrompt === "YES") {
        gPassword = gPassword + lCase;
       
    } else {
        gPassword = gPassword
    }
    var sCasePrompt = window.prompt("Would you like the password to contain SPECIAL CHARACTERS? Type 'yes' or 'no'.");
    if (sCasePrompt === "yes" || sCasePrompt === "YES") {
        gPassword = gPassword + specialChar;
    } else {
        gPassword = gPassword;
    }
    var numbersPrompt = window.prompt("Would you like the password to contain NUMBERS? Type yes or no");
    if (numbersPrompt === "yes" || numbersPrompt === "YES") {
        gPassword = gPassword + pNumbers;
    } else {
        gPassword = gPassword;
    }
    var lengthPrompt = window.prompt("How long would you like the password? Please enter a number length. 8 or more!");
    if (lengthPrompt >= 8) {
        passwordLength = lengthPrompt
    } else {
        numberMis();
    }
    for (var i = 0; i < lengthPrompt;i++){
        var randomnum = Math.floor(Math.random()*gPassword.length);
        finalPassword += gPassword.substring(randomnum,randomnum+1);
        }
       document.getElementById("password").value = finalPassword;
};





//Second fuction if user selects a lower number than 8.
var generateBtn = document.querySelector("#generate");

var numberMis = function(){
    var sCasePrompt;
var uCase = "ABCDEFGHIJK";
var lCase = "abcdefghijk";
var specialChar = "!#$%&'*+-.";
var pNumbers = "1234567890"
var passwordLength ="";
var gPassword ="";
var finalPassword =""
window.alert("Whoops! You need to select 8 or more!")
    var passwordText = document.querySelector("#password");
    var uCasePrompt = window.prompt("Would you like the password to contain UPPERCASE? Type 'yes' or 'no'");
    if (uCasePrompt === "yes" || uCasePrompt === "YES") {
        gPassword = gPassword + uCase;
       
    } else {
        gPassword = gPassword;
    }
    var lCasePrompt = window.prompt("Would you like the password to contain LOWERCASE? Type 'yes' or 'no'.");
    if (lCasePrompt === "yes" || lCasePrompt === "YES") {
        gPassword = gPassword + lCase;
       
    } else {
        gPassword = gPassword
    }
    var sCasePrompt = window.prompt("Would you like the password to contain SPECIAL CHARACTERS? Type 'yes' or 'no'.");
    if (sCasePrompt === "yes" || sCasePrompt === "YES") {
        gPassword = gPassword + specialChar;
    } else {
        gPassword = gPassword;
    }
    var numbersPrompt = window.prompt("Would you like the password to contain NUMBERS? Type y for 'yes' and n for 'No'");
    if (numbersPrompt === "yes" || numbersPrompt === "YES") {
        gPassword = gPassword + pNumbers;
    } else {
        gPassword = gPassword;
    }
    var lengthPrompt = window.prompt("How long would you like the password? Please enter a number length. 8 or more!");
    if (lengthPrompt >= 8) {
        passwordLength = lengthPrompt
    } else {
        numberMis();
    }
    for (var i = 0; i < lengthPrompt;i++){
        var randomnum = Math.floor(Math.random()*gPassword.length);
        finalPassword += gPassword.substring(randomnum,randomnum+1);
        }
       document.getElementById("password").value = finalPassword;
};


// Add event listener to generate button
generateBtn.addEventListener("click", charPrompts);

