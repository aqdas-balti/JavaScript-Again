/*1:Using var
 Type this in the console:
Since var is function-scoped, it will be accessible within the function or globally if defined outside a function:*/

var name = "Aqdas";
console.log(name); // Output: "Aqdas"
// Try reassigning name:
name = "Ali";
console.log(name); // Output: "Ali"
if (true) {
    var message = "Hello!";
  }
console.log(message); // Output: "Hello!" (even though it was declared inside the block)

/*2: Using let
     Now, let’s see how let behaves:
Since let is block-scoped, it will not be accessible outside the block it’s declared in*/

let age = 22;
console.log("let Variable:",age); // Output: 22

// You can reassign a variable declared with let:
age = 26;
console.log("let Variable",age); // Output: 26

if (true) {
  let greeting = "Hello World!";
  console.log(greeting); // Output: "Hello World!"
}
//Note Please:
// console.log(greeting); // Output: ReferenceError: greeting is not defined 

/*3:Using const
  Finally, const is for declaring variables whose values cannot be reassigned: */

const birthYear = 2003;
console.log(birthYear); // Output: 2003
// If you try to reassign a const variable, you’ll get an error:

//Note Please:
// birthYear = 2005; // Output: TypeError: Assignment to constant variable.
// Like let, const is also block-scoped:

if (true) {
  const language = "JavaScript";
  console.log(language); // Output: "JavaScript"
}
//Note Please:
// console.log(language); // Output: ReferenceError: language is not defined

/*
Recap in the Console
Use var for function-scoped variables (generally avoided in modern code).
Use let for block-scoped variables that may change.
Use const for block-scoped constants that won’t change. */