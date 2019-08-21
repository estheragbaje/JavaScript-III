/* The for principles of "this";
 * in your own words. explain the four principle for the "this" keyword below.
 *
 * 1. Window/Global Object Binding: In the global scope, the keyword 'this' refers to the global or window object. Hence, in a browser, the value of “this” will be the window/console Object.
 * 2. Implicit Binding: If a function is called by a preceding dot, the object that stands before that dot is what 'this' keyword refers to.
 * 3. New Binding: When the new keyword is used(a constructor), 'this' refers to the specific instance of the object that is created and returned by the constructor function.
 * 4. Explicit Binding: This involves forcing a function call to use a particular object for 'this' binding, without putting a property function reference on the object.
 *
 * write out a code example of each explanation above
 */

// Principle 1

// code example for Window Binding

function myAge(age) {
  console.log(this);
  return age;
}

// Principle 2

// code example for Implicit Binding

const driver = {
  name: "Soso",
  id: 45,
  speak: function() {
    console.log(
      `My name is ${this.name} with an id of ${this.id}, I am your driver.`
    );
  }
};

// Principle 3

// code example for New Binding

function Animal(name, color, age) {
  this.name = name;
  this.color = color;
  this.age = age;
  console.log(
    `This is a ${this.color} ${this.name} that is ${this.age} years old`
  );
  console.log(this);
}

const cat = new Animal("cat", "black", 2);

// Principle 4

// code example for Explicit Binding
function greet() {
  console.log(this.name);
}

const person = {
  name: "Sade"
};

greet.apply(person, [args]);
