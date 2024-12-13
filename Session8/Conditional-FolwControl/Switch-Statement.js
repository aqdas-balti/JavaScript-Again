/*
2. Conditional Statements
Conditional statements allow you to make decisions in your code based on conditions (true or false).

switch Statement
Explanation:*/

let day = 3;

switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    default:
        console.log("Invalid day");
}
/*It checks the value of day. If day = 3, it prints "Wednesday".
Explanation:

let day = 3;
Humne day ko 3 set kiya.

switch (day)
day ki value check karta hai.

case 1: console.log("Monday");
Agar day 1 ho to "Monday" print hoga.

case 3: console.log("Wednesday");
Agar day 3 ho to "Wednesday" print hoga.

default: console.log("Invalid day");
Agar koi case match nahi kare, to ye message print hoga.

*/

//Is ma user say input lain gye phir program ka condition ka hisaab say print ho gaye
// Readline module ko import karte hain jo console ke sath interact karne ke liye use hota hai
let readline = require('readline');
// Readline ka ek interface create karna jo console ke input aur output ke liye use hoga
let myInterface = readline.createInterface({// Input console se (keyboard se input lena)
    input: process.stdin,// Output console me (console pe message print karna)
    output: process.stdout  // Input aur output ka interface close karna  
});
// User se age (age ka input) lene ke liye console pe prompt display karte hain
myInterface.question("Input your day: ", function (day) { // User se input lene ka function
    switch (day) {
        case "Monday": // If user enters "Monday"
            console.log("It's a weekday. Time to work!"); // Log message for Monday
            break;
        case "Tuesday": // If user enters "Tuesday"
            console.log("It's a weekday. Time to work!"); // Log message for Tuesday
            break;
        case "Wednesday": // If user enters "Wednesday"
            console.log("It's a weekday. Time to work!"); // Log message for Wednesday
            break;
        case "Thursday": // If user enters "Thursday"
            console.log("It's a weekday. Time to work!"); // Log message for Thursday
            break;
        case "Friday": // If user enters "Friday"
            console.log("It's a weekday. Time to work!"); // Log message for Friday
            break;
        case "Saturday": // If user enters "Saturday"
            console.log("It's the weekend. Enjoy your time!"); // Log message for Saturday
            break;
        case "Sunday": // If user enters "Sunday"
            console.log("It's the weekend. Enjoy your time!"); // Log message for Sunday
            break;    
        default: // If user enters an invalid day
            console.log("Invalid day entered. Please try again."); // Log invalid input message
    }
  // Close the readline interface after processing the input
  myInterface.close();
});


//Is ma hm age ka input lain gye phir program ka condition ka hisaab say print ho gaye

let readline = require('readline');
let myInterface2 = readline.createInterface({
    input: process.stdin, // Input from the keyboard
    output: process.stdout // Output to the console
});
myInterface2.question("Enter your age: ", (age) => {
    switch (true) {
        case age >= 18:
            console.log("You are eligible to vote.");
            break;
        case age < 18:
            console.log("You are not eligible to vote.");
            break;
        default:    
            console.log("Invalid input. Please try again.");
    }    
    myInterface2.close();
})