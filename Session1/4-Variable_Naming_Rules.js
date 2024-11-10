/*
When naming variables in JavaScript (and most programming languages), follow these rules and best practices:

1. Allowed Characters
Variable names can include letters (uppercase and lowercase), numbers, underscores (_), and dollar signs ($).
Cannot start with a number. They must start with a letter, underscore (_), or dollar sign ($).
*/

let myVariable = 10;  // Valid
let _name = "John";   // Valid
let $value = 5;       // Valid
// console.table([myVariable,_name,$value]);
console.log("Allowed Characters Scenario:",myVariable,_name,$value);


// let 1stName = "Jane"; // Invalid (cannot start with a number)

/*2. Case Sensitivity
JavaScript is case-sensitive, so myVariable, MyVariable, and myvariable would be three different variables.*/

let myVariable1 = 10;
let MyVariable1 = 20; // Different from myVariable
console.log("Case Sensitive Scenario:",myVariable1,MyVariable1);//10 and 20


/*3. Reserved Keywords
Avoid using JavaScript reserved keywords as variable names, such as let, class, return, function, etc.*/

// let return = 5; // Invalid, "return" is a reserved word

/*4. Use Descriptive Names
Choose meaningful names that describe the purpose of the variable for readability and maintainability.*/

let count = 10;       // Good it's descriptive (meaning full)
let c = 10;           // Not descriptive
console.log("Descriptive Names Scenario:",count,c);


/*5. Camel Case Convention
Use camelCase for naming variables, especially when the name has multiple words. This means the first word is lowercase, and subsequent words start with an uppercase letter.*/

let userName = "Aqdas-Ali";      // Good
let UserName = "Hammad-Shigri";      // Typically used for class names
let user_name = "Ali";     // Avoid unless consistent with project style
console.log("Camel Case Conversion Scenario:",userName,UserName,user_name);


/*6. Avoid Special Characters
Stick to letters, numbers, underscores, and dollar signs, as using special characters like -, &, @ is not allowed in JavaScript variable names.*/

// let user-name = "Alice";  // Invalid
console.log("let user-name = anything; Invalid");

/*
Summary
Start with a letter, underscore, or dollar sign.
No spaces or special characters (other than _ or $).
Case-sensitive.
Avoid reserved keywords.
Use camelCase for readability.*/