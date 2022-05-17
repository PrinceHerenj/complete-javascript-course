'use strict';

// Data needed for a later exercise

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery: function ({
    starterIndex: starter = 1,
    mainIndex: main = 0,
    time = `22: 20`,
    address = `NaN`,
  }) {
    console.log(
      `Order received!, ${this.starterMenu[starter]} and ${this.mainMenu[main]} will be delivered to ${address}; 30 minutes from ${time} `
    );
  },
  orderPasta: (ing1, ing2, ing3) => {
    console.log(
      `Your pasta will be delivered with ${ing1}, ${ing2} and ${ing3}`
    );
  },
  orderPizza: (mainIngredient, ...otherIngredients) => {
    console.log(`Main Ingredient: ` + mainIngredient);
    console.log(`Other Ingredients: ` + otherIngredients);
  },
};

// // ARRAY DESTRUCTURING
// let [main, secondary] = restaurant.categories;
// console.log(main, secondary);

// // swapping
// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// // array destructuring from function
// let [starter, main] = restaurant.order(2, 0);
// console.log(starter, main);

// // nested array destructuring
// const nested = [2, 4, [5, 6]];
// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// // assigning default values
// const [a, b, c = 12] = [8, 9];
// console.log(a, b, c);

///// ///// ///// /////

// // OBJECT DESTRUCTURING
// const { name, categories, openingHours } = restaurant;
// console.log(name, categories, openingHours);

// // object name change
// const {
//   name: restaurantName,
//   categories: tags,
//   openingHours: hours,
// } = restaurant;
// console.log(restaurantName, tags, hours);

// // setting up default values
// const { starterMenu: menu = [] } = restaurant; // default value loaded if parent objects
// console.log(menu);

// // mutating variables while destructuring
// let a = 111;
// let b = 222;
// const obj = { a: 23, b: 7, c: 14 };
// ({ a, b } = obj);
// console.log(a, b);

// // nested object destructuring
// const {
//   fri: { open: o, close: c },
// } = restaurant.openingHours;
// console.log(o, c);

// // LIVE usage
// restaurant.orderDelivery({
//   starterIndex: 1,
//   mainIndex: 1,
//   time: '22:30',
//   address: 'Kanke, RNC,JH',
// });

///// ///// ///// /////

// // SPREAD OPERATOR
// const arr = [7, 8, 9];
// const badNewArray = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badNewArray);
// const goodNewArray = [1, 2, ...arr];
// console.log(goodNewArray);
// const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// console.log(newMenu);

// // uses
// // 1. create shallow copies of array
// const arrayDefined = [5, 4, 3, 2, 1];
// const arrayShallow = [...arrayDefined];
// console.log(arrayDefined, arrayShallow);
// // 2. merging two arrays
// const arrayJoined = [...arrayDefined, ...arrayShallow.reverse()];
// console.log(arrayJoined);

// ITERABLES: arrays, strings, maps, sets, NOT objects
// // LIVE usage
// const ingredients = [
//   prompt(`Let's make Pasta!
// Ingredient 1?`),
//   prompt(`Ingredient 2?`),
//   prompt(`Ingredient 3?`),
// ];
// restaurant.orderPasta(...ingredients);

// ES2k18 allows object spreading
// const newRestaurant = { ...restaurant, founder: 'Guiseppe' };
// // also shallow copying of objects
// const newRestaurant1 = { ...restaurant };
// console.log(newRestaurant1);

///// ///// ///// /////

// // REST PATTERNS
// const arr = [1, 2, ...[3, 4]];
// const [, ...others] = [1, 2, 3, 4, 5];
// console.log(others);

// const [Pizza, , Risotto, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];
// // only one REST element, REST is last element

// // REST in object Destructuring
// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(weekdays);

// // REST in function Destructuring
// const add = function (...x) {
//   let sum = 0;
//   x.forEach(el => {
//     sum += el;
//   });
//   console.log(sum);
// };

// add(2, 3);
// const x = [23, 5, 7];
// add(...x);
// add(4, 5, 25);

// restaurant.orderPizza('Mushrooms', `Onion`, `Cheese`);

///// ///// ///// /////

// // && AND || USAGE
// Logical Operators properties: use and return any Data Type and also short circuiting

