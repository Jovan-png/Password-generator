// Assignment code here



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
// Write password to the #password input
var charPrompts = function(){
    var sCasePrompt;
var uCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lCase = "abcdefghijklmnopqrstuvwxyz";
var specialChar = "!#$%&'*+-./;:=/";
var pNumbers = "1234567890"
var passwordLength ="";
var gPassword ="";
var finalPassword =""
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
    var lengthPrompt = window.prompt("How long would you like the password? Please enter a number length. Preferably 8 or more!");
    if (lengthPrompt >= 8) {
        passwordLength = lengthPrompt
    } else {
        numberMis();
    }
    for (var i = 0; i < lengthPrompt;i++){
        var randomnum = Math.floor(Math.random()*gPassword.length);
        finalPassword += gPassword.substring(randomnum,randomnum+1);
        }
       document.getElementById("password").value = finalPassword ;
       window.alert("Enjoy Your New Password!")
};





var numberMis = function(){
    var sCasePrompt;
var uCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lCase = "abcdefghijklmnopqrstuvwxyz";
var specialChar = "!#$%&'*+-./;:=/";
var pNumbers = "1234567890"
var passwordLength ="";
var gPassword ="";
var finalPassword =""
    var passwordText = document.querySelector("#password");
    window.alert("Whoops looks like that number is too low try picking a bigger number!")
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
    var lengthPrompt = window.prompt("How long would you like the password? Please enter a number length. Preferably 8 or more!");
    if (lengthPrompt >= 8) {
        passwordLength = lengthPrompt
    } else {
        numberMis();
    }
    for (var i = 0; i < lengthPrompt;i++){
        var randomnum = Math.floor(Math.random()*gPassword.length);
        finalPassword += gPassword.substring(randomnum,randomnum+1);
        }
       document.getElementById("password").value = finalPassword ;
       window.alert("Enjoy Your New Password!")
};


// Add event listener to generate button
generateBtn.addEventListener("click", charPrompts);

