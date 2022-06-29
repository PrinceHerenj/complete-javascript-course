'use strict';

const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

// 1.
dogs.forEach(dog => (dog.recFood = Math.trunc(dog.weight ** 0.75 * 28)));

// 2.
const sarahDog = dogs.find(dog => dog.owners.includes('Sarah'));
const foodRating = function (dog) {
  return dog.curFood <= dog.recFood * 1.1 && dog.curFood >= dog.recFood * 0.9
    ? 'Okay'
    : 'Not Okay';
};

console.log(
  `Amount of food being eaten by Sarah's dog is ${foodRating(sarahDog)}`
);

// 3.
const ownersEatTooMuch = dogs
  .filter(dog => dog.curFood > dog.recFood)
  .flatMap(dog => dog.owners);
console.log(ownersEatTooMuch);

const ownersEatTooLittle = dogs
  .filter(dog => dog.curFood < dog.recFood)
  .flatMap(dog => dog.owners);
console.log(ownersEatTooLittle);

// 4.
console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eat too much`);
console.log(`${ownersEatTooLittle.join(' and ')}'s dogs eat too little`);

// 5.
dogs.some(dog => console.log(dog.curFood == dog.recFood));

// 6.
const boolFoodR = function (dog) {
  return dog.curFood <= dog.recFood * 1.1 && dog.curFood >= dog.recFood * 0.9;
};
dogs.some(dog => console.log(boolFoodR(dog)));

// 7.
const okayEating = dogs.filter(dog => boolFoodR(dog));
console.log(okayEating);

// 8.
const dogsSorted = dogs.slice().sort((a, b) => a.recFood - b.recFood);
console.log(dogsSorted);
