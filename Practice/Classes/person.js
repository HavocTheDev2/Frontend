// We will create a person class that will use a config object to set the name and age of the person
// We will also create a method that will return the name and age of the person

// Create a class called Person
class Person {
  // Create a constructor that will take a config object
  constructor(config) {
    // Set the name and age of the person
    this.name = config.name;
    this.age = config.age;
  }

  // Create a method that will return the name and age of the person
  getNameAndAge() {
    return `${this.name} is ${this.age} years old`;
  }
}

// Create a config object
const Configuration = {
    name: "John",
    age: 30
}

// Create a new instance of the Person class
const person = new Person(Configuration);

// Call the getNameAndAge method on the person object
console.log(person.getNameAndAge()); // John is 30 years old