// console.log(`Jonas` || 3);
// console.log(`` || `Jonas`);
// console.log(true || 0);
// console.log(undefined || null);
// console.log(undefined || 0 || `` || `Hello` || 23);

// // restaurant.numGuests = 23;
// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guests1);
// const guests2 = restaurant.numGuests || 10;
// console.log(guests2);

/*0 causes error in short circuiting*/

// console.log(0 && `Jonas`);
// console.log(`` && `Jonas`);
// console.log(`Hello` && 23 && null && `Jonas`);

/*
|| checks for first truthy value and exits-and-returns at that truthy value
&& checks for falsy value and exits-and-returns at that falsy value*/

// if (restaurant.orderPizza) {
//   restaurant.orderPizza(`Mushrooms`, `Spinach`);
// }

// restaurant.orderPizza && restaurant.orderPizza(`Mushrooms`, `Spinach`);

///// ///// ///// /////

// // NULLISH COALESING OPERATOR ??
// Nullish: null and undefined(NOT 0 or ``)
// restaurant.numGuest = 0;
// const guestCorrect = restaurant.numGuest ?? 10;
// console.log(guestCorrect);

///// ///// ///// /////

// // LOGICAL ASSIGNMENT OPERATOR
// const rest1 = {
//   name: `Capri`,
//   numGuests: 0,
// };

// const rest2 = {
//   name: `La Piazza`,
//   owner: `Giovanni Rossi`,
// };

// rest1.numGuests ??= 10;
// rest2.numGuests ||= 10;
// // ||= used to assign if value not present;

// rest1.owner &&= `<ANONYMOUS>`;
// rest2.owner &&= `<ANONYMOUS>`;
// // &&= assign if value already present

///// ///// ///// /////

// // FOR OF LOOP
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// // for (const l of menu) console.log(l);
// for (const [index, name] of menu.entries()) {
//   console.log(index + 1 + `: ` + name);
// }

/*Arrays have entries() return array of index and value pair */

///// ///// ///// /////

// // ES6 ADVANCED OBJECT LITERALS

// const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

// const openingHour = {
//   // using adj object literal in function
//   [weekdays[3]]: {
//     open: 12,
//     close: 22,
//   },
//   fri: {
//     open: 11,
//     close: 23,
//   },
//   sat: {
//     open: 0, // Open 24 hours
//     close: 24,
//   },
// };

// const restaurant1 = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],
//   // advanced object literal
//   openingHour,
//   // advanced functions (direct assign function to object keys)
//   order(starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },
//   orderDelivery({
//     starterIndex: starter = 1,
//     mainIndex: main = 0,
//     time = `22: 20`,
//     address = `NaN`,
//   }) {
//     console.log(
//       `Order received!, ${this.starterMenu[starter]} and ${this.mainMenu[main]} will be delivered to ${address}; 30 minutes from ${time} `
//     );
//   },
//   orderPasta(ing1, ing2, ing3) {
//     console.log(
//       `Your pasta will be delivered with ${ing1}, ${ing2} and ${ing3}`
//     );
//   },
//   orderPizza(mainIngredient, ...otherIngredients) {
//     console.log(`Main Ingredient: ` + mainIngredient);
//     console.log(`Other Ingredients: ` + otherIngredients);
//   },
// };

// console.log(restaurant1);

///// ///// ///// /////

// // OPTIONAL CHAINING

// // example 1 without optional chaining
// restaurant.openingHours.mon && console.log(restaurant.openingHours.mon.open);
// // with optional chaining
// console.log(restaurant.openingHours?.mon?.open);
// const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
// for (const day of days) {
//   const open = restaurant.openingHours[day]?.open ?? `closed`;
//   console.log(`On ${day}, we are ${open}`);
// }
// // METHODS optional chaining
// console.log(restaurant.order?.(0, 1) ?? `Method does not exist`);
// console.log(restaurant.orderRisotto?.(0, 1) ?? `Method does not exist`);
// // ARRAYS optional chaining
// const users = [{ name: `Jonas`, email: `hello@honas.io` }];
// console.log(users[0]?.name ?? `User array empty`);

// /*Optional chaining operator often used with Nullish Coelesion operator to provide for defualt value*/

///// ///// ///// /////
// // LOOPING OBJECTS

