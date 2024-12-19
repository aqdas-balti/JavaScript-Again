/*
JavaScript ke **`break`** aur **`continue`** statements loops ke andar istemal hote hain, aur inka kaam loop ka control modify karna hota hai. 

### **Break Statement**
`break` ka istemal kisi loop ko foran khatam karne ke liye hota hai. Jab `break` execute hota hai, loop turant band ho jata hai aur program agle statement par chala jata hai jo loop ke baad likha hota hai.
#### Syntax:
break;

#### Example:*/

for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break; // Jab i 5 ho, loop khatam kar do
  }
  console.log(i);
}
// Output: 0, 1, 2, 3, 4

/*
### **Continue Statement**
`continue` ka istemal kisi iteration ko skip karne ke liye hota hai. Yeh loop ko band nahi karta, lekin us specific iteration ka remaining code chhod kar agli iteration par chala jata hai.
#### Syntax:
continue;
#### Example:*/
console.log("\n");

for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) {
    continue; // Even numbers skip kar do
  }
  console.log(i);
}
// Output: 1, 3, 5, 7, 9

/*
### **Break aur Continue ka farq**
| **Feature**  | **break**                        | **continue**                  |
|--------------|----------------------------------|--------------------------------|
| **Kaam**     | Loop ko turant khatam karta hai. | Sirf current iteration ko skip karta hai. |
| **Usage**    | Jab loop ka kaam pehle khatam ho jaye. | Jab kuch specific iterations ko ignore karna ho. |
*/