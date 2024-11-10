/*
JavaScript mein **variable scope** ka matlab yeh hai ke kisi variable ko code mein kahan tak access ya istemal kiya ja sakta hai. Yeh scope teen qisam ke hote hain: **Global Scope**, **Function Scope**, aur **Block Scope**. Har aik scope ka apna alag maqsad aur istemal hota hai jaisay:

1. **Global Scope** (Aam Scope)
   - Jab hum kisi variable ko kisi bhi function ya block ke bahar declare karte hain, to usay **Global Variable** kaha jata hai.
   - Global variable ko code mein kisi bhi jagah se access kiya ja sakta hai, chahe wo kisi bhi function ya block ke andar ho.
   - Lekin agar ziada global variables use kiye jayein, to code mushkil aur complex ho sakta hai kyun ke ye sari code mein kisi bhi jagah se access ho sakte hain. Yeh bad mein galtiyon ka sabab ban sakte hain.

   **Example:**
*/

let globalVar = "Yeh global hai";

function myFunction() {
  console.log(globalVar); // Yeh globalVar ko access kar sakta hai
}

myFunction();  // Output: "Yeh global hai"
console.log(globalVar); // Bahar bhi access ho sakta hai


/*### 2. **Function Scope** (Function ki Had)
   - Function scope us waqt hoti hai jab variable ko **`var`** keyword ke saath function ke andar declare kiya jaye.
   - Aise variable sirf us function ke andar hi access kiye ja sakte hain aur function ke bahar unhein access karna mumkin nahi hota.
   - Agar hum kisi block (jaise ke `if`, `for` loop) ke andar bhi `var` se variable banayein, to wo bhi sirf function ke andar access hota hai, lekin block ke bahar bhi access kiya ja sakta hai kyun ke `var` block scope ko follow nahi karta.

   **Example:**
*/
   function myFunction1() {
     var functionVar = "Yeh function scope mein hai var ka sth";
     console.log(functionVar); // Function ke andar access ho sakta hai
   }

   myFunction1();  // Output: "Yeh function scope mein hai"
//    console.log(functionVar); // Error: functionVar ko bahar access nahi kar sakte

//let say or const say bi kar sakty ha isi tarha const ka sth bi kar saktay ha
function myFunction2() {
    let functionLet = "Yeh function scope mein hai Let ka sth";
    console.log(functionLet); // Function ke andar access ho sakta hai
  }

  myFunction2();

/*
### 3. **Block Scope** (Block ki Had)
   - Jab variable ko **`let`** ya **`const`** ke saath kisi block `{ }` ke andar declare kiya jaye, to wo sirf us block ke andar hi access ho sakta hai. Isay **Block Scope** kehte hain.
   - Yeh sirf ussi `{ }` wale block mein access ho sakta hai aur us block ke bahar nahi.
   - Block scope se code ziada safe aur error-free ho jata hai, kyun ke ye scope ko chhota aur manageable banata hai.

   **Example:**   
*/

if (true) {
    let blockVar = "Yeh block ke andar hai block scope ma";
    console.log(blockVar); // Block ke andar access ho sakta hai
  }

//   console.log(blockVar); // Error: blockVar ko block ke bahar access nahi kar sakte

/*
### Ek Mukhtasir Khulasa:

**Global Scope**: Variables jo function ya block ke bahar banaye jayein, aur jo har jagah access ho sakte hain.

**Function Scope**: `var` se declare kiye gaye variables sirf function ke andar access hote hain, lekin block `{ }` ko ignore karte hain.

**Block Scope**: `let` aur `const` se banaye gaye variables sirf apne `{ }` block ke andar hi access hote hain.

Note:
### Behtareen Amaliyat (Practice)

- `let` aur `const` ka zyada istemal karein, taake aapka code block-based scope ko follow kare aur ziada secure aur predictable rahe.
- Global variables ka istemal kam se kam karein, kyun ke ye har jagah access hote hain aur bade mein code mein mushkilein paida kar sakte hain.
*/
