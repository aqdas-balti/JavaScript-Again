/*
Type casting (also known as type conversion) is the process of converting a value from one data type to another.
In JavaScript, this can be done explicitly by using built-in functions or implicitly by JavaScript itself.
There are two types of type conversion
1: Explicit Type Casting
The programmer explicitly (itself) converts the type using JavaScript functions or methods.
Examples include using String(), Number(), or Boolean() etc.*/

//1:Based on Conversion Method
// 1. Implicit Type Casting (Type Coercion):  It performed Automatically by the programming language

console.log("444444444444444444");
//1.3) Comparisons implicitly:
let isEqual = "10"==10;//Implicitly converted 10 to "10"
console.log(isEqual);//true
console.log(typeof isEqual);//boolean

//2.Explicitly type casting: It Performed manually by the programmer using casting methods, functions, or operators.
//2.1) Convert String to Number:
console.log("555555555555555555");
let str = "Hello";
console.log("Actual Ans of str is :",str);//Hello
console.log("Actual Datatype of str is :",typeof str);//string
//After Conversing string into number check below:
let strToNo = Number(str);
console.log("After Converted strToNo value is :",strToNo);//NaN (not a number)
console.log("After converted typeof strToNo is :",typeof strToNo);//number

//2.2) Convert Number to String:
console.log("6666666666666666666");
let number = 24;
console.log("Actual Ans of No is :",number);//24
console.log("Actual Datatype of No is :",typeof number);//number
//After Conversing number into string check below:
let noToStr = String(number);
console.log("After Converted noToStr value is :",noToStr);//24
console.log("After converted typeof noToStr is :",typeof noToStr);//string









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


/********************************Operation Conversion********************************** */
console.log("02-Conversion Operations:");
let str1 = "Hello";
let str2 = "World!";
let strResult = str1 + str2;
console.log(strResult);
console.log(1 + 2 + "3"); //33 values will be react with the first data type in this first data type is no that's why firstly add two no's then concatinate the 3rd no
console.log(typeof (1 + 2 + "3")); //string
console.log("1" + 2 + 3); //123
console.log(typeof ("1" + 2 + 3)); //string
console.log(2 * 3 + (3 + 1) * 5); //26
console.log(true); //true
console.log(+true); //1 and (true+ isn't valid it simply generates error)
console.log(+""); //0 because "" is false in boolean that's why when increment it generates its original valus 0
console.log(+"Aqdas"); //NaN (Not a Number)
let num1, num2, num3;
num1 = num2 = num3 = 3 + 3;
console.log(num1); //6
let gameCounter = 99;
gameCounter++; //Postfix increment technique
console.log(gameCounter); //100
++gameCounter; //Prefix increment technique
console.log(gameCounter); //101
//Copied from internet of prefix and postfix
let x = 3;
const y = x++;

console.log("x:", x, "y:", y);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;

console.log("a:", a, "b:", b);
// Expected output: "a:4, b:4"


/*
### **Comparison of Explicit vs Implicit Type Casting**

| **Feature**            | **Explicit Casting**                    | **Implicit Casting**             |
|-------------------------|------------------------------------------|-----------------------------------|
| **Control**             | Full control over the conversion process | Automatically handled by the language |
| **Readability**         | More readable and predictable            | May lead to unexpected results   |
| **Performance**         | Slightly slower as it involves manual code | Faster as it's built into the runtime |
| **Common Use Cases**    | Data validation, user input sanitization  | Simplifying mixed-type operations |

*/