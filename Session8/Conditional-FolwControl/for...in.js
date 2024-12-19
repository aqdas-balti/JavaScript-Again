/*
JavaScript mein **`for...in`** loop ka istemal kisi object ke **properties (keys)** ko iterate karne ke liye hota hai. Iska use objects ya arrays ke indexes ko traverse karne ke liye kiya jata hai. 

### **Syntax:**

for (let key in object) {
  // code to execute
}

- **`key`**: Current property/key ko represent karta hai.
- **`object`**: Wahi object jisko traverse kiya ja raha ho.

### **Important Points:**
1. **`for...in`** objects ke **keys** ko access karta hai, values ko nahi.
2. Agar array mein use kiya jaye, to indexes ko iterate karega, values ko nahi.

### **Example 1: Object**/

const student = {
  name: "Ali",
  age: 22,
  course: "Computer Science"
};

for (const key in student) {
  console.log(`${key}: ${student[key]}`);
}
// Output:
// name: Ali
// age: 22
// course: Computer Science

// ### **Example 2: Array**

const colors = ["red", "green", "blue"];

for (const index in colors) {
  console.log(`Index: ${index}, Value: ${colors[index]}`);
}
// Output:
// Index: 0, Value: red
// Index: 1, Value: green
// Index: 2, Value: blue

/*

### **For...in vs For...of**
| **For...in**                     | **For...of**                       |
|-----------------------------------|------------------------------------|
| Properties/keys ko iterate karta hai. | Values ko iterate karta hai.       |
| Mostly objects ke liye useful hai. | Arrays, strings, sets, etc. ke liye useful hai. |


### **Caution:**
Agar object mein inherited properties hain (prototype ke through), to `for...in` un properties ko bhi iterate karega. Is problem ko solve karne ke liye **`hasOwnProperty`** ka use karein:*/


const student1 = { name: "Ali", age: 22 };

Object.prototype.greet = function () {
  return "Hello!";
};

for (const key in student1) {
  if (student1.hasOwnProperty(key)) {
    console.log(key, student1[key]);
  }
}
// Output:
// name Ali
// age 22

// Agar kisi aur cheez ka example ya aur details chahiye ho, to bataiye! 😊