// const properties = Object.keys(restaurant.openingHours);
// let openStr = `We're open on ${properties.length} days: `;
// for (const day of properties) {
//   openStr += `${day} `;
// }
// // console.log(properties);
// console.log(openStr);
// /*Object.keys() of an object returns an array of its keys*/

// const values = Object.values(restaurant.openingHours);
// // console.log(values);
// /*Object.values() of an object returns an of its key's values respectively*/

// const entries = Object.entries(restaurant.openingHours);
// // console.log(entries);
// /*Object.entries() of an object returns its key value pair as arrays in a larger parent array*/

// for (const [key, { open, close }] of entries) {
//   console.log(`On ${key} we open at ${open} and close at ${close} `);
// }

///// ///// ///// /////
// // SETS

// const ordersSet = new Set([`Pasta`, `Pizza`, `Pizza`, `Risotto`, `Pizza`]);
// console.log(ordersSet);

// console.log(new Set(`Wasssssup`));

// console.log(ordersSet.size); // size property
// console.log(ordersSet.has(`Pizza`)); // includes synonymous
// ordersSet.add(`Garlic Bread`);
// ordersSet.add(`Garlic Bread`); // add method
// ordersSet.delete(`Pizza`); // delete method
// // console.log(ordersSet);

// // for (const asd of ordersSet) console.log(asd);

// // ordersSet.clear(); // clear all
// // console.log(ordersSet);

// const staff = [`Waiter`, `Chef`, `Waiter`, `Manager`, `Chef`, `Waiter`];
// const staffUnique = [...new Set(staff)];
// console.log(staffUnique);

// const objectExample = {
//   owner: `Prince Herenj`,
//   profit: `100`,
//   CEO: `Prince Herenj`,
// };

// console.log([...new Set(Object.values(objectExample))]); // print all unique values in object

///// ///// ///// /////
// // MAPS

// const rest = new Map();
// rest.set(`name`, `Classico Italiano`);
// rest.set(1, `Firenze Italy`);
// rest.set(2, `Lisbon, Protugal`);
// rest
//   .set(`categories`, [`Italian`, `Pizzeria`, `Vegetarian`, `Organic`])
//   .set(`open`, 11)
//   .set(`close`, 23)
//   .set(true, `We are open`)
//   .set(false, `We are closed`);
// console.log(rest);

// console.log(rest.get(1));

// const time = 21;
// console.log(rest.get(time > rest.get(`open`) && time < rest.get(`close`)));

// console.log(rest.has(`categories`));

// const arr = [1, 2];
// rest.set(arr, `Test`);

// rest.set(document.querySelector(`h1`), `Heading`);

// console.log(rest);

// // MAPS ITERATION

// const questionMap = new Map([
//   [`question`, `What is the best programming language in the world?`],
//   [1, `C`],
//   [2, `Java`],
//   [3, `JavaScript`],
//   [`correct`, 3],
//   [true, `Correct`],
//   [false, `Try Again`],
// ]);

// console.log(questionMap);

// // OBJECT TO MAP CONVERT
// const hoursMap = new Map(Object.entries(restaurant.openingHours));

// // ITERATION
// // QUIZ APP
// console.log(questionMap.get(`question`));
// for (const [key, value] of questionMap) {
//   if (typeof key === `number`) console.log(`Option ${key}: ${value}`);
// }

// const answer = Number(prompt(`Your Answer: `));

// console.log(questionMap.get(questionMap.get(`correct`) === answer));

// // MAP TO ARRAY
// console.log([...questionMap]);
// console.log([...questionMap.keys()]);
// console.log([...questionMap.values()]);
// spread used to convert MAP to and array

///// ///// ///// /////

// // STRINGS

// const airline = `TAP Air Portugal`;
// const plane = `A320`;

// console.log(...plane);
// console.log(plane[0]);
// console.log(`B730`[0]);

// console.log(plane.length);

// console.log(airline.indexOf(`r`));

// console.log(airline.lastIndexOf(`r`));
// console.log(airline.indexOf(`Portugal`));

// console.log(airline.slice(4));
// console.log(airline.slice(4, 7));
// // length of result = end - start

// console.log(airline.slice(0, airline.indexOf(` `))); // extract first word
// console.log(airline.slice(airline.lastIndexOf(` `) + 1)); // extract last word
// console.log(airline.slice(1, -1)); // -ve

