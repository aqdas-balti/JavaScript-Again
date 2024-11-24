/*
Type casting (also known as type conversion) is the process of converting a value from one data type to another.
In JavaScript, this can be done explicitly by using built-in functions or implicitly by JavaScript itself.
There are two types of type conversion
1: Explicit Type Casting
The programmer explicitly (itself) converts the type using JavaScript functions or methods.
Examples include using String(), Number(), or Boolean() etc.*/

//1:Based on Conversion Method
// 1. Implicit Type Casting (Type Coercion):  It performed Automatically by the programming language

console.log("444444444444444444");
//1.3) Comparisons implicitly:
let isEqual = "10"==10;//Implicitly converted 10 to "10"
console.log(isEqual);//true
console.log(typeof isEqual);//boolean

//2.Explicitly type casting: It Performed manually by the programmer using casting methods, functions, or operators.
//2.1) Convert String to Number:
console.log("555555555555555555");
let str = "Hello";
console.log("Actual Ans of str is :",str);//Hello
console.log("Actual Datatype of str is :",typeof str);//string
//After Conversing string into number check below:
let strToNo = Number(str);
console.log("After Converted strToNo value is :",strToNo);//NaN (not a number)
console.log("After converted typeof strToNo is :",typeof strToNo);//number

//2.2) Convert Number to String:
console.log("6666666666666666666");
let number = 24;
console.log("Actual Ans of No is :",number);//24
console.log("Actual Datatype of No is :",typeof number);//number
//After Conversing number into string check below:
let noToStr = String(number);
console.log("After Converted noToStr value is :",noToStr);//24
console.log("After converted typeof noToStr is :",typeof noToStr);//string







// //Converting Numbers to Strings
// console.log("******************0001********************");
// //Number datatype conversing into string starts from here:
// let score = 60;
// //Actual Answers are:
// console.log("Actual Ans is:", score); //60
// console.log("Actual typeof (60) is:", typeof score); //number
// console.log("This is the actual typeof with another way of writing:",typeof (score)); //number

// //After converted number into string check below:
// let convertIntoString = String(score);//String conversion method syntax
// console.log("Converted value is:",convertIntoString);
// console.log("This is converted (number) typeof into (string) is :", typeof convertIntoString); //Converted into (string)

// console.log("******************0002********************");
// //Boolean Datatype conversing into number, and string starts from here:
// console.log("\n");
// let isLogedIn = true;
// // Actual Answers are: 
// console.log("Actual Ans is:", isLogedIn);//true
// console.log("Actual typeof (true) is:", typeof isLogedIn);//boolean

// //After converted boolean into number check below:
// let boolNumber = Number(isLogedIn); //Number conversion method syntax
// console.log("Converted value is:", isLogedIn);//Boolean converted into number 1 for true(1)and false(0)
// console.log("This is Converted (boolean) typeof into (number is :", typeof isLogedIn);//number

// //After boolean converted into string check below:
// let boolToStr= String(isLogedIn)//String conversion method syntax
// console.log("Converted value is:",boolToStr);//true
// console.log("This is Converted (boolean) typeof into (string) is :",typeof boolToStr);//string

// console.log("******************0003********************");
// //Null datatype conversing into number, string, and boolean stars from here:
// console.log("\n");
// let nullCon = null;
// //Actual Answers are:
// console.log("Actual Ans is:", nullCon); //null
// console.log("Actual typeof (null) is:", typeof nullCon); //object

// //After null Converted null into number:
// let nullToNumber = Number(nullCon);//Number conversion method syntax
// console.log("Converted value is:", nullToNumber); //0
// console.log("This is Converted (null) typeof into (number) is :", typeof nullToNumber); //number

// //After converted null into string check below
// console.log("\n");
// let nullToString = String(nullCon); //Converted to number
// console.log("Converted value is:", nullToString); //null
// console.log("This is Converted (null) typeof into (string) is :", typeof nullToString); //string

// //After converted null into boolean check below
// let nullToBool=Boolean(nullCon);
// console.log("Converted value is:",nullToBool);//false
// console.log("This is Converted (null) typeof into (boolean) is :",typeof nullToBool);//boolean


// //Undefined data type is object in actual converting it into string, number,and boolean
// console.log("\n");
// console.log("******************0004********************");
// let undefineVal = undefined;
// //Actual Answers are:
// console.log("Actual Ans is:", undefineVal); //undefined
// console.log("Actual typeof (undefined) is :", typeof undefineVal); //undefined

