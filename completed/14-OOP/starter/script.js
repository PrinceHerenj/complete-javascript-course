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
// class PersonCl {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }

//   // Methods will be added to .prototype property i.e. Instance Methods
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   }

//   greet() {
//     console.log(`Hey ${this.firstName}`);
//   }

//   get age() {
//     return 2037 - this.birthYear;
//   }

//   // // Set a property that already exists
//   set fullName(name) {
//     if (name.includes(' ')) this._fullName = name;
//     else alert(`${name} is not a full name`);
//   }

//   get fullName() {
//     return this._fullName;
//   }

//   // Static methods
//   static hey() {
//     console.log(`Hey There 🙋‍♂️`);
//   }
// }

// const rimil = new PersonCl('Rimil Riya', 2000);

// console.log(rimil);
// rimil.calcAge();
// console.log(rimil.__proto__ === PersonCl.prototype);

// PersonCl.prototype.greet = function () {
//   console.log(`Hey ${this.firstName}`);
// };

// rimil.greet();

// // Important notes
// 1. Classes are NOT hoisted
// 2. Class are first-class citizens
// 3. Classes are executed in strict mode

// const walter = new PersonCl('Walter White', 1965);
// console.log(walter);

// // SETTER and GETTER

const account = {
  owner: 'jonas',
  movements: [200, 530, 120, 300],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};

// console.log(account.latest);
account.latest = 50;
// console.log(account.movements);

// // Static Methods

Person.hey = function () {
  console.log(`Hey there 🙋‍♂️`);
  // console.log(this); // this is set to object
};

// Person.hey();
// PersonCl.hey();

// // Object.create()

// const PersonProto = {
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   },
//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   },
// };

// const steven = Object.create(PersonProto);

// steven.name = 'Steven';
// steven.birthYear = 2002;

// console.log(steven);
// console.log(steven.__proto__ === PersonProto);

// const sarah = Object.create(PersonProto);
// sarah.init('Sarah', 1979);
// sarah.calcAge();
// console.log(sarah);

// // Inheritance between classes: Constructor

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};

// Linking Prototype
Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const mike = new Student('Mike', 2020, 'Computer Science');
// console.log(mike);
// mike.introduce();
// mike.calcAge();
// console.log(mike instanceof Student);
// console.log(mike instanceof Person);
// console.log(mike instanceof Object);

Student.prototype.constructor = Student;
// console.dir(Student.prototype.constructor);

// console.log('mike.__proto__', mike.__proto__);
// console.log('Student.prototype', Student.prototype, '\n');
// console.log('Student.prototype.__proto__', Student.prototype.__proto__);
// console.log('Person.prototype', Person.prototype);
// console.log(Person.prototype.__proto__ === Object.prototype);

class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // Methods will be added to .prototype property i.e. Instance Methods
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.firstName}`);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  // // Set a property that already exists
  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name`);
  }

  get fullName() {
    return this._fullName;
  }

  // Static methods
  static hey() {
    console.log(`Hey There 🙋‍♂️`);
  }
}

class StudentCl extends PersonCl {
  constructor(fullName, birthYear, course) {
    // Always needs to happen first
    super(fullName, birthYear);
    this.course = course;
  }

  introduce() {
    console.log(`My name is ${this.fullName} and I study ${this.course}`);
  }
  calcAge() {
    console.log(
      `I'm ${
        2037 - this.birthYear
      } years old, but as a student I feel more like ${
        2037 - this.birthYear + 10
      }`
    );
  }
}

const martha = new StudentCl('Martha Jones', 2012, 'Computer Science');
// martha.introduce();
// martha.calcAge();

const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);

const StudentProto = Object.create(PersonProto);
StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};
StudentProto.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const jay = Object.create(StudentProto);
jay.init('Jay', 2010, 'Computer Science');
// jay.introduce();
// jay.calcAge();

// // Class Fields and Methods: Encapsulation
// Public fields
// Private fields
// Public methods
// Private methods

// (there is also the static version)

class Account {
  // Public fields (instances)
  locale = navigator.language;

  // Private fields
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    // protected properties
    this.#pin = pin;
    console.log(`Thanks for opening an account, ${this.owner}`);
  }

  // Public methods or Public interface
  getMovements() {
    return this.#movements;
  }

  deposit(val) {
    this.#movements.push(val);
    return this;
  }

  withdraw(val) {
    this.deposit(-val);
    return this;
  }

  // protected convention
  _approveLoan(val) {
    return true;
  }

  requestLoan(val) {
    if (this._approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan approved`);
    }
    return this;
  }

  // Private Methods// currently not in use
  // #approveLoan(val) {
  //   return true;
  // }

  static helper() {
    console.log('Helper');
  }
}

const acc1 = new Account('Jonas', 'EUR', 1111);

// console.log(acc1.getMovements());
// acc1.deposit(250);
// acc1.withdraw(140);
// acc1.requestLoan(1000);

// console.log(acc1);
// Account.helper();

// console.log(acc1.#approveLoan(100));
// console.log(acc1.getMovements());

// // Chaining Methods
// implemented by adding 'return this'
acc1.deposit(300).deposit(500).withdraw(35).requestLoan(25000).withdraw(4000);
console.log(acc1.getMovements());
