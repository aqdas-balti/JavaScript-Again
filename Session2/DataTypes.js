/*
JavaScript mein data types wo cheezen hain jo humein bataati hain ke aik variable mein kis tarah ka data store ho raha hai. Data types ko do basic categories mein divide kiya ja sakta hai: **primitive types** aur **non-primitive types**.

### 1. **Primitive Data Types**
Primitive data types simple aur immutable (yaani aik dafa banane ke baad change nahi ho sakte) hoti hain.

1. **Number**
   - Number type har tarah ke numbers ko represent karta hai, chahe wo integers (jaise 5, -10) ho ya decimal numbers (jaise 3.14).
   - JavaScript mein kuch special numeric values bhi hoti hain:
     - `Infinity`: Jab koi number 0 se divide ho jaye.
     - `-Infinity`: Jab koi negative number 0 se divide ho jaye.
     - `NaN` (Not-a-Number): Jab koi ghalat calculation ho, jaise 0 ko 0 se divide karna.
*/

let age = 30;
let price = 99.99;
console.log("Numbers is primitive datatypes",age,price);

let a1 = 1;
let b1 = 0;
let c1 = a1/b1;
console.log("Special number of Infinity:",c1);//Infinity

const a2 = 1;
const b2 = 0;
const c2 = a2/b2;
console.log("Special number of NaN:",c2);//NaN

/*
2. **BigInt**
   - BigInt type ka use bohat bare numbers ko represent karne ke liye hota hai, jo normal number range se bade ho sakte hain.
   - BigInt numbers ke end mein `n` lagaya jata hai.
*/
let bigNumber = 12345678901234567890n;
console.log("BigInt is primitive datatype:",bigNumber);

/*  
3. **String**
   - String aik aise characters ka sequence hota hai jo text ko represent karta hai.
   - Strings single quotes (`'`), double quotes (`"`) ya backticks (`` ` ``) mein likhi jati hain.
*/

   let name = "Ali";
   console.log("String is primitive datatype:",name);

/*   
4. **Boolean**
   - Boolean type sirf do values ko represent karta hai: `true` (sahi) aur `false` (ghalat).
   - Iska use aksar conditions mein hota hai.
*/

let isMember = true;
console.log("Boolean is primitive datatype:",isMember);

/*
5. **Undefined**
   - Undefined wo hota hai jab aik variable declare to hota hai lekin koi value assign nahi ki gayi hoti.
*/   

   let uninitialized;
   console.log("Undefined is primitive datatype:",uninitialized); // undefined

/*
6. **Null**
   - Null aik khas value hai jo ye show karti hai ke variable mein koi object ya value nahi hai.
*/

   let emptyValue = null;
   console.log("Null is primitive datatype:",emptyValue);

/*
7. **Symbol**
   - Symbol unique aur immutable identifiers banane ke liye use hota hai. Ye object property keys mein helpful hota hai.
*/

   let id = Symbol("id");
   console.log("Symbol is primitive datatype:",Symbol);

/*
### 2. **Non-Primitive Data Types (Objects)**
Non-primitive types mutable hote hain aur reference ke zariye access kiye jate hain, yaani ye change ho sakte hain.
*/
/*
1. **Object**
   - Object aik aise keys aur values ka collection hai jo aik entity ko represent karta hai.
   - Object literals `{}` ke through banaye jate hain.
*/

   let person = {
     name: "Ali",
     age: 30
   };
console.log("Object is a non-primitive datatypes:",person);

/*
2. **Array**
   - Array aik ordered collection hai jo multiple values ko store kar sakta hai. Ye index ke zariye access ki jati hai.
*/

let colors = ["red", "green", "blue"];
console.log("Arrays are non primitive datatypes",colors);

/*
3. **Function**
   - Function aik callable object hai jo koi kaam ya calculation perform karta hai.
*/

   function add(a, b) {
     return a + b;
   }
   console.log("Functions are non primitive datatypes:",add);

/*
4. **Date**
   - Date objects ka use dates aur times ko represent karne ke liye hota hai.
*/   

   let today = new Date();
   console.log("Date is non primitive datatypes:",today);

/*   
5. **Map**
   - Map bhi key-value pairs ko store karta hai, lekin ye kisi bhi type ke key ko support karta hai aur insertion order ko maintain karta hai.
*/

   let map = new Map();
   map.set("name", "Ali");
   console.log("Map is a non primitive datatypes:",map);

/*
6. **Set**
   - Set unique values ka collection hai, jisme koi duplicate values nahi hoti.
*/

   let uniqueNumbers = new Set([1, 2, 3]);
   console.log("Set is a non primitive datatypes:",uniqueNumbers);

/*
### **Kuch Special Baatein**

- **Type Coercion**
  - JavaScript mein kabhi kabhi aik type ko dusre type mein convert kar diya jata hai, jaise `5 + "5"` ka result `"55"` hota hai, kyunke number string mein convert ho jata hai.
*/

let conv1 = 5;//number
let conv2 = "5";//string
let sum = conv1+conv2;
console.log("It is converted into string because number will be converted into String:",sum);

/*
- **`typeof` Operator**
  - `typeof` operator ka use data type check karne ke liye kiya jata hai.
*/

console.log(typeof "Hello"); // "string"
console.log(typeof 42);      // "number"

/*  
Ye basic data types hain jo JavaScript mein hote hain, aur ye data handle karne mein bohot madadgar hain.
*/