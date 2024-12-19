/*
JavaScript mein **`for...of`** loop ka istemal iterable objects, jaise arrays, strings, maps, ya sets ke elements ko iterate karne ke liye hota hai. Yeh loop har element ko ek ek karke access karta hai.

### **Syntax:**

for (let variable of iterable) {
  // code to execute
}

- **`variable`**: Har iteration mein iterable ke ek element ko represent karta hai.
- **`iterable`**: Wahi object jo iterate kiya ja raha ho (e.g., array, string, etc.).

### **Example 1: Array**/

const fruits = ["apple", "banana", "cherry"];

for (const fruit of fruits) {
  console.log(fruit);
}
// Output:
// apple
// banana
// cherry

// ### **Example 2: String**

const name = "Ali";

for (const char of name) {
  console.log(char);
}
// Output:
// A
// l
// i


// ### **Example 3: Set**

const numbers = new Set([1, 2, 3]);

for (const num of numbers) {
  console.log(num);
}
// Output:
// 1
// 2
// 3


// ### **Example 4: Map**

const userInfo = new Map([
  ["name", "Ali"],
  ["age", 25],
]);

for (const [key, value] of userInfo) {
  console.log(`${key}: ${value}`);
}
// Output:
// name: Ali
// age: 25
/*
### **For...of vs For...in**
| **For...of**                     | **For...in**                      |
|-----------------------------------|------------------------------------|
| Values ko iterate karta hai.     | Keys/Indexes ko iterate karta hai. |
| Arrays, Strings, Maps, etc. pe kaam karta hai. | Objects pe zyada useful hai. |

Agar aapko `for...of` ke kisi aur use case ke liye madad chahiye ho, to bataiye! 😊
*/