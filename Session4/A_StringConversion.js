//1:Based on Conversion Method
// 1. Implicit Type Casting (Type Coercion):  It performed Automatically by the programming language
//1.1) String Concatenation with Number:
let strConcatenation = "Aqdas"+999;
console.log("111111111111111111111");
console.log(strConcatenation);//Implicitly converts 999 to "999"
console.log(typeof strConcatenation);//string
console.log("222222222222222222222");
let numConcatenation = 222+"Ali";
console.log(numConcatenation);//222Ali
console.log(typeof numConcatenation);//string
//1.2) Boolean in Arithmetic:
console.log("3333333333333333333333");
let boolInAri = true+998;
console.log(boolInAri);//true is implicitly converted to 1000
console.log(typeof boolInAri);//boolean
console.log("4444444444444444444444");
//1.3) Comparisons implicitly:
let isEqual = "10"==10;//Implicitly converted 10 to "10"
console.log(isEqual);//true
// console.log(typeof isEqual);//boolean

//2:Based on Data Types
//a. String Conversion: Converts a value to a string.
//Explicit Conversion: Using String() function:
console.log("5555555555555555555555");
let value1 = true;
// Actual Answers
console.log("Actual value is :",value1);//true
console.log("Actual typeof value is :",typeof value1);//boolean
console.log("*********************************************");
//After converted from value to string using function
console.log("Converted value is :",String(value1));//true
console.log("Converted typeof value yo string is :",typeof String(value1));//string
//Another method to convert any value to string using this method syntax
let valToStr = String(value1);
console.log("Converted valToStr is :",valToStr);//true
console.log("Converted typeof valToStr is :",typeof valToStr);//string

//b. Using .toString() method:
console.log("6666666666666666666666");
let value2 = 122;
//Actual Answers
console.log("Actual value is :",value2);//122
console.log("Actual typeof value is :",typeof value2);//number
console.log("*********************************************");
// After converted from value to string using function
console.log("Converted value is :",value2.toString());//122
console.log("Converted typeof value yo string is :",typeof value1.toString());//string
//Another method to convert any value to string using this method syntax
let valToStr2 = String(value2);
console.log("Converted valToStr2 is :",valToStr2);//122
console.log("Converted typeof valToStr2 is :",typeof valToStr2);//string
console.log("77777777777777777777777");

//Implicit Conversion: 
//a. During concatenation with strings:
let result = "Aqdas's Age is :" + 24;
console.log("Implicitly Converted above into string :",result);//Aqdas's Age is : 24
console.log("Implicitly typeof converted result into string :",typeof result);//string
console.log("\n");

// Converting Numbers to Strings
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