// d. Object to Primitive Conversion
// Converts objects to primitive types like strings or numbers.
// Explicit Conversion:

// Using toString() or valueOf():
let obj = { value: 10 };
obj.toString = function() {
    return "Object as string";
};
console.log(obj.toString()); // "Object as string"
console.log(typeof obj.toString());//string



// Implicit Conversion:
// During string concatenation:
let obj1 = { value: 10 };
// console.log("Value is: " + obj1.toString()); // "Value is: [object Object]" (Ider ma na explicitly is ko str banaya ha jab ka is ka ilawa implicitly bi yea kam ho jata ha jaisy)
console.log("Value is: " + obj1) // "Value is: [object Object]"
console.log(typeof obj1);//object
