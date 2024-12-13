/*2. Conditional Statements
Conditional statements allow you to make decisions in your code based on conditions (true or false).

if Statement*/
let age = 18;

if (age >= 18) {
    console.log("You are eligible to vote.");
}
/*If the condition age >= 18 is true, it will print "You are eligible to vote."
Roman Urdu Explanation:

let age = 18;
Humne ek variable banaya age jisme 18 rakha.

if (age >= 18)
Yahan check hota hai ke age 18 ya usse zyada hai.

console.log("You are eligible to vote.");
Agar condition true hai, to ye message screen par print hoga: "You are eligible to vote."*/

//Is ma user say input lain gye phir program ka condition ka hisaab say print ho gaye
// Readline module ko import karte hain jo console ke sath interact karne ke liye use hota hai
let readline = require('readline');
// Readline ka ek interface create karna jo console ke input aur output ke liye use hoga
let myInterface = readline.createInterface({// Input console se (keyboard se input lena)
    input: process.stdin,// Output console me (console pe message print karna)
    output: process.stdout  // Input aur output ka interface close karna  
});
// User se age (age ka input) lene ke liye console pe prompt display karte hain
myInterface.question("Input your age: ", function (age) {// User se input lene ka function
    console.log(`Your Input is: ${age}`);// User ka input console pe print karte hain
    // Age ke hisaab se message dena
    if (age >= 18) {   // Agar age 18 ya usse zyada ho 
        console.log("You are eligible to vote.");// Output: You are eligible to vote.
    } else {// Agar age 18 se chhoti ho
        console.log("You are not eligible to vote.");// Output: You are not eligible to vote.
    }
    myInterface.close();// Input aur output ka interface close karna
});
/*Kaise Kaam Karta Hai?
Jab aap rl.question() method chalate hain, terminal mein ek message show hota hai (e.g., "Apka naam kya hai?").
User input deta hai aur "Enter" press karta hai.
Callback function (jo () => {} ke andar hai) input ko handle karta hai.
Input ko aap process kar sakte hain (jaise console par dikhana ya kisi variable mein store karna).
Interface band karne ke liye rl.close() ka use hota hai.*/