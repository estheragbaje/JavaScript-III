/*

  In order to do these exercises you'll need your newly acquired knowledge on
  constructor functions, methods, prototypes and the `this` keyword.
  Here's an example of an exercise:

  TASK 0:

  - Build an Airplane constructor that takes a name.
  - Give airplanes the ability to take off and land.
  - If a plane takes off, its "isFlying" property is true.
  - If a plane lands, its "isFlying" property is false.

  SOLUTION CODE:

  function Airplane(name) {
    this.name = name;
    this.isFlying = false;
  }
  Airplane.prototype.takeOff = function () {
    this.isFlying = true;
  }
  Airplane.prototype.land = function () {
    this.isFlying = false;
  }

  HOW TO TEST OUR SOLUTION:

  const jumbo = new Airplane('Jumbo');
  console.log(jumbo.name)              // 'Jumbo'
  console.log(jumbo.isFlying)          // false
  jumbo.takeOff();
  console.log(jumbo.isFlying)          // true
  jumbo.land();
  console.log(jumbo.isFlying)          // false
*/

/*

  TASK 1

  - Build a Person Constructor that takes name and age.
  - Give persons the ability to greet by returning a string stating name and age.
  - Give persons the ability to eat edibles.
  - When eating an edible, it should be pushed into a "stomach" property which is an array.
  - Give persons the ability to poop.
  - When pooping, the stomach should empty.



  TASK 2

  - Build a Car constructor that takes model name and make.
  - Give cars the ability to drive a distance.
  - By driving a car, the distance driven should be added to an "odometer" property.
  - Give cars the ability to crash.
  - A crashed car can't be driven any more. Attempts return a string "I crashed at x miles!", x being the miles in the odometer.
  - Give cars the ability to be repaired.
  - A repaired car can be driven again.

  TASK 3

  - Build a Baby constructor that subclasses the Person built earlier.
  - Babies of course inherit the ability to greet, which can be strange.
  - Babies should have the ability to play, which persons don't.
  - By playing, a string is returned with some text of your choosing.

  TASK 4

  Use your imagination and come up with constructors that allow to build objects
  With amazing and original capabilities. Build 3 small ones, or a very
  complicated one with lots of state. Surprise us!

*/

/*

  STRETCH TASK

  Object oriented design is commonly used in video games. You will be implementing several constructor functions with their correct inheritance hierarchy.
  In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid.
  At the bottom of this file are 3 objects that all end up inheriting from Humanoid.  Use the objects at the bottom of the page to test your constructor functions.

  Each constructor function has unique properties and methods that are defined in their block comments below:
*/

/*
  === GameObject ===
  * createdAt
  * name
  * dimensions (These represent the character's size in the video game)
  * destroy() // prototype method that returns: `${this.name} was removed from the game.`
*/

/*
  === CharacterStats ===
  * healthPoints
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/

/*
  === Humanoid (Having an appearance or character resembling that of a human.) ===
  * team
  * weapons
  * language
  * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
  * should inherit destroy() from GameObject through CharacterStats
  * should inherit takeDamage() from CharacterStats
*/

/*
 * Inheritance chain: GameObject -> CharacterStats -> Humanoid
 * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
 * Instances of CharacterStats should have all of the same properties as GameObject.
 */

// Test you work by un-commenting these 3 objects and the list of console logs below:

/*
  const mage = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 1,
      height: 1,
    },
    healthPoints: 5,
    name: 'Bruce',
    team: 'Mage Guild',
    weapons: [
      'Staff of Shamalama',
    ],
    language: 'Common Tongue',
  });
  const swordsman = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 2,
      height: 2,
    },
    healthPoints: 15,
    name: 'Sir Mustachio',
    team: 'The Round Table',
    weapons: [
      'Giant Sword',
      'Shield',
    ],
    language: 'Common Tongue',
  });
  const archer = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 4,
    },
    healthPoints: 10,
    name: 'Lilith',
    team: 'Forest Kingdom',
    weapons: [
      'Bow',
      'Dagger',
    ],
    language: 'Elvish',
  });
  console.log(mage.createdAt); // Today's date
  console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
  console.log(swordsman.healthPoints); // 15
  console.log(mage.name); // Bruce
  console.log(swordsman.team); // The Round Table
  console.log(mage.weapons); // Staff of Shamalama
  console.log(archer.language); // Elvish
  console.log(archer.greet()); // Lilith offers a greeting in Elvish.
  console.log(mage.takeDamage()); // Bruce took damage.
  console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.
*/

