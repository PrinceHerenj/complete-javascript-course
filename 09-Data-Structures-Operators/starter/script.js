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
};

// // array destructuring
// let [main, secondary] = restaurant.categories;
// console.log(main, secondary);

// // swapping
// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// // array destructuring from function
// let [starter, main] = restaurant.order(2, 0);
// console.log(starter, main);

// // nester array destructuring
// const nested = [2, 4, [5, 6]];
// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// // assigning default values
// const [a, b, c = 12] = [8, 9];
// console.log(a, b, c);

///// ///// ///// /////

// // object destructuring
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

// mutating variables while destructuring
