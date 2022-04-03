'use strict';

// function caclAge(birthYear) {
//   const age = 2022 - birthYear;
//   function printAge() {
//     console.log(`Hi, ${firstName}`);
//     let output = `You are ${age}, born in ${birthYear}`;
//     console.log(output);

//     if (birthYear >= 1981 && birthYear <= 1996) {
//       var millenial = true;
//       const firstName = `Stephen`;
//       const str = `Oh and you're a millenial, ${firstName}`;
//       console.log(str);

//       function add(a, b) {
//         return a + b;
//       }
//       output = `New Output`;
//     }
//     console.log(millenial);
//     console.log(output);
//     // console.log(add(2, 3));
//   }
//   printAge();
//   return age;
// }
// const firstName = 'Prince';
// caclAge(1985);

// Hoisting Practice

// console.log(me);
// console.log(job);
// console.log(year);

// var me = `Jonas`;
// let job = `teacher`;
// const year = 1991;

// console.log(addDecl(1, 3));
// console.log(addExpr(1, 3));
// console.log(addArrow(1, 3));

// function addDecl(a, b) {
//   return a + b;
// }

// const addExpr = function (a, b) {
//   return a + b;
// };

// const addArrow = (a, b) => a + b;

//Example

// if (!numProducts) deleteShoppingCart();

// var numProducts = 10;

// function deleteShoppingCart() {
//   console.log(`All products deleted!`);
// }

// const jonas = {
//   name: `Jonas`,
//   year: 1989,
//   calcAge: function () {
//     return 2037 - this.year;
//   },
// };

// const calcAge = function (birthYear) {
//   console.log(2037 - birthYear);
//   console.log(this);
// };

// calcAge(1945);

// const calcAgeArrow = birthYear => {
//   console.log(2037 - birthYear);
//   console.log(this);
// };

// calcAgeArrow(1945);

// var firstName = `Matilda`;

// const jonas = {
//   firstName: 'Jonas',
//   year: 1991,
//   calcAge: function () {
//     console.log(2037 - this.year);
//     const isMillenial = () => {
//       console.log(this);
//       console.log(this.year >= 1981 && this.year <= 1996);
//     };

//     isMillenial();
//   },
//   greet: () => console.log(`Hey, ${this.firstName}`),
// };
// jonas.greet();
// jonas.calcAge();

// const matilda = {
//   year: 2017,
// };

// matilda.calcAge = jonas.calcAge;
// matilda.calcAge();

// const f = jonas.calcAge;
// f();

// const addExpr = function (a, b) {
//   console.log(arguments);
//   return a + b;
// };
// addExpr(2, 5);

// const addArrow = (a, b) => {
//   console.log(arguments);
//   return a + b;
// };
// addArrow(2, 5, 8);

// let age = 30;
// let oldAge = age;
// age = 31;
// console.log(age, oldAge);

// const me = {
//   name: 'person',
//   age: 30,
// };

// const friend = me;
// friend.age = 27;

// const friends = new Array();

// for (let i = 0; i <= 10; i++) {
//   let friend = Object.assign({}, me);
//   friends.push(friend);
// }

// let additive = 0;
// friends.forEach(element => {
//   element.name += additive;
//   element.age += additive++;
// });

// console.table(friends, friends.length);
// console.log(`Friend: `, friend);
// console.log(`Me: `, me);

// Primitive Types

// let lastName = `Williams`;
// let oldLastName = lastName;
// lastName = `Davis`;

// console.log(lastName, oldLastName);

// ReferenceTypes

// const jessica = {
//   firstName: `Jessica`,
//   lastName: `Williams`,
//   age: 27,
//   fam: [`Alice`, `Bob`],
// };

// const marriedJessica = Object.assign({}, jessica);
// marriedJessica.lastName = `Davis`;
// marriedJessica.fam.push(`Mary`, `John`);

// console.log(`Before Marriage: `, jessica);
// console.log(`After Marriage: `, marriedJessica);
