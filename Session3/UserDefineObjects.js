/*User-defined objects: Objects that you create using object literals, constructors, or the class keyword.
Built-in objects: Predefined objects provided by JavaScript for various functionalities.
1. User-Defined Objects
These are custom objects created by developers.

a. Object Literal: A fixed value written directly in the source code. JavaScript literals represent values of various data types.
//Examples:
Number Literal: 10, 3.14
String Literal: "Hello", 'World'
Object Literal: { key: "value" }
Array Literal: [1, 2, 3]*/

const number = 42;       // Number literal
const name = "Aqdas";     // String literal
const obj = { age: 30 }; // Object literal
const arr = [1,2,3,4,5]; //Object literal

//Object With in function literals
const person = {
  name: "Aqdas-Ali",
  age: 30,
  greet: function() {
    console.log(`Hello, my name is ${this.name}`);
  }
};
person.greet(); // Output: Hello, my name is John
// console.log(person.greet());//Output: Hello, my name is John [Note: person.greet() is calling the greet method, which contains a console.log inside it. This console.log outputs "Hello, my name is John", but the greet method itself does not return anything (it implicitly returns undefined). ]
console.log(typeof person);//object
//console.log(greet); It is not defined itself that's why here it will generate error that greet is not defined

// Create a Symbol
const mySymbol = Symbol('mySymbol');//Symbol1(mySymbol)
// Create an object with the Symbol as a property
const person1 = {
  name: 'Ali',
  age: 20,
  [mySymbol]: 'secretData' // Using the Symbol as a property key
};
// Print the Symbol itself
console.log(mySymbol); // Output: Symbol(mySymbol)
// Print the Symbol property value in the object
console.log(person1[mySymbol]); // Output: secretData
// Print the typeof the Symbol
console.log(typeof mySymbol); // Output: symbol

console.log("****************Object Literals Ends From Here*****************");

/*b. Constructor Function: A special function used to create objects and initialize them. It is typically called with the new keyword.
Example:*/
function Person(name, age) {
  this.name = name;
  this.age = age;
}
const Aqdas = new Person("Aqdas-Ali", 24);
console.log(Aqdas.name); // Output: Aqdas-Ali

function Car(make, model) {
  this.make = make;
  this.model = model;
}
const car1 = new Car("Toyota", "Corolla");
console.log(car1.make); // Output: Toyota
console.log("****************Object Constructor Ends From Here*****************");

/*c. Class: A blueprint for creating objects with predefined properties and methods.
Example:*/
class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}

const dog = new Animal("Dog");
dog.speak(); // Output: Dog makes a noise.

class Food {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(`${this.name} makes hep in body building.`);
  }
}
const banana = new Animal("Banana");
banana.speak(); // Output: Banana makes hep in body building.
console.log("****************Object Class Ends From Here******************");
