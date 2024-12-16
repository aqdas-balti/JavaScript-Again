//Array ek box ki tarah hai jo ek hi jagah par bohot saari cheezein store karta hai aur unhe index ke zariye access karte hain.
/*
JavaScript me arrays banane ke do tareeqe hote hain:
1: Array Literal
2: Array Constructor
Dono methods ek hi kaam karte hain, lekin unka syntax aur approach alag hoti hai. Chalain, inhe detail me samajhte hain.

1. Array Literal
Kya hai?
Literal method ek simple aur commonly used tareeqa hai array banane ka. Isme hum square brackets ([]) ka use karte hain.

Syntax:

let arrayName = [element1, element2, element3];
Example:*/
console.log("Array Literal:");
let fruits = ["apple", "banana", "cherry"];
console.log(fruits); // Output: ["apple", "banana", "cherry"]
/*
Key Points:

Array literal me aap directly elements define karte hain.
Zyada readable aur asaan hota hai.
Recommended hai agar aapko array ke elements already pata hain.

2. Array Constructor
Kya hai?
Array constructor ek built-in Array object ka use karta hai array banane ke liye. Isme hum new Array() likhte hain.

Syntax:

let arrayName = new Array(element1, element2, element3);
Example:*/
console.log("Array Constructor:");
let fruits1 = new Array("apple", "banana", "cherry");
console.log(fruits1); // Output: ["apple", "banana", "cherry"]
/*
Special Case:
Agar aap constructor ko sirf ek number pass karein, to wo utni length ka empty array banayega.
*/
let numbers = new Array(5);
console.log(numbers); // Output: [empty × 5] (empty array with length 5)
console.log(numbers.length); // Output: 5
 
// Common Method of arrays in JavaScript:
console.log("common Method of arrays in JavaScript:");

/*
### 1. **`push()`**
- **Maqsad:** Array ke **end** par naye elements add karna.
- **Return:** Array ki nayi length.  */
console.log("Push Method:last element ko add karna.");
let fruits2 = ["apple", "banana"];
let newLength = fruits2.push("cherry", "date"); // Akhri me add karo
console.log(fruits2); // ["apple", "banana", "cherry", "date"]
console.log(newLength); // 4

/*
### 2. **`pop()`**
- **Maqsad:** Array ke **end** ka element hataana.
- **Return:** Hataaya gaya element.  */

console.log("Pop Method:last element ko remove karna.");
let fruits4 = ["apple", "banana", "cherry"];
let removed = fruits4.pop();
console.log(fruits4); // ["apple", "banana"]
console.log(removed); // "cherry"

/*
### 3. **`unshift()`**
- **Maqsad:** Array ke **start** par naye elements add karna.
- **Return:** Array ki nayi length.  */
console.log("Unshift Method:first element ko add karna.");
let fruits3 = ["banana", "cherry"];
let newLength1 = fruits3.unshift("apple", "apricot"); // Shuru me add karo
console.log(fruits3); // ["apple", "apricot", "banana", "cherry"]
console.log(newLength1); // 4

/*
### 4. **`shift()`**
- **Maqsad:** Array ke **start** ka element hataana.
- **Return:** Hataaya gaya element. */
console.log("Shift Method:first element ko remove karna.");
let fruits5 = ["apple", "banana", "cherry"];
let removed1 = fruits5.shift();
console.log(fruits5); // ["banana", "cherry"]
console.log(removed1); // "apple"

/*
### 5. **`slice()`**
- **Maqsad:** Array ka ek hissa nikalna bina asal array ko change kiye.
- **Syntax:** `array.slice(startIndex, endIndex)`  
  *(endIndex exclude hota hai)*  */
console.log("Slice Method:array ma say ak hissa nikalna lakin original array ma change nahi ana.");
let fruits6 = ["apple", "banana", "cherry", "date"];
let sliced = fruits6.slice(1, 3); // Index 1 se 2 tak ka hissa
console.log(sliced); // ["banana", "cherry"]
console.log(fruits6); // ["apple", "banana", "cherry", "date"]



/*
### 6. **`splice()`**
- **Maqsad:** Elements ko delete, replace ya add karna.
- **Syntax:** `array.splice(startIndex, deleteCount, newItem1, ...)` */ 
console.log("Splice Method:elements ko delete, replace ya add karna.");
let fruits7 = ["apple", "banana", "cherry", "date"];
let ulered =fruits7.splice(1, 2, "blueberry", "cranberry"); // 1 index se 2 items delete aur naye add
console.log(ulered); // ["banana", "cherry"]
console.log(fruits7); // ["apple", "blueberry", "cranberry", "date"]

