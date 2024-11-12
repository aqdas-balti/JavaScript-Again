

/*
In JavaScript, typecasting (or type conversion) is the process of converting a value from one type to another. This can be done either explicitly (using type conversion functions) or implicitly (by the language itself). Let's cover both:

### 1. **Explicit Type Casting**
Explicit typecasting involves using built-in JavaScript functions to manually convert types. Here are the main ways to do it:

#### a. Converting to a String
- **`String(value)`**: Converts any value to a string.
- **`value.toString()`**: Works with numbers, booleans, arrays, etc.

```javascript
let num = 123;
console.log(String(num));      // "123"
console.log(num.toString());   // "123"
```

#### b. Converting to a Number
- **`Number(value)`**: Converts the value to a number. If conversion fails, it returns `NaN`.
- **`parseInt(value)`** and **`parseFloat(value)`**: Useful for converting strings to integers and floating-point numbers, respectively.

```javascript
let str = "123.45";
console.log(Number(str));      // 123.45
console.log(parseInt(str));    // 123
console.log(parseFloat(str));  // 123.45
```

#### c. Converting to a Boolean
- **`Boolean(value)`**: Converts a value to `true` or `false` based on its truthiness.
- Falsy values include: `0`, `null`, `undefined`, `NaN`, `""` (empty string), and `false`.

```javascript
console.log(Boolean(0));       // false
console.log(Boolean("Hello")); // true
console.log(Boolean(null));    // false
```

### 2. **Implicit Type Casting (Type Coercion)**
JavaScript automatically converts types in some situations, which is known as type coercion. Here are common scenarios:

#### a. Coercion in String Concatenation
If you use the `+` operator with a string, JavaScript will convert other operands to strings and concatenate them.

```javascript
let result = "The number is " + 42; // "The number is 42"
```

#### b. Coercion in Arithmetic Operations
Other operators (`-`, `*`, `/`, etc.) will coerce values to numbers if possible.

```javascript
let result = "6" - 1;    // 5 (string "6" is coerced to number 6)
let result2 = "6" * "2"; // 12
```

#### c. Coercion in Boolean Contexts
JavaScript automatically coerces values in conditions (like `if` statements) to boolean.

```javascript
if ("hello") {
  console.log("This runs"); // Because "hello" is truthy
}

if (0) {
  console.log("This doesn't run"); // Because 0 is falsy
}
```

### Summary Table of Explicit Conversion Functions

| Type       | Conversion Function                    |
|------------|---------------------------------------|
| To String  | `String(value)`, `value.toString()`   |
| To Number  | `Number(value)`, `parseInt(value)`, `parseFloat(value)` |
| To Boolean | `Boolean(value)`                      |

#### Note on `==` vs. `===`
- `==` performs type coercion.
- `===` checks for both value and type equality, so no coercion occurs.

### Example:

```javascript
console.log(5 == "5");    // true (because of type coercion)
console.log(5 === "5");   // false (different types)
```

In general, **using explicit conversions** and `===` is recommended for predictable and bug-free code!
*/