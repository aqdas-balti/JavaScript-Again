// let prompt = require('prompt-sync')();
// let name = prompt("Enter your name: ");
// console.log("Hello " + name);

let prompt = require('prompt-sync')();
console.log("Welcome to Calculator Program");
//By default our prompt-sync is string in this program I Convert it into number then it will generate result correctly otherwise it will give wrong result like it will concatenate two string
let num1 = Number(prompt("Enter first number: ")); //let num1 = prompt("Enter first number: ");
let num2 = Number(prompt("Enter second number: ")); //let num2 = prompt("Enter second number: ");
let operator = prompt("Enter operator: (+,-,*,/,%,^) ");
let result;
 if (operator === "+") {
    console.log("Your Entered No is :",num1, "+", num2);
    result = num1 + num2;
} else if (operator === "-") { 
    console.log("Your Entered No is :",num1, "-", num2);
    result = num1 - num2;
} else if (operator === "*") {
    console.log("Your Entered No is :",num1, "*", num2);
    result = num1 * num2;
} else if (operator === "/") {
    console.log("Your Entered No is :",num1, "/", num2);
    result = num1 / num2;
} else if (operator === "%") {
    console.log("Your Entered No is :",num1, "%", num2);
    result = num1 % num2;
} else if (operator === "^") {
    console.log("Your Entered No is :",num1, "^", num2);
    result = num1 ** num2;
}else {
    console.log("Invalid operator");
} 
console.log("Your Final Result After Calculation is :",result);

