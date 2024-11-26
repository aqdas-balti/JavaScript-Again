
/*
JavaScript has a number of built-in objects, providing a wide range of functionality for handling data, performing calculations, manipulating text, and more. Here are the main built-in objects in JavaScript:

### 1. **Global Objects**
These objects are available in the global scope and don't need to be created using `new`. Examples include:

- **`Object`**: The base for all JavaScript objects.
- **`Function`**: Used to define functions.
- **`Boolean`**: Represents logical true/false.
- **`Symbol`**: Represents unique identifiers.

### 2. **Data Types**
   - **`Number`**: Represents numbers (e.g., `3.14`, `42`, `-0.5`).
   - **`BigInt`**: Used for integers of arbitrary precision.
   - **`String`**: Represents text values (e.g., `"hello"`).
   - **`Boolean`**: Represents true or false.
   - **`Symbol`**: Unique and immutable data type used as keys for object properties.
   - **`Undefined`** and **`Null`**: Represent undefined or empty values.

### 3. **Wrapper Objects**
These are used to wrap primitive values and provide useful methods:

- **`String`**: Wraps a text value and provides string manipulation methods.
- **`Number`**: Wraps numbers and provides methods for numerical calculations.
- **`Boolean`**: Wraps a Boolean value.

### 4. **Collection Objects**
JavaScript provides several built-in collection objects to store data:

- **`Array`**: Used to store ordered lists of values.
- **`Set`**: A collection of unique values.
- **`Map`**: A collection of key-value pairs, with keys that can be any data type.
- **`WeakSet`**: Like `Set`, but only holds weakly-referenced objects.
- **`WeakMap`**: Like `Map`, but only holds weakly-referenced objects as keys.

### 5. **Date and Time**
- **`Date`**: Used to handle dates and times.

### 6. **Mathematics**
- **`Math`**: Provides mathematical constants and functions (e.g., `Math.PI`, `Math.sqrt()`).

### 7. **Regular Expressions**
- **`RegExp`**: Used for pattern matching and text searching.

### 8. **Error Objects**
Used for handling exceptions:

- **`Error`**: The generic error object.
- **`SyntaxError`**, **`TypeError`**, **`ReferenceError`**, etc.: Specific types of errors.

### 9. **JSON**
- **`JSON`**: Used to parse and stringify JSON data.

### 10. **Other Utility Objects**
   - **`Promise`**: Represents a value that may be available now, or in the future, or never.
   - **`GeneratorFunction`**: Special function type that can be paused and resumed.
   - **`AsyncFunction`**: Represents asynchronous functions.
   - **`Reflect`**: Provides methods for interceptable JavaScript operations (often used with proxies).
   - **`Proxy`**: Used to define custom behavior for fundamental operations on an object.

### 11. **Typed Arrays**
Typed Arrays are used for handling binary data in raw formats (useful for WebGL and other binary data manipulation):

- **`ArrayBuffer`**
- **`Int8Array`**, **`Uint8Array`**, **`Uint8ClampedArray`**
- **`Int16Array`**, **`Uint16Array`**
- **`Int32Array`**, **`Uint32Array`**
- **`Float32Array`**, **`Float64Array`**
  
### Summary of Built-in Objects in JavaScript
JavaScript's built-in objects allow for a wide variety of operations, including mathematical calculations, string manipulation, error handling, data storage, asynchronous operations, and more. This foundational set of objects is extended in modern JavaScript through libraries and frameworks, enhancing JavaScript’s capabilities for web, server, and cross-platform development.
*/

/*2. Built-in Objects
JavaScript provides several built-in objects categorized based on their use cases.
Core Objects
These are available globally and do not need to be imported.
Object
Represents a generic JavaScript object.
*/
const obj1 = { key: "value" };
console.log(Object.keys(obj1)); // Output: ["key"]
console.log("Objects Ends Here");
/*Function
Represents JavaScript functions.*/
function example() {
  return "Hello!";
}
console.log(example()); // Output: Hello!
console.log("Functions Ends Here");
/*Array
Represents a list-like object.*/
const arr = [1, 2, 3];
arr.push(4);
console.log(arr); // Output: [1, 2, 3, 4]
console.log("Array Ends Here");

/*String
Used to manipulate strings.*/
const str = "Hello, World!";
console.log(str.toUpperCase()); // Output: HELLO, WORLD!
console.log("Strings Ends Here");

/*Number
Used for numerical operations.*/
const num = 42.5;
console.log(Math.round(num)); // Output: 43
console.log("Numbers Ends Here");

/*Boolean
Represents logical values.*/
const isAvailable = true;
console.log(typeof isAvailable); // Output: boolean
console.log("Booleans Ends Here");

/*Date
Used to work with dates and times.*/
const now = new Date();
console.log(now.toDateString()); // Output: e.g., Mon Nov 25 2024
console.log("Dates Ends Here");

/*Math
Provides mathematical operations.*/
console.log(Math.sqrt(16)); // Output: 4
console.log("Maths Ends Here");

/*Error
*/
try {
  throw new Error("Something went wrong!");
} catch (err) {
  console.log(err.message); // Output: Something went wrong!
}
console.log("Error Ends Here");

// TypeError
try {
  null.someMethod();
} catch (err) {
  console.log(err instanceof TypeError); // Output: true
}
console.log("TypeError Ends Here");

/*Utility Objects
Useful for handling more specific tasks.
JSON
Used to parse and stringify JSON.*/

const obj = { name: "John" };
const json = JSON.stringify(obj);
console.log(json); // Output: {"name":"John"}
console.log("JASON Ends Here");

/*Promise
Represents a value that may be available now, or in the future.*/
const promise = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Done!"), 1000);
});

promise.then((result) => console.log(result)); // Output after 1s: Done!
console.log("Promise Ends Here");

/*DOM Objects (Browser-Specific)
These are related to the Document Object Model (DOM).
Document
Represents the webpage content.*/
// console.log(document.title); // Outputs the title of the current webpage.
// console.log("Document Ends Here");

/*Window
Represents the browser window.*/
// console.log(window.innerWidth); // Outputs the width of the browser window.
// console.log("Window Ends Here");

/*HTMLElement
Represents elements in the DOM.*/
// const element = document.getElementById("myElement");
// console.log(element.textContent); // Outputs the text inside the element.
// console.log("Element Ends Here");
// This is a high-level overview of objects in JavaScript. Let me know if you need details on any specific part!*/