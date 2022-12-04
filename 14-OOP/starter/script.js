'use strict';

// // Constructor Function
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;

  // Never do this
  // this.calcAge = function () {
  //   console.log(2037 - this.birthYear);
  // };
};

const prince = new Person('Prince', 2002);
// console.log(prince instanceof Person);

// 1. New {} is created
// 2. function() is created, this =  is set to above {}
// 3. {} is linked to prototype i.e. linking to __proto__ (obj.__proto is set to Person.prototype)
// 4. function automatically return {}

// new Person('Rimil', 2000);
// new Person('Joy', 2002);

// // Prototypes
// // Prototypal interface
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

// // Person.prototype is not a part of Person constructor function. It maps any additional function to the objects created via delegating to the Person constructor. All objects don't carry around said function, but delegate it to Person.prototype which is same as obj.__proto__

// prince.calcAge();
// console.log(prince, prince.__proto__, Person.prototype);

// console.log(prince.__proto__ === Person.prototype); // or
// console.log(Person.prototype.isPrototypeOf(prince));

// must have been called: Person.prototypeOfObject

// // Can also be used to defined data member(property of object)
Person.prototype.species = 'Homo Sapiens';
// console.log(Person.prototype);

// // this does not set ownProperty but inherited prototype property
// console.log(prince.hasOwnProperty('firstName')); // true
// console.log(prince.hasOwnProperty('species')); // false

// // Prototype chain
// // Each object/constructor function created has a prototype link to its parent/ constructor function. This link or chain continues until it reaches the Object i.e. eldest constructor function in JS hierarchy whose __proto__ is null. This is known as Prototype Chain

// console.log('Person.prototype', prince.__proto__); // this is Person.prototype
// console.log('Object.prototype', prince.__proto__.__proto__); // this is Object.prototype.
// console.log('Object.__proto__', prince.__proto__.__proto__.__proto__); // null

// console.dir(Person.prototype.constructor);

const arr = [3, 6, 4, 5, 3, 9, 6, 9, 3]; // same as: new Array === []
// console.log('Array.prototype', arr.__proto__);
// console.log(arr.__proto__.__proto__);

// Never do this tho
// Array.prototype.unique = function () {
//   return [...new Set(this)];
// };

// console.log(arr.unique());

const h1 = document.querySelector('h1');
// console.dir(x => x + 1);

// // ES6 Classes

// class expression
// const PersonCl = class {};

// // class declaration
class PersonCl {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  // Methods will be added to .prototype property
  calcAge() {
    console.log(2037 - this.birthYear);
  }
}

const rimil = new PersonCl('Rimil', 2000);
console.log(rimil);
rimil.calcAge();
// console.log(rimil.__proto__ === PersonCl.prototype);

PersonCl.prototype.greet = function () {
  console.log(`Hey ${this.firstName}`);
};

rimil.greet();

// // Important notes
// 1. Classes are NOT hoisted
// 2. Class are first-class citizens
// 3. Classes are executed in strict mode
