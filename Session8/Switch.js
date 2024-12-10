/*
Part 2: Switch Challenge
Problem:
Write a JavaScript program that:
Prompts the user to enter a day of the week (e.g., "Monday", "Tuesday").
The program should log an appropriate message based on the day:
"Monday", "Tuesday", "Wednesday", "Thursday", "Friday": Log "It's a weekday. Time to work!"
"Saturday" or "Sunday": Log "It's the weekend. Enjoy your time!"
If the input is not a valid day of the week, log "Invalid day entered. Please try again."
*/
// Required module for taking user input from console
let readline = require('readline');

// Create an interface for input and output with the console
let myInterface = readline.createInterface({
    input: process.stdin, // Input from the keyboard
    output: process.stdout // Output to the console
});

// Ask the user to input a day of the week
myInterface.question("Enter a day of the week: ", (day) => { // Prompt user and wait for response
    // Use a switch statement to determine the input's value
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
