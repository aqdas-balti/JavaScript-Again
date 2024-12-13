/*2. Conditional Statements
Conditional statements allow you to make decisions in your code based on conditions (true or false).
if-else Statement*/
let num = 10;

if (num % 2 === 0) {
    console.log("Even number");
} else {
    console.log("Odd number");
}
/*
If the number is divisible by 2 (num % 2 === 0), it prints "Even number". Otherwise, it prints "Odd number".
Explanation:

let num = 10;
Ek variable num banaya aur usme 10 rakha.

if (num % 2 === 0)
Condition check karti hai agar num 2 se divide hota hai to.

console.log("Even number");
Agar condition true hai, "Even number" print karega.

else
Agar condition false ho, else ka code chalega.

console.log("Odd number");
"Odd number" print karega agar number divide nahi hota.*/

//Is ma user say input lain gye phir program ka condition ka hisaab say print ho gaye
// Input from the user
let readline = require('readline');
// Create an interface for input and output
let myInterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
// Ask the user to input a number
myInterface.question("Enter a number: ", function (num) {// User se input lene ka function
    if (num % 2 === 0) {// Condition
        console.log("Even number");// Output
    } else {
        console.log("Odd number"); //Output   
    }
    myInterface.close();// Input aur output ka interface close karna
});