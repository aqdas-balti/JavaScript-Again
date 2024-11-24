// Boolean Conversion : Converts a value to true or false.
// Explicit Conversion: Using Boolean() function:
let value = 0;
console.log("Actual value Ans is :",value);//0
console.log("Actual typeof value is :",typeof value);//number
//After Converted into Boolean using different methods
console.log("Converted value Ans is :",Boolean(value)); // false
console.log("Converted value typeof is ",typeof Boolean(value));//boolean

//Another syntax to convert a value into boolean using assign value to another variable
let valToBool = Boolean(value);
console.log("Converted valToBool Ans is :",valToBool); // false
console.log("Converted valToBool typeof is ",typeof valToBool);//boolean

// Implicit Conversion: In conditional statements:
//truthy value
if ("non-empty string") {
    console.log("This is true!"); // Runs because non-empty strings are truthy
}
//falsy value
if (0) {
    console.log("This is false"); // Runs because non-empty strings are truthy
}else
{
    console.log("0 is falsy value");  
}
