//Question 2 How does variable hoisting work in JavaScript? Provide an example.
//In JavaScript, hoisting means that variable and function declarations are moved to the top of their scope when the code runs.
//Here’s  how it works with var, let, const, and functions:

console.log(Var); // We can access Var before initialization but it will show 'undefined'
var Var = 5;
console.log(Var); // 5

//let and const case
// console.log(Let);// Error: Cannot access 'Let' before initialization
let Let = 10;
console.log(Let);//10 (Now here it will be accessible)

// console.log(Const); // We can access Const before initialization but it will show 'undefined'
const Const = 20;
console.log(Const);//20 (Now here it will be accessible)