// TASK 1

//   - Build a Person Constructor that takes name and age.
//   - Give persons the ability to greet by returning a string stating name and age.
//   - Give persons the ability to eat edibles.
//   - When eating an edible, it should be pushed into a "stomach" property which is an array.
//   - Give persons the ability to poop.
//   - When pooping, the stomach should empty.

//Solution to task 1
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.stomach = [];
}

Person.prototype.greet = function() {
  return `Hiii, my name is ${this.name} and I am ${this.age} years old`;
};

Person.prototype.eating = function(food) {
  this.stomach.push(food);
};

Person.prototype.poop = function() {
  this.stomach = [];
};

const sade = new Person("soso", 20);
sade.eating("chicken");
sade.eating("rice");
sade.poop();
console.log(sade.stomach);

//TASK 2
// - Build a Car constructor that takes model name and make.
//   - Give cars the ability to drive a distance.
//   - By driving a car, the distance driven should be added to an "odometer" property.
//   - Give cars the ability to crash.
//   - A crashed car can't be driven any more. Attempts return a string "I crashed at x miles!", x being the miles in the odometer.
//   - Give cars the ability to be repaired.
//   - A repaired car can be driven again.

//Solution to task 2

function Car(name, make) {
  this.name = name;
  this.make = make;
  this.canBeDriven = true;
}

Car.prototype.drive = function(distance) {
  this.odometer = distance;
};
Car.prototype.crash = function() {
  this.canBeDriven = false;
  return `I crashed at ${this.odometer} miles!`;
};

Car.prototype.repair = function() {
  this.canBeDriven = true;
};

const ford = new Car("Ford", "Explorer");
ford.drive(20);
let crasher = ford.crash();
console.log(crasher);
ford.repair();
console.log(ford);

// TASK 3

// - Build a Baby constructor that subclasses the Person built earlier.
// - Babies of course inherit the ability to greet, which can be strange.
// - Babies should have the ability to play, which persons don't.
// - By playing, a string is returned with some text of your choosing.

//Solution to task 3

function Baby(name, age) {
  Person.call(this, name, age);
}
Baby.prototype = Object.create(Person.prototype);
Baby.prototype.play = function() {
  return `Daddy I want to play`;
};

const demi = new Baby("Demi", 1);
console.log(demi);
// TASK 4

// Use your imagination and come up with constructors that allow to build objects
// With amazing and original capabilities. Build 3 small ones, or a very
// complicated one with lots of state. Surprise us!

//Created a constructor that takes name, email and password during a sign up
//Gave them the ability to login with their email and password
//If user logs in succcessfully, it returns a string "I have successfully logged in"
//If login is not successful, it returns "Email or Password Invalid"
//Gave user the ability to reset password
//Gave user the ability to log out

//Solution to task 4
function User(name, email, password) {
  this.name = name;
  this.email = email;
  this.password = password;
  this.isLoggedIn = true;
}

User.prototype.login = function(email, password) {
  if (email === this.email && password === this.password) {
    return `I have successfully logged in`;
  } else {
    return `Email or Password Invalid`;
  }
};

User.prototype.logout = function() {
  this.isLoggedIn = false;
};

User.prototype.resetPassword = function(newPassword) {
  this.password = newPassword;
  return `Password successfully reset`;
};

const segun = new User("Segun", "segun@yahoo.com", "segun001");
console.log(segun);

segun.logout();
console.log(segun);

const outcome = segun.login("segun@yahoo.com", "segun1");
console.log(outcome);

const outcome1 = segun.login("segun@yahoo.com", "segun001");
console.log(outcome1);

const outcome2 = segun.resetPassword("sage");
console.log(outcome2);

console.log(segun);
