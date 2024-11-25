//3. Special Types of Casting
//a. Null and Undefined
//null converts to: 0 when cast to a number and "null" when cast to a string.
//undefined converts to: NaN when cast to a number and "undefined" when cast to a string.
console.log("1111111111111111111111111");
let Null = null;
console.log(Number("Value is :",Null)); // 0
//Another Method to convert into number method is same but the syntax will be change just check below
let anOtherSyntax1 = Number(Null);
console.log("Another Syntax to value is :",anOtherSyntax1);//0
console.log("Typeof another syntax method value is :",typeof anOtherSyntax1);//number
let undefine = undefined;
console.log(String("Value is :",undefine)); // "undefined"

//Another Method to convert into string method is same but the syntax will be change just check below
let anOtherSyntax2 = String(undefine);
console.log("Another Syntax to value is :",anOtherSyntax2);//undefined
console.log("Typeof another syntax method value is :",typeof anOtherSyntax2);//string

//b. Symbol to String
//Symbols can be explicitly converted to strings but not implicitly.
//Explicit Conversion:
console.log("22222222222222222222222");
let sym1 = Symbol("description");
console.log(String(sym1)); // "Symbol(description)"
console.log("Actual typeof sym1 is :",typeof sym1);//symbol

//Implicit Conversion: It declares error because not converted into string
let sym2 = Symbol("test");
// console.log("Symbol: " + sym2); // Error: Cannot convert a Symbol value to a string

//Null datatype conversing into number, string, and boolean stars from here:
console.log("3333333333333333333333");
let nullCon = null;
//Actual Answers are:
console.log("Actual Ans is:", nullCon); //null
console.log("Actual typeof (null) is:", typeof nullCon); //object
//After null Converted null into number check below:
let nullToNumber = Number(nullCon);//Number conversion method syntax
console.log("Converted value is:", nullToNumber); //0
console.log("This is Converted (null) typeof into (number) is :", typeof nullToNumber); //number
//After converted null into string check below
console.log("44444444444444444444444");
let nullToString = String(nullCon); //Converted to number
console.log("Converted value is:", nullToString); //null
console.log("This is Converted (null) typeof into (string) is :", typeof nullToString); //string
//After converted null into boolean check below
console.log("5555555555555555555555");
let nullToBool=Boolean(nullCon);
console.log("Converted value is:",nullToBool);//false
console.log("This is Converted (null) typeof into (boolean) is :",typeof nullToBool);//boolean

//Undefined data type is object in actual converting it into string, number,and boolean
console.log("6666666666666666666666666");
let undefineVal = undefined;
//Actual Answers are:
console.log("Actual Ans is:", undefineVal); //undefined
console.log("Actual typeof (undefined) is :", typeof undefineVal); //undefined

//Converting undefined into number:
let undefinedToNumber = Number(undefineVal); //Converted to number
console.log("Converted value is:", undefinedToNumber); //NaN (not s number)
console.log("This is Converted value of (undefined) typeof into (number) is :", typeof undefinedToNumber); //number

//Converting undefined into string:
console.log("7777777777777777777777777");
let undefinedToStr= String(undefineVal);
console.log("Converted value is:",undefinedToStr);//undefined
console.log("This is Converted value of (undefined) typeof into (string) is :", typeof undefinedToStr); //string

//converting undefined into boolean:
console.log("8888888888888888888888888");
let undefinedToBoolean = Boolean(undefineVal);
console.log("Converted value is:",undefinedToBoolean);//false
console.log("This is Converted value of (undefined) typeof into (boolean) is :", typeof undefinedToBoolean);//boolean