/*
### 7. **`indexOf()`**
- **Maqsad:** Kisi element ka pehla index dhoondhna.
- **Return:** Index ya `-1` agar element na mile.  */
console.log("IndexOf Method:kisi element ka pehla index dhoondhna.");
let fruits8 = ["apple", "banana", "cherry"];
let index = fruits8.indexOf("banana");
console.log(index); // 1

let notFound = fruits8.indexOf("date");
console.log(notFound); // -1

/*
### 8. **`includes()`**
- **Maqsad:** Dekhna ke array me koi element mojood hai ya nahi.
- **Return:** `true` ya `false`.*/

console.log("Includes Method:dekhna ke array me koi element mojood hai ya nahi.");
let fruits9 = ["apple", "banana", "cherry"];
let hasBanana = fruits9.includes("banana");
console.log(hasBanana); // true

let hasDate = fruits9.includes("date");
console.log(hasDate); // false

/*
### 9. **`forEach()`**
- **Maqsad:** Har element par ek function chalana.
- **Return:** `undefined`.  */

console.log("ForEach Method:har element par ek function chalana.");
let fruits10 = ["apple", "banana", "cherry"];
fruits10.forEach(function(fruit, index) {
  console.log(`Index ${index}: ${fruit}`);
});
// Output:
// Index 0: apple
// Index 1: banana
// Index 2: cherry

/*
### 10. **`map()`**
- **Maqsad:** Har element ko modify kar ke ek nayi array banani.
- **Return:** Nayi array.*/

console.log("Map Method:har element ko modify kar ke ek nayi array banani.");
let numbers1 = [1, 2, 3];
let squared = numbers1.map(function(num) { return num ** 2});//or let squared = numbers1.map(num => num ** 2);
console.log(squared); // [1, 4, 9]
console.log(numbers1); // [1, 2, 3]

/*
### 11. **`sort()`**
- **Maqsad:** Array ko sort karna (default: string sorting).
- **Custom sorting ke liye:** Compare function use karein.*/

console.log("Sort Method:array ko sort karna (default: string sorting).");
let fruits11 = ["cherry", "banana", "apple"];
fruits11.sort();
console.log(fruits11); // ["apple", "banana", "cherry"]

let numbers2 = [30, 2, 10];
numbers.sort((a, b) => a - b); // Ascending order
console.log(numbers2); // [2, 10, 30]

/*
### 12. **`reverse()`**
- **Maqsad:** Array ke order ko ulta karna.
- **Return:** Reverse array.*/

console.log("Reverse Method:array ke order ko ulta karna.");
let fruits12 = ["apple", "banana", "cherry"];
fruits12.reverse();
console.log(fruits12); // ["cherry", "banana", "apple"]

/*
### 13. **`concat()`**
- **Maqsad:** Arrays ko mila kar ek nayi array banani.
- **Return:** Nayi array.

console.log("Concat Method:arrays ko mila kar ek nayi array banani.");
let fruits = ["apple", "banana"];
let moreFruits = ["cherry", "date"];
let combined = fruits.concat(moreFruits, "elderberry");
console.log(combined); // ["apple", "banana", "cherry", "date", "elderberry"]

### 14. **`join()`**
- **Maqsad:** Array ko string me convert karna.
- **Return:** String.*/

console.log("Join Method:array ko string me convert karna.");
let fruits13 = ["apple", "banana", "cherry"];
let joined = fruits13.join(", ");
console.log(joined); // "apple, banana, cherry"

/*
### 15. **`slice()`**
- **Maqsad:** Array ke koi part ko copy karna start kay index ko add karta ha lekin end index ko nahi.
- **Return:** Nayi array.*/

console.log("Slice Method:array ke koi part ko copy karna.");
let fruits14 = ["apple", "banana", "cherry"];
let sliced1 = fruits14.slice(1, 2);
console.log(sliced1); // ["banana", "cherry"]

/*
### 16. **`filter()`**
- **Maqsad:** Array ke koi part ko copy karna.
- **Return:** Nayi array.*/ 

console.log("Filter Method:array ke koi part ko copy karna.");
let numbers3 = [1, 2, 3, 4, 5];
let evenNumbers = numbers3.filter(num => num % 2 === 0);
console.log(evenNumbers); // [2, 4]

/*
### 17. **`reduce()`**
- **Maqsad:** Array ke koi part ko copy karna.
- **Return:** Nayi array.*/

console.log("Reduce Method:array ke koi part ko copy karna.");
let numbers4 = [1, 2, 3, 4, 5];
let sum = numbers4.reduce((total, num) => total + num, 0);
// console.log(sum); // 15
/*
Agar kisi method ki aur tafseel chahiye ho ya examples zarurat ho, to zarur poochein! 😊
*/