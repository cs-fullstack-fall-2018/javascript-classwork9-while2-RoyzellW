
// var userInput = prompt("Enter a name or q to quit: ");
// while (userInput != "q") {
//     var userInput = prompt("Enter q to quit: ");
// }

var password = "Cow";
var userInput = prompt("Enter password: ");
while (userInput != password) {
    var userInput = prompt("Please enter password: ");
    if (userInput == password) {
        alert("That's correct!")
    }
}