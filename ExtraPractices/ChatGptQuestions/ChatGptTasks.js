/*

## **1. Introduction to JavaScript**

### **Q1: Differences between `var`, `let`, and `const`**
- **Explanation:**
   - `var`: Function-scoped, can be redeclared and reassigned. Variables declared with `var` are hoisted to the top of their scope and initialized with `undefined`.
   - `let`: Block-scoped, can be reassigned but **not redeclared** in the same scope. Hoisted but **not initialized**.
   - `const`: Block-scoped, cannot be reassigned or redeclared. Must be initialized during declaration.
- **Example:**
   ```javascript
   function example() {
       if (true) {
           var a = 10; // function-scoped
           let b = 20; // block-scoped
           const c = 30; // block-scoped
       }
       console.log(a); // 10 (accessible)
       // console.log(b); // ReferenceError
       // console.log(c); // ReferenceError
   }
   example();
   ```

---

### **Q2: How does variable hoisting work?**
- **Explanation:**
   - Hoisting is JavaScript's behavior of moving variable and function declarations to the top of their scope during compilation.
   - Only the **declaration** is hoisted; the value assignment stays in place.
- **Example:**
   ```javascript
   console.log(a); // undefined
   var a = 5; 

   // Internally, JavaScript behaves like:
   // var a;
   // console.log(a); // undefined
   // a = 5;
   ```

---

### **Q3: Variable naming rules**
- **Explanation:**
   - Valid names can include letters, digits, underscores (`_`), and dollar signs (`$`), but:
     - Names cannot start with a digit.
     - Reserved keywords like `function`, `var` cannot be used.
- **Examples:**
   - Valid: `myVar`, `_name`, `$value`, `var123`
   - Invalid: `123var`, `let`, `my-variable`

---

### **Q4: Variable Scopes (Block, Function, Global)**
- **Explanation:**
   - **Block Scope:** Variables declared with `let` or `const` are confined to a `{}` block.
   - **Function Scope:** `var` is scoped to the enclosing function.
   - **Global Scope:** Variables accessible throughout the entire script.
- **Example:**
   ```javascript
   if (true) {
       let blockScoped = "block";
       var functionScoped = "function";
   }
   console.log(functionScoped); // "function"
   // console.log(blockScoped); // ReferenceError
   ```

---

## **2. Loops and Iterations**

### **Q1: `for` loop to calculate the sum of numbers 1-100**
- **Explanation:** A `for` loop runs a block of code a set number of times.
- **Code Example:**
   ```javascript
   let sum = 0;
   for (let i = 1; i <= 100; i++) {
       sum += i; // Adds current value of i to sum
   }
   console.log("Sum:", sum);
   ```

---

### **Q2: Difference between `for..in` and `for..of`**
- **Explanation:**
   - `for..in`: Iterates **over object keys**.
   - `for..of`: Iterates **over values** of an iterable (arrays, strings, etc.).
- **Example:**
   ```javascript
   const obj = {a: 1, b: 2};
   for (let key in obj) {
       console.log(key, obj[key]);
   }

   const arr = [10, 20, 30];
   for (let value of arr) {
       console.log(value); // Outputs 10, 20, 30
   }
   ```

---

### **Q3: Difference between `do..while` and `while` loops**
- **Explanation:**
   - `while`: Checks the condition **before** executing the code block.
   - `do..while`: Executes the code block **once** before checking the condition.
- **Example:**
   ```javascript
   let i = 0;

   while (i < 3) {
       console.log("While Loop:", i);
       i++;
   }

   do {
       console.log("Do-While Loop:", i);
       i++;
   } while (i < 3);
   ```

---

### **Q4: Purpose of `break` and `continue`**
- **Explanation:**
   - `break`: Exits the loop entirely.
   - `continue`: Skips the rest of the current iteration and continues to the next.
- **Example:**
   ```javascript
   for (let i = 0; i < 5; i++) {
       if (i === 3) {
           continue; // Skips 3
       }
       if (i === 4) {
           break; // Exits loop
       }
       console.log(i);
   }
   // Output: 0, 1, 2
   ```

---

## **3. Control Flow**

### **Q1: Check if a number is positive, negative, or zero**
- **Code Example:**
   ```javascript
   let num = 5;

   if (num > 0) {
       console.log("Positive");
   } else if (num < 0) {
       console.log("Negative");
   } else {
       console.log("Zero");
   }
   ```

---

### **Q2: `switch` statement for days of the week**
- **Explanation:** `switch` evaluates an expression against multiple cases.
- **Code Example:**
   ```javascript
   let day = 3;
   switch (day) {
       case 1:
           console.log("Monday");
           break;
       case 2:
           console.log("Tuesday");
           break;
       case 3:
           console.log("Wednesday");
           break;
       default:
           console.log("Invalid day");
   }
   ```

---

### **Q3: Difference between `if..else` and `switch`**
- **Explanation:**
   - Use `if..else` for complex conditions.
   - Use `switch` when there are multiple discrete values to compare.
- **Example:**
   ```javascript
   let fruit = "apple";

   if (fruit === "apple") {
       console.log("Apple");
   } else if (fruit === "banana") {
       console.log("Banana");
   } else {
       console.log("Unknown fruit");
   }

   // Equivalent switch:
   switch (fruit) {
       case "apple":
           console.log("Apple");
           break;
       case "banana":
           console.log("Banana");
           break;
       default:
           console.log("Unknown fruit");
   }
   ```

---

### Need more details or specific explanations for any of these? Let me know! 🚀
*/