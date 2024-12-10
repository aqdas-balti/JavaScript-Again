/*
**JavaScript mein memory allocation aur reference ka kaise kaam hota hai.** Aayein isko detail mein samajhte hain:
### **2. Referencing vs Copying **
Yeh section variable referencing aur copying ko discuss karta hai.  
#### **Primitive Types:**
Primitive variables ek dusray se **independent** hoti hain. Jab ek primitive value ko dusre variable mein assign karte hain, toh ek **copy** banti hai. Dono variables alag store hote hain.

##### **Example:**/
//Ider jb hm 'b' ma 'a' variable mein assign karte hain toh 'a' ka ak copy 'b' ma store hota ha or jb hm 'b' ma changes karty ha to 'b' ki value change hoti hai 'a' ma koi changes ni hoti.
let a = 10;
let b = a; // Copy of `a`
b = 20;
console.log(a); // Output: 10
console.log(b); // Output: 20
//- Yahan `a` aur `b` independent hain.

/*
#### **Non-Primitive Types (Referencing):**
Non-primitive variables ek **reference** store karte hain. Agar ek variable ka value change karein, toh actual object/array modify hota hai, kyunki dono variables heap ke same memory location ko point karte hain.

##### **Example:**/
//Yahan pa jb hm obj1 or obj2 bantay ha phir hm obj2 ma obj1 ko assign karte hain toh obj1 aur obj2 ek hi heap memory location ko point karte hain or jb hm koi bi changes obj2 ma karty ha to wo actual value par hi effect karte hain kyunki heap mein non-primitive data ka actual data hota hai.is tarha jb koi changes ho gye to wo actual data ma bi chage ho ga jaisy nechay daikhaye.
let obj1 = { name: "Ali" };
let obj2 = obj1; // Reference of `obj1`
obj2.name = "Aqdas";
console.log(obj1.name); // Output: "Aqdas"
console.log(obj2.name); // Output: "Aqdas"
//- Yahan `obj1` aur `obj2` ek hi heap memory location ko point karte hain. isi lya yea independent ha

/*
### **4. Misunderstanding: "Changes happen to the original value" **
Yeh highlight ye point kar raha hai ke **heap memory** mein jo changes hote hain, woh original value par hi effect karte hain kyunki heap mein non-primitive data ka actual data hota hai. Agar reference use karke change karein, toh woh heap memory update hoti hai.

#### **Simplified Example:**/
//Yahan pa array liya huwa ha
let arr1 = [1, 2, 3];
let arr2 = arr1; // Reference of `arr1`
arr2.push(4); // Modifies the heap-stored array
arr2[4] = 5;
console.log(arr1); // Output: [1, 2, 3, 4, 5]
console.log(arr2); // Output: [1, 2, 3, 4, 5]
//- Is case mein `arr1` aur `arr2` ek hi array ko point kar rahe hain.or dono independent hain

/*Combination of Primitive and Non-Primitive:
Object aur Array ke Values ko Primitive ya Non-Primitive kaise Decide Kiya Jata Hai?
Object ke Case mein:
Object ke andar jo values hain, unka type decide karega ke wo primitive hain ya non-primitive.
Example:*/
let object1 = {
    name: "Ali",          // Primitive value (string)
    age: 25,              // Primitive value (number)
    friends: ["Sara"],    // Non-primitive value (array)
    address: { city: "Lahore" } // Non-primitive value (object)
};
/*
Memory Allocation: obj ka reference stack mein hoga.
"Ali" aur 25 (primitive values) directly object ke andar heap memory mein store hongi.
["Sara"] aur { city: "Lahore" } ke references heap memory mein object ke andar honge, lekin unka actual data heap ke alag portion mein hoga.*/
let object2 = object1;
object2.friends.push("Zara");
object2.friends[0]= ("Amna");//Replace the Sara To Amna
object2.address.city = "Karachi";
object2.name = "Aqdas-Ali";
object2.age = 23;
console.log(object2);//Yahan ma na object2 ma changes ki ha lakin object1 yani actual object ma bi changes ho jaye ge
/*Output:{ name: 'Aqdas-Ali', age: 23, friends: [ 'Amna', 'Zara' ], address: { city: 'Karachi' } } */
console.log(object1);//same as object2 actual is changed
/*Array ke Case mein: Array ke andar jo values hain, unka type decide karega ke wo primitive hain ya non-primitive.
Example:*/
let array1 = [30, "Ali", { city: "Karachi" }, ["Zara", "Sara"]];//Actual array1 data is 30, "Ali", { city: "Karachi" }, ["Zara", "Sara"]
/*Memory Allocation: arr ka reference stack mein hoga. 30 aur "Ali" (primitive values) directly heap ke array ke andar store hongi. { city: "Karachi" } aur ["Zara", "Sara"] ke references heap ke array mein honge, aur unka actual data heap ke alag portion mein hoga.*/
let array2 = array1;
array2[1] = "Aqdas-Ali";
array2[2].city = "Lahore";
array2[3][0] = "Amna";
console.log(array2);
/*Output: [ 30, 'Aqdas-Ali', { city: 'Lahore' }, [ 'Amna', 'Sara' ] ]*/
console.log(array1);//Actual bi changed ho chuka ho ga 

