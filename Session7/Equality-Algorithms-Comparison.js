/*
In JavaScript, various equality methods and algorithms are implemented under different names and purposes. Let's break down **isLooslyEqual**, **isStrictlyEqual**, **sameValueZero**, and **sameValue** with examples and their use cases.

---

### 1. **`isLooslyEqual` (Loose Equality)**
- This is not a built-in function but describes the behavior of the `==` operator.
- **Description**: Compares two values for equality after **type coercion**.
- **Key Characteristics**:
  - Converts different types to the same type before comparison.
  - `null` is loosely equal to `undefined`.
- **Example**:
  ```javascript
  console.log(5 == '5');        // true
  console.log(0 == false);      // true
  console.log(null == undefined); // true
  console.log([] == false);     // true
  ```
- **Caution**: Can lead to bugs due to unexpected coercion.

---

### 2. **`isStrictlyEqual` (Strict Equality)**
- This is not a built-in function but describes the behavior of the `===` operator.
- **Description**: Compares two values for equality without **type coercion**.
- **Key Characteristics**:
  - Values must be of the same type to be strictly equal.
- **Example**:
  ```javascript
  console.log(5 === '5');       // false
  console.log(5 === 5);         // true
  console.log(null === undefined); // false
  console.log([] === []);       // false (different references)
  ```
- **Use Case**: Preferred for equality checks in most situations.

---

### 3. **`Object.is` (SameValue)**
- **Description**: A built-in method introduced in ES6 for **"SameValue" equality**.
- **Key Characteristics**:
  - Similar to `===` but handles `NaN` and `-0/+0` differently.
  - `Object.is(NaN, NaN)` is `true`, whereas `NaN === NaN` is `false`.
  - `Object.is(-0, +0)` is `false`, whereas `-0 === +0` is `true`.
- **Example**:
  ```javascript
  console.log(Object.is(5, 5));        // true
  console.log(Object.is(5, '5'));      // false
  console.log(Object.is(NaN, NaN));    // true
  console.log(Object.is(-0, +0));      // false
  ```
- **Use Case**: When precise equality is needed, especially for edge cases like `NaN` and `-0`.

---

### 4. **`SameValueZero`**
- **Description**: Used internally by JavaScript (e.g., in `Map`, `Set`, and `Array.prototype.includes`) for equality checks.
- **Key Characteristics**:
  - Similar to `Object.is`, but treats `-0` and `+0` as **equal**.
  - Recognizes `NaN` as equal to itself.
- **Example**:
  ```javascript
  console.log([NaN].includes(NaN)); // true (SameValueZero)
  console.log(new Set([-0, +0]).size); // 1 (SameValueZero)
  ```
- **Use Case**: Default equality in collections and methods like `includes` or `indexOf`.

---

### Key Differences Table

| Algorithm        | Coercion | `NaN` Equality | `-0/+0` Equality | Example Use Case                     |
|-------------------|----------|----------------|------------------|---------------------------------------|
| **isLooslyEqual** (`==`) | Yes      | `false`        | `true`           | Legacy code with coercion            |
| **isStrictlyEqual** (`===`) | No       | `false`        | `true`           | Default equality in modern JS        |
| **SameValue** (`Object.is`) | No       | `true`         | `false`          | Special cases like `NaN` or `-0/+0`  |
| **SameValueZero** | No       | `true`         | `true`           | Collections like `Set`, `includes`   |

---

### Custom Implementation

If you'd like to implement these concepts manually:

```javascript
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
*/