/*
## **1. Introduction to JavaScript**
### **Q1: Differences between `var`, `let`, and `const`**
- **Explanation:**
   - `var`: Function-scoped, can be redeclared and reassigned. Variables declared with `var` are hoisted to the top of their scope and initialized with `undefined`.
   - `let`: Block-scoped, can be reassigned but **not redeclared** in the same scope. Hoisted but **not initialized**.
   - `const`: Block-scoped, cannot be reassigned or redeclared. Must be initialized during declaration.
- **Example:**/

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

/*
### **Q2: How does variable hoisting work?**
- **Explanation:**
   - Hoisting is JavaScript's behavior of moving variable and function declarations to the top of their scope during compilation.
   - Only the **declaration** is hoisted; the value assignment stays in place.
- **Example:**/
   console.log(a); // undefined
   var a = 5; 

   // Internally, JavaScript behaves like:
   // var a;
   // console.log(a); // undefined
   // a = 5;

/*   
### **Q3: Variable naming rules**
- **Explanation:**
   - Valid names can include letters, digits, underscores (`_`), and dollar signs (`$`), but:
     - Names cannot start with a digit.
     - Reserved keywords like `function`, `var` cannot be used.
- **Examples:**
   - Valid: `myVar`, `_name`, `$value`, `var123`
   - Invalid: `123var`, `let`, `my-variable` 


### **Q4: Variable Scopes (Block, Function, Global)**
- **Explanation:**
   - **Block Scope:** Variables declared with `let` or `const` are confined to a `{}` block.
   - **Function Scope:** `var` is scoped to the enclosing function.
   - **Global Scope:** Variables accessible throughout the entire script.
- **Example:**/
   if (true) {
       let blockScoped = "block";
       var functionScoped = "function";
   }
   console.log(functionScoped); // "function"
   // console.log(blockScoped); // ReferenceError
