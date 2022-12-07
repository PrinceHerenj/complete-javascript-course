'use strict';

// // DEFAULT PARAMETERS

// const bookings = [];
// const createBooking = function (
//   flightNum,
//   numPassengers = 2,
//   price = 199 * numPassengers // use of previous default values enabled in expression
// ) {
//   //   numPassengers = numPassengers || 1; // using logical operators to select first truthy value.
//   //   price = price || 199;
//   const booking = {
//     flightNum,
//     numPassengers,
//     price,
//   };
//   console.log(booking);
//   bookings.push(booking);
// };

// createBooking('LH123');
// createBooking('LH123', 2, 800);
// createBooking('LH123', 2);
// createBooking('LH123', 5);
// createBooking('LH123', undefined, 1000); // usage of undefined where required skips expression usage in function default parameter list

//////////////////////////////

// // PASSING ARGUMENTs  VALUES VS REFERENCE

// const flight = `LH234`;
// const jonas = {
//   name: `Prince Herenj`,
//   passport: 1512345124124,
// };

// const checkIn = function (flightNum, passenger) {
//   flightNum = `LH999`;
//   passenger.name = `Mr. ` + passenger.name;

//   if (passenger.passport === 1512345124124) alert(`Checked in`);
//   else alert(`Wrong passport!`);
// };

// // checkIn(flight, jonas);
// console.log(flight);

// // flight is primitive type. when passed flightNum contains only a copy of the value. same as flightNum = flight;
// // whereas passenger being a reference type point to jonas in the memory heap, thus changes the value. sa,e as passenger = jonas;

// const newPassport = function (person) {
//   person.passport = Math.trunc(Math.random() * 1000000000000);
// };

// newPassport(jonas);
// checkIn(flight, jonas);
// console.log(jonas);

// // JS does not have passing by referrence.

//////////////////////////////

// // FIRST CLASS AND HIGHER ORDER FUNCTIONS

/**
 * FIRST CLASS FUNCTIONS (concept)
 * JS treats functions as first-class citizens
 * thus implies that, functions are simple values
 * functions in JS are another type of object {}
 * functions can be stored in variables due to this property
 * functions can also be passed to other function
 * functions can also be RETURNED
 * functions have methods.
 */

/**
 * HIGHER ORDER FUNCTIONS (usable)
 * a function that receives another function as an argument and returns a new function
 * RECEIVING ANOTHER FUNCTION
 * btnClose.addEventListener('click', greet)
 * addEventListener receives another function
 * addEventListener here is the higher order function and greet is called the callback function.
 *
 * RETURNING NEW FUNCTION
 * function count() {
 *  let counter = 0;
 *  return function() {
 *    counter++
 *  }
 * }
 */

//////////////////////////////

// // RECEIVING CALLBACK FUNCTIONS

// const oneWord = function (str) {
//   return str.replace(/ /g, '').toLowerCase();
// };
// const upperFirstWord = function (str) {
//   const [first, ...others] = str.split(` `);
//   return [first.toUpperCase(), ...others].join(` `);
// };

// const transformer = function (str, fn) {
//   console.log(`Original String: ${str}`);
//   console.log(`Transformed string: ${fn(str)}`);
//   console.log(`Transformed by : ${fn.name}`);
//   console.log(`\n`);
// };

// transformer(`JavaScript is the best!`, upperFirstWord);
// transformer(`JavaScript is the best!`, oneWord);

// // callback functions used all the time.

// const high5 = function () {
//   console.log(`👋`);
// };
// [`Jonas`, `Martha`, `Adam`].forEach(high5);

//////////////////////////////

// // RETURN NEW FUNCTION

// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };

// const greeterHey = greet(`Hey`);

// greeterHey(`Jonas`);
// greeterHey(`Steven`);

// greet(`Hello`)(`Jonas`);

// const greetArr = greeting => name => console.log(`${greeting} ${name}`);

// greetArr(`Hi`)(`Prince`);

//////////////////////////////

