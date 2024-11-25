// 1. Object Creation
// Multiple ways to create objects
// Object literal notation
let person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    isEmployed: true
};

// Constructor function
function Person(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.getFullName = function() {
        return `${this.firstName} ${this.lastName}`;
    };
}
let person2 = new Person("Jane", "Smith", 25);

// Object.create() method
let personPrototype = {
    greet() {
        return `Hello, my name is ${this.firstName}`;
    }
};
let person3 = Object.create(personPrototype);
person3.firstName = "Alice";
person3.lastName = "Johnson";

// 2. Object Properties
// Accessing properties
console.log(person.firstName);  // Dot notation
console.log(person['lastName']);  // Bracket notation

// Adding and modifying properties
person.email = "john@example.com";  // Adding new property
person.age = 31;  // Modifying existing property

// Deleting properties
delete person.isEmployed;

// 3. Property Descriptors
let car = {
    brand: "Toyota"
};

// Defining property with more control
Object.defineProperty(car, 'model', {
    value: "Corolla",
    writable: false,  // Cannot be changed
    enumerable: true,
    configurable: false  // Cannot be deleted
});

// 4. Object Methods
let calculator = {
    // Method definition
    add(a, b) {
        return a + b;
    },
    
    // Method with object context
    multiply(a, b) {
        return a * b;
    }
};

// 5. Computed Property Names
let dynamicKey = "specialProperty";
let dynamicObject = {
    [dynamicKey]: "This is a dynamic property"
};

// 6. Spread Operator with Objects
let baseInfo = { name: "Base Object" };
let extendedInfo = { 
    ...baseInfo, 
    additionalProperty: "Extended Info" 
};

// 7. Object Destructuring
let { firstName, lastName } = person;

// 8. Nested Objects
let employee = {
    id: 1,
    personalInfo: {
        name: "John Doe",
        contact: {
            email: "john@company.com",
            phone: "123-456-7890"
        }
    },
    jobDetails: {
        position: "Developer",
        department: "Engineering"
    }
};

// 9. Object Methods and Prototype
Object.prototype.customMethod = function() {
    console.log("A custom method added to all objects");
};

// 10. Object Freezing and Sealing
let immutableObject = Object.freeze({
    constant: "Cannot be modified"
});

let sealedObject = Object.seal({
    modifiableProperty: "Can be changed"
});

// 11. Object.keys(), Object.values(), Object.entries()
let fruits = {
    apple: 5,
    banana: 3,
    orange: 2
};

console.log(Object.keys(fruits));     // ['apple', 'banana', 'orange']
console.log(Object.values(fruits));   // [5, 3, 2]
console.log(Object.entries(fruits));  // [['apple', 5], ['banana', 3], ['orange', 2]]

// 12. Advanced Object Creation with Class Syntax
class Vehicle {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }

    displayInfo() {
        return `${this.make} ${this.model}`;
    }
}

let car1 = new Vehicle("Honda", "Civic");