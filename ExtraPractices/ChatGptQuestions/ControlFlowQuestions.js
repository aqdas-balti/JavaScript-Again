/*
## **3. Control Flow**
### **Q1: Check if a number is positive, negative, or zero**
- **Code Example:**/

   let num = 5;

   if (num > 0) {
       console.log("Positive");
   } else if (num < 0) {
       console.log("Negative");
   } else {
       console.log("Zero");
   }

/*
### **Q2: `switch` statement for days of the week**
- **Explanation:** `switch` evaluates an expression against multiple cases.
- **Code Example:**/

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

/*   
### **Q3: Difference between `if..else` and `switch`**
- **Explanation:**
   - Use `if..else` for complex conditions.
   - Use `switch` when there are multiple discrete values to compare.*/

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
