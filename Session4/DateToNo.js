// Date to Number: Converts a date to a numeric timestamp.
// Explicit Conversion: Using Number():
let date1 = new Date();
console.log(Number(date1)); // Timestamp

// Using .getTime();
let date2 = new Date();
console.log(date2.getTime()); // Timestamp


// Implicit Conversion: During subtraction:
let date3 = new Date("2024-01-01");
let date4 = new Date("2024-01-02");
let output=date4-date3;
console.log(output); // 86400000 (difference in milliseconds)
console.log(typeof output);//number
