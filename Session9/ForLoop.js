/*
1. for Loop
The for loop repeats a block of code a specific number of times. It has three parts:

Initialization: Set the starting value (e.g., let i = 0).
Condition: Check if the loop should continue (e.g., i < 5).
Increment/Decrement: Update the value after each iteration (e.g., i++).
Example:*/

for (let i = 0; i < 5; i++) {
    console.log("Count:", i);
}

/*
Explanation:

for (let i = 0; i < 5; i++) {
Yahan loop start hota hai. i = 0 se shuru karega, jab tak i < 5 hai tab tak chalega, aur har baar i++ (1 increase) karega.

console.log("Count:", i);
Har iteration par i ki value print karega (0 se 4 tak).
*/
let name = "Aqdas";
for (let i = 0; i < name.length; i++) {
    console.log(name[i]);
}


//In this example, the for loop iterates over the characters of the string "Aqdas" and prints each character.
