/*
## **2. Loops and Iterations**

### **Q1: `for` loop to calculate the sum of numbers 1-100**
- **Explanation:** A `for` loop runs a block of code a set number of times.
- **Code Example:**/

   let sum = 0;
   for (let i = 1; i <= 100; i++) {
       sum += i; // Adds current value of i to sum
   }
   console.log("Sum:", sum);// Output: Sum: 5050

/*
### **Q2: Difference between `for..in` and `for..of`**
- **Explanation:**
   - `for..in`: Iterates **over object keys**.
   - `for..of`: Iterates **over values** of an iterable (arrays, strings, etc.).
- **Example:**/

   const obj = {a: 1, b: 2};
   for (let key in obj) {
       console.log(key, obj[key]);
   }

   const arr = [10, 20, 30];
   for (let value of arr) {
       console.log(value); // Outputs 10, 20, 30
   }

/*
### **Q3: Difference between `do..while` and `while` loops**
- **Explanation:**
   - `while`: Checks the condition **before** executing the code block.
   - `do..while`: Executes the code block **once** before checking the condition.
- **Example:**/

   let i = 0;

   while (i < 3) {
       console.log("While Loop:", i);
       i++;
   }

   do {
       console.log("Do-While Loop:", i);
       i++;
   } while (i < 3);


/*
### **Q4: Purpose of `break` and `continue`**
- **Explanation:**
   - `break`: Exits the loop entirely.
   - `continue`: Skips the rest of the current iteration and continues to the next.
- **Example:***/

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
