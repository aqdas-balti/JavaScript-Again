//1:Based on Conversion Method
//b. Number Conversion
// Number Conversion: Converts a value to a number.
//Explicit Conversion: 
//a. Using Number() function:
console.log("111111111111111111111");
let valStr = "Aqdas Ali";
// Actual Answers
console.log("Actual value is :",valStr);//true
console.log("Actual typeof value is :",typeof valStr);//boolean
console.log("*********************************************");
// After converted from value to string using function
console.log("Converted value is :",String(valStr));//true
console.log("Converted typeof value yo string is :",typeof String(valStr));//string
// Another method to convert any value to string using this method syntax
console.log("22222222222222222222222222");
let valStrToNo = Number(valStr);
console.log("Converted valToStr is :",valStrToNo);//true
console.log("Converted typeof valToStr is :",typeof valStrToNo);//string

// Using parseInt() or parseFloat() function:
console.log("333333333333333333333333333");
let str3 = "123.45abc"
// Actual Answers
console.log("Actual value of str3 is :",str3);//123abc
console.log("Actual typeof value of str3 is :",typeof str3);//string
console.log("*********************************************");
//After converted from string to int using function  [Using parseInt()] 
console.log("Converted value is :",parseInt(str3));//123
console.log("Converted typeof value yo string is :",typeof parseInt(str3));//number
//Another method to convert float using parseFloat():
console.log("Converted Str value into float is :",parseFloat(str3));//123.45
console.log("Converted typeof str3 to number is :",typeof parseFloat(str3));//number
// Another method to convert any string to number using Number() function using this method syntax
let strToNo1 = Number(str3);
console.log("Converted valToStr is :",strToNo1);//Nan (not a number)
// console.log("Converted typeof valToStr is :",typeof strToNo1);//number
console.log("\n");

// Implicit Conversion: During arithmetic operations:
let result = "5" * 2; // "5" is implicitly converted to 5
console.log(result); // 10
console.log(typeof result);//string
//After Converted into number
console.log(parseInt(result));//10
console.log(typeof parseInt(result));//number