// // call AND apply METHODS

// const lufthansa = {
//   airline: `Lufthansa`,
//   iataCode: `LH`,
//   bookings: [],
//   book(flightNum, name) {
//     // console.log(
//     //   `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
//     // );
//     this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
//   },
// };

// lufthansa.book(239, `Prince`);
// lufthansa.book(635, `John Smith`);

// // console.log(lufthansa);

// const eurowings = {
//   airline: `Eurowings`,
//   iataCode: `EW`,
//   bookings: [],
// };

// const book = lufthansa.book;

// // book(23, `Sarah Williams`); does NOT work

// book.call(eurowings, 23, `Sarah Williams`);
// // console.log(eurowings);

// the call method on any method assigns 'this' to first argument

// book.call(lufthansa, 239, `Mary Cooper`);
// // console.log(lufthansa);

// const swiss = {
//   airline: `Swiss Air Lines`,
//   iataCode: `LX`,
//   bookings: [],
// };

// book.call(swiss, 23, `Prince Herenj`);

// // apply method

// const flightData = [583, `Shipha Herenj`];

// // book.apply(swiss, flightData);
// // apply method depricated.
// book.call(swiss, ...flightData);

// // bind METHOD

// const bookEW = book.bind(eurowings);
// const bookLH = book.bind(lufthansa);
// const bookLX = book.bind(swiss);
// bookEW(23, `Steven Williams`);

// const bookEW23 = book.bind(eurowings, 23); // also known as partial application where some parameters are fixed

// // With event Listeners
// lufthansa.planes = 300;
// lufthansa.buyPlane = function () {
//   // console.log(this);
//   this.planes++;
//   console.log(this);
// };

// document
//   .querySelector(`.buy`)
//   .addEventListener(`click`, lufthansa.buyPlane.bind(lufthansa));

// // Partial Application

// const addTax = (rate, value) => value + value * rate;
// console.log(addTax(0.1, 200));
// const addVAT = addTax.bind(null, 0.23);
// console.log(addVAT(200));

// // same without bind
// const addTaxRate = function (rate) {
//   return function (value) {
//     return value + value * rate;
//   };
// };

// const addVAT2 = addTaxRate(0.23);
// console.log(addVAT2(200));

//////////////////////////////

// // IMMEDIATELY INVOKED FUNCTION EXPRESSIONS

// const runOnce = function () {
//   console.log(`This will never run again`);
// }; // this can be executed again if required

// (function () {
//   console.log(`This will never run again`);
// })();

// (() => console.log(`This will ALSO never run again`))();

// {
//   const isPrivate = 23;
//   var notPrivate = 46;
// }

// // console.log(isPrivate);
// console.log(notPrivate);

//////////////////////////////

// // CLOSURES

// const secureBooking = function () {
//   let passengerCount = 0;

//   return function () {
//     passengerCount++;
//     console.log(`${passengerCount} passengers`);
//   };
// };

// const booker = secureBooking();

// booker();
// booker();
// booker();

// // a function has access to the variable environment of the execution context in which it was created even after that EC is lost
// // Closure: VE attached to the function, exactly as it was at the time and place the function was created
// // Closure prior to scope chain

// console.dir(booker);

// // example 1
// let f;

// const g = function () {
//   const a = 23;
//   f = function () {
//     console.log(a * 2);
//   };
// };

// const h = function () {
//   const b = 777;
//   f = function () {
//     console.log(b * 2);
//   };
// };

// g();
// f();
// // console.dir(f);

// // Re assigning f function
// h();
// f();

// console.dir(f);

// example 2
// const boardPassengers = function (n, wait) {
//   const perGroup = n / 3;

//   setTimeout(function () {
//     console.log(`We are now boarding all ${n} passengers`);
//     console.log(`There are 3 groups, each with ${perGroup} passengers`);
//   }, wait * 1000);

//   console.log(`Will start boarding in ${wait} seconds`);
// };

// // const perGroup = 1000;
// boardPassengers(180, 3);
