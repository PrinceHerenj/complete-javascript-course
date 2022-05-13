'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

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

// // OBJECT DESTRCUTURING
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

// // && and || usage
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

// // Nullish Coalesing Operator ??
// Nullish: null and undefined(NOT 0 or ``)
// restaurant.numGuest = 0;
// const guestCorrect = restaurant.numGuest ?? 10;
// console.log(guestCorrect);

///// ///// ///// /////

// // Logical Assignment operator
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

// // For Of Loop for Looping
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// for (const l of menu) console.log(l);
// for (const [index, name] of menu.entries()) {
//   console.log(index + 1 + `: ` + name);
// }

///// ///// ///// /////

// // ES6 advanced object literals

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

// Optional chaining

// example 1 without optional chaining
restaurant.openingHours.mon && console.log(restaurant.openingHours.mon.open);
// with optional chaining
console.log(restaurant.openingHours?.mon?.open);
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? `closed`;
  console.log(`On ${day}, we are ${open}`);
}
// METHODS optional chaining
console.log(restaurant.order?.(0, 1) ?? `Method does not exist`);
console.log(restaurant.orderRisotto?.(0, 1) ?? `Method does not exist`);
// ARRAYS optional chaining
const users = [{ name: `Jonas`, email: `hello@honas.io` }];
console.log(users[0]?.name ?? `User array empty`);

/*Optional chaining operator often used with Nullish Coelesion operator to provide for defualt value*/