// //Converting undefined into number:
// console.log("\n");
// let undefinedToNumber = Number(undefineVal); //Converted to number
// console.log("Converted value is:", undefinedToNumber); //NaN (not s number)
// console.log("This is Converted value of (undefined) typeof into (number) is :", typeof undefinedToNumber); //number

// //Converting undefined into string:
// console.log("\n");
// let undefinedToStr= String(undefineVal);
// console.log("Converted value is:",undefinedToStr);//undefined
// console.log("This is Converted value of (undefined) typeof into (string) is :", typeof undefinedToStr); //string

// //converting undefined into boolean:
// console.log("\n");
// let undefinedToBoolean = Boolean(undefineVal);
// console.log("Converted value is:",undefinedToBoolean);//false
// console.log("This is Converted value of (undefined) typeof into (boolean) is :", typeof undefinedToBoolean);//boolean


// /********************************Operation Conversion********************************** */
// console.log("02-Conversion Operations:");
// let str1 = "Hello";
// let str2 = "World!";
// let str = str1 + str2;
// console.log(str);
// console.log(1 + 2 + "3"); //33 values will be react with the first data type in this first data type is no that's why firstly add two no's then concatinate the 3rd no
// console.log(typeof (1 + 2 + "3")); //string
// console.log("1" + 2 + 3); //123
// console.log(typeof ("1" + 2 + 3)); //string
// console.log(2 * 3 + (3 + 1) * 5); //26
// console.log(true); //true
// console.log(+true); //1 and (true+ isn't valid it simply generates error)
// console.log(+""); //0 because "" is false in boolean that's why when increment it generates its original valus 0
// console.log(+"Aqdas"); //NaN (Not a Number)
// let num1, num2, num3;
// num1 = num2 = num3 = 3 + 3;
// console.log(num1); //6
// let gameCounter = 99;
// gameCounter++; //Postfix increment technique
// console.log(gameCounter); //100
// ++gameCounter; //Prefix increment technique
// console.log(gameCounter); //101
// //Copied from internet of prefix and postfix
// let x = 3;
// const y = x++;

// console.log("x:", x, "y:", y);
// // Expected output: "x:4, y:3"

// let a = 3;
// const b = ++a;

// console.log("a:", a, "b:", b);
// // Expected output: "a:4, b:4"


