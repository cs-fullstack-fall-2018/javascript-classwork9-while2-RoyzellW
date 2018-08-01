
// KEY: ALWAYS ADD AT LEAST A BASIC COMMENT ABOUT WHAT THIS IS DOING

// var userInput = prompt("Enter a name or q to quit: ");
// while (userInput != "q") {
//     var userInput = prompt("Enter q to quit: ");
// }

// KEY: ALWAYS ADD AT LEAST A BASIC COMMENT ABOUT WHAT THIS IS DOING
var password = "Cow";
var userInput = prompt("Enter password: ");
while (userInput !== password) {
    var userInput = prompt("Please enter password: ");
    if (userInput === password) {
        alert("That's correct!")
    }
}

/*

	KEY: This looks good, but where are your comments?!

	Also, get in the habit of using '===' to test for equality and '!==' to test for inequality.

*/