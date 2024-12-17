//four types of variables
/*Automatically
Using var
Using let
Using const*/

//variables are containers for storing data
//in this first example, x, y, and z are undeclared variables
//they are automatically declared when first used
//Automatically declared variables
 x = 5;
 y = 6;  
 z = x + y;
console.log(z);

//usig var : var is a globally scoped variable
var x = 5;
var y = 6;
var z = x + y;
console.log(z);
if (true) {
    var x = 10;
    var y = 20;
    var z = x + y;
    console.log(z);//we can access x and y here in this block
}   
console.log(z);//we can access x and y outside the block because of globally scoped variable

//let and const are block scoped variables
// let x = 5;
// let y = 6;
// let z = x + y;
// console.log(z);
if (true) {
    let x1 = 20;
    let y1 = 30;
    let z1 = x1 + y1;
    console.log(z1);//we can access x and y here in this block
}   
// console.log(z1);//we can't access x and y outside the block because of block scoped variable it will get error

//const is used for variables whose values are intended to stay constant throughout the code execution
const language = "JavaScript";
console.log(language);
if (true) {
    const x2 = 20;
    const y2 = 30;
    const z2 = x2 + y2;
    console.log(z2);//we can access x and y here in this block
}   
// console.log(z2);//we can't access x and y outside the block because of block scoped variable it will get error
//summary:
//var is globally scoped, let and const are block scoped, const is used for constant values