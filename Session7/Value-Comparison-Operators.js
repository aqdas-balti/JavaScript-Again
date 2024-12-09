/*
### ***Primitive vs. Reference Types***:
Primitive types: These include numbers, strings, booleans, null, undefined, and symbols. When comparing two primitive values using identity operators (=== or !==), JavaScript compares their values directly.

Value comparison operators are used to compare two values. These operators help determine relationships between values. Here’s a detailed explanation of each comparison operator with examples:

### 1. **Equality (==)**
Checks if two values are equal.

- **Example:***/

  let a = 5;
  let b = 5;
  let result = (a == b);  // true
  console.log("Equality result is :",result);
  console.log("\n");
/*
### 2. **Inequality (!=)**
Checks if two values are not equal.

- **Example:***/

  let a1 = 5;
  let b1 = 10;
  let result1 = (a1 != b1);  // true
  console.log("Inequality result is :",result1);
  console.log("\n");
/*
### 3. **Strict Equality (===)**
Checks if two values are equal and of the same type (in contrast to `==`, which only checks for equality without type consideration).

- **Example:***/
 
  let a2 = 5;
  let b2 = '5';
  let result2 = (a2 === b2);  // false
  console.log("Strict Equality result is :",result2);
  console.log("\n");
/*
### 4. **Greater Than (>)**
Checks if the value on the left is greater than the value on the right.

- **Example:***/
 
  let a3 = 10;
  let b3 = 5;
  let result3 = (a3 > b3);  // true
  console.log("Greater Than result is :",result3);
  console.log("\n");
/*
### 5. **Less Than (<)**
Checks if the value on the left is less than the value on the right.

- **Example:***/

  let a4 = 3;
  let b4 = 5;
  let result4 = (a4 < b4);  // true
  console.log("Less Than result is :",result4);
  console.log("\n");
/*  
### 6. **Greater Than or Equal To (>=)**
Checks if the value on the left is greater than or equal to the value on the right.

- **Example:**/
 
  let a5 = 7;
  let b5 = 7;
  let result5 = (a5 >= b5);  // true
  console.log("Greater Than or Equal To result is :",result5);
  console.log("\n");

/*
### 7. **Less Than or Equal To (<=)**
Checks if the value on the left is less than or equal to the value on the right.

- **Example:**/

  let a6 = 3;
  let b6 = 5;
  let result6 = (a6 <= b6);  // true
  console.log("Less Than or Equal To result is :",result6);
  console.log("\n");

/*
### ***Why Use Identity Operators with Objects and Arrays?***:
Objects and arrays are reference types, which means that when you assign them to a new variable, you are assigning a reference to the same object or array in memory, not a copy of the object.

So when you use the identity operators (=== or !==) with objects and arrays, they compare the memory reference (address) of the variables, not the contents of the objects/arrays.

Example: Comparing Objects*/

let obj1 = { name: "John" };
let obj2 = { name: "John" };
console.log("Are the objects equal? Using the identity operator with the same object elements :",obj1.name === obj2.name);  // true because the names are the same
console.log("Are the objects equal? Using the identity operator with different objects :",obj1 === obj2);  // false because obj1 and obj2 are different objects

let obj3 = obj1;
console.log("Are the objects equal? Using the identity operator with the same object reference",obj1 === obj3);  // true because obj3 is a reference to obj1

// Compare each property of the objects
let areObjectsEqual = true;
for (let key=0; key < Object.keys(obj1).length; key++) {
  if (obj1[key] !== obj2[key]) {
    areObjectsEqual = false;
  }
}
console.log("Are the objects equal? Using the identity operator with different object elements in different memory locations with the same property name in loop :",areObjectsEqual);  // true
console.log("\n");
/*
In this case, obj1 and obj2 have the same values (i.e., both have the property name with the value "John"), but they are different objects stored at different memory locations. Therefore, obj1 === obj2 will return false.
Example: Comparing Arrays*/

let arr1 = [1, 2, 3];
let arr2 = [1, 2, 3];
console.log("Are the arrays equal? Using the identity operator with the same array elements :",arr1[0] === arr2[0]); // true because the first elements are the same
console.log("Are the arrays equal? Using the identity operator with different arrays :",arr1 === arr2);  // false because arr1 and arr2 are different arrays

let arr3 = arr1;
console.log("Are the arrays equal? Using the identity operator with the same array reference",arr1 === arr3);  // true because arr3 is a reference to arr1

// Compare each element of the arrays
let areArraysEqual = true;
for (let i = 0; i < arr1.length; i++) {
    console.log(arr1[i],arr2[i]);  
  if (arr1[i] !== arr2[i]) {
    areArraysEqual = false;
  }
}

console.log("Are the arrays equal? Using the identity operator with different array elements in different memory locations with the same property name in loop :",areArraysEqual);  // true
console.log("\n");
/*
Similarly, arr1 and arr2 contain the same values, but they are different arrays stored in different memory locations, so the identity operator (===) returns false.

### 8. **Identity (===)**
In JavaScript, identity comparison is done using the strict equality (`===`), which checks both the value and the type.

- **Example:**/

  let a7 = [1, 2, 3];
  let b7 = a7;
  let result7 = (a7 === b7);  // true
  console.log("Identity result is :",result7);
  console.log("\n");
/*
### 9. **Not Identity (!==)**
Checks if two variables do not refer to the same object in memory or have different values/types.

- **Example:**/
 
  let a8 = [1, 2, 3];
  let b8 = [1, 2, 3];
  let result8 = (a8 !== b8);  // true
  console.log("Not Identity result is :",result8);
/*
### Summary of Comparison Operators in JavaScript:

| Operator      | Description                           | Example            |
|---------------|---------------------------------------|--------------------|
| `==`          | Equal to (checks value)               | `5 == 5` → `true`  |
| `!=`          | Not equal to                          | `5 != 10` → `true` |
| `===`         | Strict equal to (checks value and type) | `5 === '5'` → `false` |
| `>`           | Greater than                          | `10 > 5` → `true`  |
| `<`           | Less than                             | `3 < 5` → `true`   |
| `>=`          | Greater than or equal to              | `7 >= 7` → `true`  |
| `<=`          | Less than or equal to                 | `3 <= 5` → `true`  |
| `!==`         | Strict not equal to (checks value and type) | `5 !== '5'` → `true` |

These examples demonstrate how comparison operators work in JavaScript. 
*/