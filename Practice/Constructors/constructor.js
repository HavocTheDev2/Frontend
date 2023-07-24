// In this file we will practice creating constructors
// Constructors are used to create objects

// Create a constructor called Person
function Person() {
  // Set the name and age of the person
  this.name = "John";
  this.age = 30;
}

// Create a new instance of the Person constructor
const person = new Person();

// Log the person object
console.log(person); // Person { name: 'John', age: 30 }

// Path: Practice/Constructors/constructor.js
