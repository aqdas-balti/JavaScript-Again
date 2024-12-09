/*
In JavaScript, various equality methods and algorithms are implemented under different names and purposes. Let's break down **isLooslyEqual**, **isStrictlyEqual**, **sameValueZero**, and **sameValue** with examples and their use cases.
---
### 1. **`isLooslyEqual` (Loose Equality)**
- This is not a built-in function but describes the behavior of the `==` operator.
- **Description**: Compares two values for equality after **type coercion**.
- **Key Characteristics**:
  - Converts different types to the same type before comparison.
  - `null` is loosely equal to `undefined`.
- **Caution**: Can lead to bugs due to unexpected coercion.
- **Example**: */
  console.log("isLooslyEqual Example");
  console.log(5 == '5');        // true
  console.log(0 == false);      // true
  console.log(null == undefined); // true
  console.log([] == false);     // true
  console.log("\n");
  
/*
### 2. **`isStrictlyEqual` (Strict Equality)**
- This is not a built-in function but describes the behavior of the `===` operator.
- **Description**: Compares two values for equality without **type coercion**.
- **Key Characteristics**:
  - Values must be of the same type to be strictly equal.
- **Use Case**: Preferred for equality checks in most situations.
- **Example**:*/
  console.log("isStrictlyEqual Example");
  console.log(5 === '5');       // false
  console.log(5 === 5);         // true
  console.log(null === undefined); // false
  console.log("\n");
//   console.log([] === []);       // false (different references)This condition will always return 'false' since JavaScript compares objects by reference, not value 
  
/*
### 3. **`Object.is` (SameValue)**
- **Description**: A built-in method introduced in ES6 for **"SameValue" equality**.
- **Key Characteristics**:
  - Similar to `===` but handles `NaN` and `-0/+0` differently.
  - `Object.is(NaN, NaN)` is `true`, whereas `NaN === NaN` is `false`.
  - `Object.is(-0, +0)` is `false`, whereas `-0 === +0` is `true`.
- **Use Case**: When precise equality is needed, especially for edge cases like `NaN` and `-0`.
- **Example**:*/
  console.log("sameValue (Object.js) Example");
  console.log(Object.is(5, 5));        // true
  console.log(Object.is(5, '5'));      // false
  console.log(Object.is(NaN, NaN));    // true
  console.log(Object.is(-0, +0));      // false
  console.log("\n");
/*
### 4. **`SameValueZero`**
- **Description**: Used internally by JavaScript (e.g., in `Map`, `Set`, and `Array.prototype.includes`) for equality checks.
- **Key Characteristics**:
  - Similar to `Object.is`, but treats `-0` and `+0` as **equal**.
  - Recognizes `NaN` as equal to itself.
- **Use Case**: Default equality in collections and methods like `includes` or `indexOf`.
- **Example**:*/
  console.log("sameValueZero Example");
  console.log([NaN].includes(NaN)); // true (SameValueZero)
  console.log(new Set([-0, +0]).size); // 1 (SameValueZero)
  console.log("\n");
/*  
### Key Differences Table

| Algorithm             | Coercion | `NaN` Equality | `-0/+0` Equality | Example Use Case                     |
|-------------------    |----------|----------------|------------------|--------------------------------------|
|isLooslyEqual(`==`)    | Yes      | `false`        | `true`           | Legacy code with coercion            |
|isStrictlyEqual(`===`) | No       | `false`        | `true`           | Default equality in modern JS        |
|SameValue(`Object.is`) | No       | `true`         | `false`          | Special cases like `NaN` or `-0/+0`  |
|SameValueZero          | No       | `true`         | `true`           | Collections like `Set`, `includes`   |

### Custom Implementation
The custom implementation provided earlier for isLooslyEqual, isStrictlyEqual, sameValue, and sameValueZero mimics how JavaScript's built-in equality algorithms work. Here's a detailed breakdown of each custom function:
If you'd like to implement these concepts manually:*/
function isLooslyEqual(a, b) {
    return a == b; // Uses loose equality
}

function isStrictlyEqual(a, b) {
    return a === b; // Uses strict equality
}

function sameValue(a, b) {
    if (a === b) return a !== 0 || 1 / a === 1 / b; // Handles -0 and +0
    return a !== a && b !== b; // Handles NaN
}

function sameValueZero(a, b) {
    return a === b || (a !== a && b !== b); // NaN equality, ignores -0/+0
}