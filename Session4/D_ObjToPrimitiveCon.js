// d. Object to Primitive Conversion
// Converts objects to primitive types like strings or numbers.
// Explicit Conversion:

// Using toString() or valueOf():
let obj = { value: 10 };
obj.toString = function() {
    return "Object as string";
};
console.log(obj.toString()); // "Object as string"


// Implicit Conversion:
// During string concatenation:

let obj = { value: 10 };
console.log("Value is: " + obj); // "Value is: [object Object]"