// const checkMiddleSeat = function (seat) {
//   // B and E are middle seats
//   if (seat.slice(-1) == `B` || seat.slice(-1) == `E`) return true;
//   else return false;
// };
// // console.log(checkMiddleSeat(`11C`));
// // console.log(checkMiddleSeat(`3E`));
// console.log(typeof new String(`Jonas`));

// console.log(airline.toLowerCase());
// console.log(`Jonas`.toUpperCase());

// // Fix Capitalization in name
// const passenger = `jOnAS`;
// const passLower = passenger.toLowerCase();
// const passCorrect = passLower[0].toUpperCase() + passLower.slice(1);
// console.log(passCorrect);

// // compare email

// const email = `hello@jonas.io`;
// const loginEmail = `   Hello@Jonas.Io \n`;
// const lowerLoginEmail = loginEmail.toLowerCase().trim();
// console.log(lowerLoginEmail);

// ``.trimStart();
// ``.trimEnd();

// const priceGB = `288,97€`;

// const priceUS = priceGB.replace(`€`, `$`).replace(`,`, `.`);
// console.log(priceUS);

// const announce = `All passengers come to Boarding door 23, Boarding door 23!`;
// console.log(announce.replace(`door`, `Gate`)); // only replaces first appearance

// console.log(announce.replace(/door/g, `gate`)); // regex to traget all expressions

// // Boolean functions
// const plane1 = `Airbus320neo`;
// console.log(plane1.includes(`A320`));
// console.log(plane1.startsWith(`Airb`));

// if (plane1.startsWith(`Airbus`) && plane1.endsWith(`neo`))
//   console.log(`Part of new Airbus family`);

// // Practice exercise

// const checkBaggage = function (items) {
//   const baggage = items.toLowerCase();
//   if (baggage.includes(`knife`) || baggage.includes(`gun`))
//     console.log(`You are NOT allowed on board`);
//   else console.log(`Welcome aboard`);
// };

// checkBaggage(`I have a laptop, some Food and a pocket Knife`);
// checkBaggage(`Socks and camera`);
// checkBaggage(`Got some snacks and a gun for protection`);

// console.log(`a+very+nice+string`.split(`+`));
// console.log(`Prince Herenj`.split(` `));

// const [firstName, lastName] = `Prince Herenj`.split(` `);

// const newName = [`Mr.`, firstName, lastName.toUpperCase()].join(` `);
// console.log(newName);

// const capitalizaName = function (name) {
//   const names = name.split(` `);
//   const namesUpper = [];
//   for (const n of names) {
//     // namesUpper.push(n[0].toUpperCase() + n.slice(1));
//     namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
//   }
//   console.log(namesUpper.join(` `));
// };
// capitalizaName(`jessica ann smith davis`);

// // PADDING
// const message = `Go to gate 23!`;
// console.log(message.padStart(25, `+`).padEnd(30, `+`));
// console.log(`Jonas`.padStart(25, `+`).padEnd(30, `+`));

// // **** **** **** 0415

// const maskCreditCard = function (number) {
//   const str = number + ``;
//   const l = str.length;
//   const l4 = str.slice(l - 4);
//   const padded = l4.padStart(l, `*`);
//   console.log(padded);
// };

// maskCreditCard(`4337124912391234`);

// // REPEAT
// const message2 = `Bad weather.. All Departures Delayed... `;
// console.log(message2.repeat(5));

// const planesInLine = function (n) {
//   console.log(`There are ${n} planes in line ${`✈️`.repeat(n)}`);
// };

// planesInLine(5);
// planesInLine(3);
// planesInLine(12);

const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

for (const flight of flights.split(`+`)) {
  let [desc, start, end, time] = flight.split(`;`);
  desc = desc.slice(1).split(`_`);
  desc = desc.join(` `);
  start = start.slice(0, 3).toUpperCase();
  end = end.slice(0, 3).toUpperCase();
  const [hour, mins] = time.split(`:`);
  time = `(${hour}h${mins})`;
  console.log(
    `${
      desc.includes(`Delayed`) ? `🔴`.concat(desc) : desc
    } from ${start} to ${end} ${time}`.padStart(40)
  );
}
