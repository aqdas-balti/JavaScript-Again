/*
Type casting (also known as type conversion) is the process of converting a value from one data type to another.
In JavaScript, this can be done explicitly by using built-in functions or implicitly by JavaScript itself.
There are two types of type conversion
1: Explicit Type Casting
The programmer explicitly (itself) converts the type using JavaScript functions or methods.
Examples include using String(), Number(), or Boolean() etc.*/

//Based on Conversion Method
// 1. Implicit Type Casting (Type Coercion)





//Converting Numbers to Strings
console.log("******************0001********************");
//Number datatype conversing into string starts from here:
let score = 60;
//Actual Answers are:
console.log("Actual Ans is:", score); //60
console.log("Actual typeof (60) is:", typeof score); //number
console.log("This is the actual typeof with another way of writing:",typeof (score)); //number

//After converted number into string check below:
let convertIntoString = String(score);//String conversion method syntax
console.log("Converted value is:",convertIntoString);
console.log("This is converted (number) typeof into (string) is :", typeof convertIntoString); //Converted into (string)

console.log("******************0002********************");
//Boolean Datatype conversing into number, and string starts from here:
console.log("\n");
let isLogedIn = true;
// Actual Answers are: 
console.log("Actual Ans is:", isLogedIn);//true
console.log("Actual typeof (true) is:", typeof isLogedIn);//boolean

//After converted boolean into number check below:
let boolNumber = Number(isLogedIn); //Number conversion method syntax
console.log("Converted value is:", isLogedIn);//Boolean converted into number 1 for true(1)and false(0)
console.log("This is Converted (boolean) typeof into (number is :", typeof isLogedIn);//number

//After boolean converted into string check below:
let boolToStr= String(isLogedIn)//String conversion method syntax
console.log("Converted value is:",boolToStr);//true
console.log("This is Converted (boolean) typeof into (string) is :",typeof boolToStr);//string

console.log("******************0003********************");
//Null datatype conversing into number, string, and boolean stars from here:
console.log("\n");
let nullCon = null;
//Actual Answers are:
console.log("Actual Ans is:", nullCon); //null
console.log("Actual typeof (null) is:", typeof nullCon); //object

//After null Converted null into number:
let nullToNumber = Number(nullCon);//Number conversion method syntax
console.log("Converted value is:", nullToNumber); //0
console.log("This is Converted (null) typeof into (number) is :", typeof nullToNumber); //number

//After converted null into string check below
console.log("\n");
let nullToString = String(nullCon); //Converted to number
console.log("Converted value is:", nullToString); //null
console.log("This is Converted (null) typeof into (string) is :", typeof nullToString); //string

//After converted null into boolean check below
let nullToBool=Boolean(nullCon);
console.log("Converted value is:",nullToBool);//false
console.log("This is Converted (null) typeof into (boolean) is :",typeof nullToBool);//boolean


//Undefined data type is object in actual converting it into string, number,and boolean
console.log("\n");
console.log("******************0004********************");
let undefineVal = undefined;
//Actual Answers are:
console.log("Actual Ans is:", undefineVal); //undefined
console.log("Actual typeof (undefined) is :", typeof undefineVal); //undefined

//Converting undefined into number:
console.log("\n");
let undefinedToNumber = Number(undefineVal); //Converted to number
console.log("Converted value is:", undefinedToNumber); //NaN (not s number)
console.log("This is Converted value of (undefined) typeof into (number) is :", typeof undefinedToNumber); //number

//Converting undefined into string:
console.log("\n");
let undefinedToStr= String(undefineVal);
console.log("Converted value is:",undefinedToStr);//undefined
console.log("This is Converted value of (undefined) typeof into (string) is :", typeof undefinedToStr); //string

//converting undefined into boolean:
console.log("\n");
let undefinedToBoolean = Boolean(undefineVal);
console.log("Converted value is:",undefinedToBoolean);//false
console.log("This is Converted value of (undefined) typeof into (boolean) is :", typeof undefinedToBoolean);//boolean


// /********************************Operation Conversion********************************** */
// console.log("02-Conversion Operations:");
// let str1 = "Hello";
// let str2 = "World!";
// let str = str1 + str2;
// console.log(str);
// console.log(1 + 2 + "3"); //33 values will be react with the first data type in this first data type is no that's why firstly add two no's then concatinate the 3rd no
// console.log(typeof (1 + 2 + "3")); //string
// console.log("1" + 2 + 3); //123
// console.log(typeof ("1" + 2 + 3)); //string
// console.log(2 * 3 + (3 + 1) * 5); //26
// console.log(true); //true
// console.log(+true); //1 and (true+ isn't valid it simply generates error)
// console.log(+""); //0 because "" is false in boolean that's why when increment it generates its original valus 0
// console.log(+"Aqdas"); //NaN (Not a Number)
// let num1, num2, num3;
// num1 = num2 = num3 = 3 + 3;
// console.log(num1); //6
// let gameCounter = 99;
// gameCounter++; //Postfix increment technique
// console.log(gameCounter); //100
// ++gameCounter; //Prefix increment technique
// console.log(gameCounter); //101
// //Copied from internet of prefix and postfix
// let x = 3;
// const y = x++;

// console.log("x:", x, "y:", y);
// // Expected output: "x:4, y:3"

// let a = 3;
// const b = ++a;

// console.log("a:", a, "b:", b);
// // Expected output: "a:4, b:4"
