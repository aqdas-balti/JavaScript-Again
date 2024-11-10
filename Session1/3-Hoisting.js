/*
In JavaScript, hoisting means that variable and function declarations are moved to the top of their scope when the code runs.
Here’s  how it works with var, let, const, and functions:
*/

/*
1. var
Variables declared with var are moved to the top of their scope and are set to undefined until they get a value.
You can use a var variable before declaring it, but it will show undefined until it’s actually assigned a value.
*/

console.log(myVar); // undefined
var myVar = 5;
console.log(myVar); // 5

/*
2. let and const
let and const are also moved to the top, but they are not initialized.
If you try to use them before the line where they are declared, you’ll get an error.
*/
// console.log(myLet); // Error: Cannot access 'myLet' before initialization
let myLet = 10;
console.log(myLet);//10 (Now here it will be accessible)

// console.log(myConst); // Error: Cannot access 'myConst' before initialization
const myConst = 20;
console.log(myConst);//20 (Now here it will be accessible)
/*

3. Functions
For function declarations (functions created with function), you can call the function before it’s declared because the whole function is hoisted to the top. */

myFunction(); // Output: "Hello!"

function myFunction() {
  console.log("Hello!");
}

console.log(addOne(5));//It will be accessible (6)
function addOne(num) {
    return num+1;
}

// console.log(addTwo(6));//Error: Cannot access 'addTwo' before initialization
let addTwo = function(num){
    return num+1;   
}
console.log(addTwo(6));//Here it will be accessible (7)

/*
Summary
var: Hoisted and set to undefined.
let and const: Hoisted but not usable until the line they’re declared on.
Functions: Can be used before their declaration. but function expression can't hoisted
*/