/*
Type casting (type conversion) refers to changing a variable from one data type to another. Below is a comprehensive explanation of **all types of type casting**:

---

### **1. Based on Conversion Method**
#### **a. Implicit Type Casting (Type Coercion)**

- **Definition:** 
  Automatically performed by the programming language, often when mixing different data types in an operation.
- **Key Characteristics:**
  - No manual intervention needed.
  - May lead to unexpected results.
  - Used to maintain consistency during operations.

**Examples:**
1. **String Concatenation with Number**:
    ```javascript
    let result = "Hello" + 5; // Implicitly converts 5 to "5"
    console.log(result); // "Hello5"
    ```

2. **Boolean in Arithmetic**:
    ```javascript
    let sum = true + 2; // true is implicitly converted to 1
    console.log(sum); // 3
    ```

3. **Comparisons**:
    ```javascript
    let isEqual = "10" == 10; // "10" is converted to 10
    console.log(isEqual); // true
    ```

#### **b. Explicit Type Casting**

- **Definition:** 
  Performed manually by the programmer using casting methods, functions, or operators.
- **Key Characteristics:**
  - Offers control over the conversion process.
  - Helps avoid unintended results.

**Examples:**
1. **String to Number**:
    ```javascript
    let str = "123";
    let num = Number(str); // Explicit conversion
    console.log(num); // 123 (as a number)
    ```

2. **Number to String**:
    ```javascript
    let num = 456;
    let str = String(num); // Explicit conversion
    console.log(str); // "456"
    ```

---

### **2. Based on Data Types**
#### **a. String Conversion**
Converts a value to a string.

**Explicit Conversion:**
1. Using `String()` function:
    ```javascript
    let value = true;
    console.log(String(value)); // "true"
    ```

2. Using `.toString()` method:
    ```javascript
    let value = 123;
    console.log(value.toString()); // "123"
    ```

**Implicit Conversion:**
1. During concatenation with strings:
    ```javascript
    let result = 10 + " apples";
    console.log(result); // "10 apples"
    ```

---

#### **b. Number Conversion**
Converts a value to a number.

**Explicit Conversion:**
1. Using `Number()` function:
    ```javascript
    let str = "456";
    console.log(Number(str)); // 456
    ```

2. Using `parseInt()` or `parseFloat()`:
    ```javascript
    let str = "123.45abc";
    console.log(parseInt(str)); // 123
    console.log(parseFloat(str)); // 123.45
    ```

**Implicit Conversion:**
1. During arithmetic operations:
    ```javascript
    let result = "5" * 2; // "5" is implicitly converted to 5
    console.log(result); // 10
    ```

---

#### **c. Boolean Conversion**
Converts a value to `true` or `false`.

**Explicit Conversion:**
1. Using `Boolean()` function:
    ```javascript
    let value = 0;
    console.log(Boolean(value)); // false
    ```

**Implicit Conversion:**
1. In conditional statements:
    ```javascript
    if ("non-empty string") {
        console.log("This is true!"); // Runs because non-empty strings are truthy
    }
    ```

---

#### **d. Object to Primitive Conversion**
Converts objects to primitive types like strings or numbers.

**Explicit Conversion:**
1. Using `toString()` or `valueOf()`:
    ```javascript
    let obj = { value: 10 };
    obj.toString = function() {
        return "Object as string";
    };
    console.log(obj.toString()); // "Object as string"
    ```

**Implicit Conversion:**
1. During string concatenation:
    ```javascript
    let obj = { value: 10 };
    console.log("Value is: " + obj); // "Value is: [object Object]"
    ```

---

#### **e. Date to Number**
Converts a date to a numeric timestamp.

**Explicit Conversion:**
1. Using `Number()`:
    ```javascript
    let date = new Date();
    console.log(Number(date)); // Timestamp
    ```

2. Using `.getTime()`:
    ```javascript
    let date = new Date();
    console.log(date.getTime()); // Timestamp
    ```

**Implicit Conversion:**
1. During subtraction:
    ```javascript
    let date1 = new Date("2024-01-01");
    let date2 = new Date("2024-01-02");
    console.log(date2 - date1); // 86400000 (difference in milliseconds)
    ```

---

### **3. Special Types of Casting**

#### **a. Null and Undefined**
- `null` converts to:
  - `0` when cast to a number.
  - `"null"` when cast to a string.

- `undefined` converts to:
  - `NaN` when cast to a number.
  - `"undefined"` when cast to a string.

**Examples:**
```javascript
console.log(Number(null)); // 0
console.log(String(undefined)); // "undefined"
```

#### **b. Symbol to String**
Symbols can be explicitly converted to strings but not implicitly.

**Explicit Conversion:**
```javascript
let sym = Symbol("description");
console.log(String(sym)); // "Symbol(description)"
```

**Implicit Conversion:**
```javascript
let sym = Symbol("test");
console.log("Symbol: " + sym); // Error: Cannot convert a Symbol value to a string
```

---

### **Comparison of Explicit vs Implicit Type Casting**

| **Feature**            | **Explicit Casting**                    | **Implicit Casting**             |
|-------------------------|------------------------------------------|-----------------------------------|
| **Control**             | Full control over the conversion process | Automatically handled by the language |
| **Readability**         | More readable and predictable            | May lead to unexpected results   |
| **Performance**         | Slightly slower as it involves manual code | Faster as it's built into the runtime |
| **Common Use Cases**    | Data validation, user input sanitization  | Simplifying mixed-type operations |

---

### **Truthiness and Falsiness in Type Casting**
Values are either **truthy** (convert to `true`) or **falsy** (convert to `false`) when evaluated in boolean contexts.

- **Falsy Values:**
  - `0`
  - `""` (empty string)
  - `null`
  - `undefined`
  - `NaN`
  - `false`

- **Truthy Values:**
  - Any value not in the falsy list (e.g., `"0"`, `[]`, `{}`).

**Example:**
```javascript
if (0) {
    console.log("Won't run");
} else {
    console.log("Runs because 0 is falsy");
}
```

---

This detailed breakdown covers all types of type casting in JavaScript. Let me know if you need further clarification or examples!u
*/