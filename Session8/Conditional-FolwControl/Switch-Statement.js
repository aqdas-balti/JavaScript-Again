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
myInterface.question("Enter your age: ", (age) => {
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
    myInterface.close();
})
/*keise kaam karte hain?
Jab aap rl.question() method chalate hain, terminal mein ek message show hota hai (e.g., "Apka naam kya hai?").
User input deta hai aur "Enter" press karta hai.
Callback function (jo () => {} ke andar hai) input ko handle karta hai.
Input ko aap process kar sakte hain (jaise console par dikhana ya kisi variable mein store karna).
Interface band karne ke liye rl.close() ka use hota hai.*/