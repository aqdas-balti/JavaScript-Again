/*
3. do...while Loop
The do...while loop runs at least once, even if the condition is false, because the check happens after execution.

Example:*/

let i = 0;
do {
    console.log("Count:", i);
    i++;
} while (i < 5);

//explanation:
/*
let i = 0;
Yahan loop start hota hai. i = 0 se shuru karega, jab tak i < 5 hai tab tak chalega, aur har baar i++ (1 increase) karega.
console.log("Count:", i);
Har iteration par i ki value print karega (0 se 4 tak).
*/
let name = "Aqdas";
let j = 0;
do {
    console.log(name[j]);
    j++;
} while (j < name.length);
//In this example, the do...while loop iterates over the characters of the string "Aqdas" and prints each character.