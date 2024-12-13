/*
Part 1: If-Else Challenge
Problem:
Write a JavaScript program that:
Prompts the user to input their age.
Based on the input, the program should determine and log the following:
If the age is less than 13, log: "You are a child."
If the age is between 13 and 19 (inclusive), log: "You are a teenager."
If the age is between 20 and 59 (inclusive), log: "You are an adult."
If the age is 60 or above, log: "You are a senior citizen."
If the input is not a valid number or less than 0, log: "Invalid age entered."
*/
// Step 1: Module Import karna
// Readline module ko import karte hain jo console ke sath interact karne ke liye use hota hai
let readline = require('readline');

// Step 2: Interface Create karna
// Readline ka ek interface create karna jo console ke input aur output ke liye use hoga
let myInterface = readline.createInterface({
    input: process.stdin, // Input console se (keyboard se input lena)
    output: process.stdout // Output console me (console pe message print karna)
});

// Step 3: Question Puchhna
// User se age (age ka input) lene ke liye console pe prompt display karte hain
myInterface.question("Input your age: ", function (age) { // User se input lene ka function
    // Step 4: Input ko handle karna
    // User ke input ko process karte hain aur conditions ke basis pe age group determine karte hain
    console.log(`Your Input is: ${age}`); // User ka input console pe print karte hain

    // Age ke hisaab se message dena
    if (age < 13) { // Agar user ki age 13 se chhoti ho
        console.log("You are a child."); // Output: You are a child
    } else if (age >= 13 && age <= 19) { // Agar age 13 se 19 ke beech ho
        console.log("You are a teenager."); // Output: You are a teenager
    } else if (age >= 20 && age <= 59) { // Agar age 20 se 59 ke beech ho
        console.log("You are an adult."); // Output: You are an adult
    } else if (age >= 60) { // Agar age 60 ya usse zyada ho
        console.log("You are a senior citizen."); // Output: You are a senior citizen
    } else {
        console.log("Invalid age entered."); // Agar input valid number na ho
    }
    // Step 5: Close karna
    // Input aur output ka interface close karna
    myInterface.close();
});
/*Kaise Kaam Karta Hai?
Jab aap rl.question() method chalate hain, terminal mein ek message show hota hai (e.g., "Apka naam kya hai?").
User input deta hai aur "Enter" press karta hai.
Callback function (jo () => {} ke andar hai) input ko handle karta hai.
Input ko aap process kar sakte hain (jaise console par dikhana ya kisi variable mein store karna).
Interface band karne ke liye rl.close() ka use hota hai.*/