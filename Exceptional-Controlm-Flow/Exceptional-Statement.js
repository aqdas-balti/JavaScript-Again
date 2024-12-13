/*
3. Exception Handling
Introduction:
Errors can stop your code from running. Exception handling helps manage errors gracefully.
Explanation:*/
try {
    let result = 10 / 0; 
    console.log(result);

    console.log(undefinedVariable); 
} catch (error) {
    console.log("An error occurred:", error.message);
}
/*
The try block runs the code. If there’s an error, the catch block handles it.
Explanation:

try
Is block mein code run hota hai jo error generate kar sakta hai.

let result = 10 / 0;
Math ka kaam karte hain, error nahi hota.

console.log(undefinedVariable);
Ye error create karega kyun ke undefinedVariable exist nahi karta.

catch (error)
Jab error hota hai, catch block chal jata hai.

console.log("An error occurred:", error.message);
Error ka message screen par print karta hai.
*/
let x = 10;
let y = 0;
try {
    let result = x / y;
    console.log(result);
} catch (error) {
    console.log("An error occurred:", error.message);
}