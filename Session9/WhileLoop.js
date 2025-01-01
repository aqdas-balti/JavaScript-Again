/*
2. while Loop
The while loop executes code as long as the condition is true. Use it when the number of iterations isn't known beforehand.

Example:*/

let a = 0;
while (i < 5) {
    console.log("Count:", a);
    a++;
}

/*
Explanation:

let i = 0;
Yahan loop start hota hai. i = 0 se shuru karega, jab tak i < 5 hai tab tak chalega, aur har baar i++ (1 increase) karega.
console.log("Count:", i);
Har iteration par i ki value print karega (0 se 4 tak).
*/

let name = "Aqdas";
let j = 0;
while (j < name.length) {
    console.log(name[j]);
    j++;
}
//In this example, the while loop iterates over the characters of the string "Aqdas" and prints each character.

let prompt2 = require('prompt-sync')();
console.log("While Loop");
let val = prompt2("Enter a number: ");
let i = 1;
while (i <= 5) {
    // console.log(val, "*", i, "=", val * i);
    i++;
}
//Explanation:
/*
let val = prompt2("Enter a number: ");
Yahan loop start hota hai. i = 1 se shuru karega, jab tak i <= 10 hai tab tak chalega, aur har baar i++ (1 increase) karega.
console.log(val, "*", i, "=", val * i);
Har iteration par i ki value print karega (1 se 10 tak).
*/