/*
JavaScript mein **function ke through kisi object ya array ko modify ya overwrite karna** ka behavior samajhne ke liye hum **visualization** ke zariye step-by-step samajhte hain. Aaiye, pehle dekhte hain kab function **change nahi hota** aur kab **change hota** hai.

### **Scenario 1: Modifying the Object or Array** (same reference)
Jab hum **object ya array ke values ko change karte hain**, toh hum **reference ko change nahi karte**. Yeh "modifying" kehlata hai.
#### **Visualization:**
- Hum ek **object ya array** pass karte hain function mein.
- Function ke andar hum us **object ya array** ke kisi specific value ko change karte hain.
- **Reference wahi ka wahi rehta hai**, aur jo value humne change ki thi, woh **directly original data pe affect hoti hai**/
let user = { name: "Ali", age: 25 }; // Initial object
function modifyObject(obj) {
  obj.name = "Zara";  // Modifying the name property
  obj.age = 26;  // Modifying the age property
}
modifyObject(user);

console.log(user); // Output: { name: "Zara", age: 26 }
/*
#### **Visualization Breakdown:**
- `user` ka reference pass ho raha hai function mein.
- `obj.name` or `obj.age` ko change karna matlab **original object** ka **data update ho gaya**.
- Reference ya address change nahi hua, **value** change hui hai.
**Key Points:**
- **Value** modify hoti hai.
- **Reference** same rehta hai.*/

/*
### **Scenario 2: Overwriting the Object or Array**
Jab hum **object ya array ko naya assign karte hain** inside the function, toh hum **reference ko replace kar dete hain**. Isse function ke andar **original data** ko koi farq nahi padta.

#### **Visualization:**
- Hum **function mein naya object ya array assign karte hain**.
- Yeh **naya object** ya **naya array** ek **new reference** create karta hai, jo original data se koi connection nahi rakhta.*/
let user1 = { name: "Ali", age: 25 }; // Initial object
function overwriteObject(obj) {
  obj = { name: "Ahmed", age: 30 }; // Overwriting with a new object
}
overwriteObject(user1);
console.log(user1); // Output: { name: "Ali", age: 25 }

/*
#### **Visualization Breakdown:**
- Jab hum `obj = { name: "Ahmed" }` likhte hain, toh **`obj` ka reference replace ho jata hai**.
- **Original `user` object** pe koi asar nahi hota, kyunki function ke andar `obj` ki value ek nayi memory address ko point kar rahi hai.
  
**Key Points:**
- **Reference** change hota hai.
- **Original object** unchanged rehta hai.*/

/*
### **Scenario 3: Modifying and Overwriting in an Array**
Agar hum array ko pass karte hain, toh **modifying** aur **overwriting** ka behavior kuch aisa hoga:
#### **Modifying an Array:**/

let friends = ["Sara", "Zain"];

function modifyArray(arr) {
  arr[0] = "Ali";  // Modifying the first element
}

modifyArray(friends);

console.log(friends); // Output: ["Ali", "Zain"]

//- Humne `friends` array ko modify kiya, lekin **array ka reference wahi ka wahi raha**, aur **first element** change ho gaya.

/*
#### **Overwriting an Array:**/
let friends1 = ["Sara", "Zain"];
function overwriteArray(arr) {
  arr = ["Ahmed", "Usman"];  // Overwriting with a new array
}
overwriteArray(friends1);

console.log(friends1); // Output: ["Sara", "Zain"]

//- Yahan `arr` ko **nayi array** assign ki gayi hai, lekin **original `friends1` array** unaffected rehti hai.

/*
### **Conclusion:**

1. **Modifying** mein hum **data ko change karte hain** (e.g., object ya array ke values) lekin **reference wahi ka wahi rehta hai**. Iska matlab hai, original object ya array ko **directly update** kiya jata hai.
2. **Overwriting** mein hum **reference ko replace kar dete hain** with a completely new object or array. Isse **original object ya array ko koi effect nahi hota**.

Is tarah se aap **modifying** aur **overwriting** ka behavior samajh sakte hain, aur jab aapko kisi function mein values ko change karna ho, toh aapko yeh decide karna hota hai ke aapko **modifying** karni hai ya **overwriting**.
 */

/*
Why Functions Behave This Way?
Functions behave exactly like objects:
Jab hum function ko assign karte hain, to reference copy hota hai.
Jab hum nayi value assign karte hain, to reference update hota hai (overwrite hota hai).
Agar hum function ke andar kuch modify karna chahein, to wo possible hi nahi hota, kyunki functions ka internal implementation immutable hota hai (unke andar variables ya properties nahi hote).
Practical Comparison*/

// Objects:
let obja = { key: "value" };
let objb = obja; // Reference copy
objb.key = "newValue"; // Modify original object
console.log(obja.key); // Output: newValue

//Functions:
function func1() {
  console.log("Original Function");
}
let func2 = func1; // Reference copy
func2 = function () {
  console.log("Modified Function");
}; // Reference overwrite

func1(); // Output: Original Function
func2(); // Output: Modified Function

/*Summary:
Objects and Arrays:
Agar aap unke andar ka data change karte hain, to heap ka actual data modify hota hai.
Agar aap unko naya value assign karte hain, to reference change hota hai.
Functions:
Aap sirf reference copy ya overwrite kar sakte hain. Functions ka andar ka implementation modify nahi hota.
*/
