/*Truthiness and Falsiness in Boolean Contexts
1. Falsy Values
1. Falsy Values
These values are treated as false when evaluated in a boolean context (e.g., if, logical operations).

false
0 (zero)
-0 (negative zero)
"" (empty string)
null
undefined
NaN (Not-a-Number)
Examples: These are all falsy values it wont't run*/

if (false) console.log("This won't run");
if (0) console.log("This won't run");
if ("") console.log("This won't run");
if (null) console.log("This won't run");
if (undefined) console.log("This won't run");
if (NaN) console.log("This won't run");
console.log("The Above are all falsy values like string, boolean, object , undefined , and number");
console.log("**************FALSY ENDS HERE*****************");
/*2. Truthy Values
All other values are treated as true in boolean contexts, including:
Non-empty strings (e.g., "hello", "0", " ")
Numbers other than 0 and -0 (e.g., 42, -42, Infinity, -Infinity)
Objects (even empty ones, e.g., {}, [])
Functions
Symbol values
Examples:*/
if ("hello") console.log("This will run because of (Non-Empty String)"); // Non-empty string
if (42) console.log("This will run because of (Non-Zero Number)"); // Non-zero number
if ({}) console.log("This will run because of (Empty Object)"); // Empty object
if ([]) console.log("This will run because of (Empty Array)"); // Empty array
if (function () {}) console.log("This will run because of (Function)"); // Function
if (Symbol()) console.log("This will run because of (Symbol)"); // Symbol
console.log("**************TRUTHY ENDS HERE*****************");

//Evaluation in Different Contexts
/*1. String Context
When a value is evaluated in a string context (e.g., concatenation), JavaScript converts it to a string using toString() or String().
Examples:*/
console.log("Value: " + null); // "Value: null"
console.log(typeof null);//object
console.log("Value: " + undefined); // "Value: undefined"
console.log("Typeof undefined is :",typeof undefined);//undefined
console.log("Value: " + 0); // "Value: 0"
console.log("Typeof value 0 is :",typeof 0);//number
console.log("Value: " + {}); // "Value: [object Object]"
console.log("Typeof Empty Object is :",typeof {});//object
console.log("Value: " + []); // "Value: "
console.log("Typeof Empty Array is :",typeof []);//object
console.log("**************STRING CONTEXT ENDS HERE*****************");

/*2. Number Context
When a value is evaluated in a numeric context (e.g., arithmetic operations, Number()), JavaScript attempts to convert it to a number.
Examples:*/
console.log(+""); // 0 (empty string to number)
console.log(+null); // 0
console.log(+undefined); // NaN
console.log(+true); // 1
console.log(+false); // 0
console.log(+{}); // NaN
console.log(+[]); // 0 (empty array to number)
console.log(+[10]); // 10
console.log("**************NUMBER CONTEXT ENDS HERE*****************");

/*3. Object Context
When objects are evaluated, JavaScript converts them to a primitive value (string or number) using toString() or valueOf().
Examples: */
let obj = { key: 42 };
console.log(obj + ""); // "[object Object]"
console.log(typeof (obj+""));//string
console.log(obj.valueOf()); // { key: 42 }

let arr = [10];
console.log(arr + ""); // "10"
console.log(arr.valueOf()); // [10]
console.log("**************OBJECT CONTEXT ENDS HERE*****************");

/*4. Boolean Context
When evaluated in a boolean context, JavaScript converts values to true or false based on truthiness or falsiness.
Examples:*/

console.log(Boolean("")); // false
console.log(Boolean(0)); // false
console.log(Boolean(null)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean(NaN)); // false
console.log(Boolean([])); // true (empty array is truthy)
console.log(Boolean({})); // true (empty object is truthy)
console.log("**************BOOLEAN CONTEXT ENDS HERE*****************");

/*Combined Context Examples
1. Logical Operators
Logical operators (||, &&, !) work based on truthy and falsy values.
Examples:*/
console.log(null || "default"); // "default" (null is falsy)
console.log("value" || "default"); // "value" (truthy value is returned)
console.log(0 && "won't run"); // 0 (falsy stops evaluation)
console.log(1 && "will run"); // "will run" (truthy continues evaluation)
console.log("**************LOGICAL OPERATORS CONTEXT ENDS HERE*****************");

/*2. Comparisons
In comparisons, implicit type casting often occurs.
Examples:*/
console.log("10" == 10); // true ("10" is converted to 10)
console.log("10" === 10); // false (strict comparison)
console.log(null == undefined); // true (both are falsy)
console.log([] == ""); // true (empty array converts to empty string)
console.log([] == 0); // true (empty array converts to 0)
console.log("**************COMPARISONS CONTEXT ENDS HERE*****************");


/*3. Arithmetic Operations
Values are converted to numbers for arithmetic operations.
Examples:*/
console.log("10" - 2); // 8 ("10" is converted to 10)
console.log("10" + 2); // "102" (string concatenation)
console.log(true + 1); // 2 (true converts to 1)
console.log(false - 1); // -1 (false converts to 0)
console.log("**************ARITHMETIC OPERATORS CONTEXT ENDS HERE*****************");

/*
Table of Contextual Evaluations
Value	Boolean	String	Number	Object
false	false	"false"	0	Not applicable
true	true	"true"	1	Not applicable
0	false	"0"	0	Not applicable
"0"	true	"0"	0	Not applicable
null	false	"null"	0	Not applicable
undefined	false	"undefined"	NaN	Not applicable
[]	true	""	0	[]
[20]	true	"20"	20	[20]
NaN	false	"NaN"	NaN	Not applicable
{}	true	"[object Object]"	NaN	{}
console.log("**************ARITHMETIC OPERATORS CONTEXT ENDS HERE*****************");
*/