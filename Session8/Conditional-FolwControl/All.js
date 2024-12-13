/*
2. Conditional Statements
Conditional statements allow you to make decisions in your code based on conditions (true or false).

if-else Statement
English Explanation:

javascript
Copy code
let num = 10;

if (num % 2 === 0) {
    console.log("Even number");
} else {
    console.log("Odd number");
}
If the number is divisible by 2 (num % 2 === 0), it prints "Even number". Otherwise, it prints "Odd number".
Roman Urdu Explanation:

let num = 10;
Ek variable num banaya aur usme 10 rakha.

if (num % 2 === 0)
Condition check karti hai agar num 2 se divide hota hai to.

console.log("Even number");
Agar condition true hai, "Even number" print karega.

else
Agar condition false ho, else ka code chalega.

console.log("Odd number");
"Odd number" print karega agar number divide nahi hota.

switch Statement
English Explanation:

javascript
Copy code
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
It checks the value of day. If day = 3, it prints "Wednesday".
Roman Urdu Explanation:

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