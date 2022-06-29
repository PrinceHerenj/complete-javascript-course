'use strict';

const data1 = [5, 2, 4, 1, 15, 8, 3];
const data2 = [16, 6, 10, 5, 6, 1, 4];

const calcAverageHumanAge = function (ages) {
  const humanAges = ages.map(age => (age <= 2 ? 2 * age : 16 + age * 4));
  const adults = humanAges.filter(age => age > 18);
  //   console.log(humanAges);
  //   console.log(adults);
  //   const average = adults.reduce((acc, cur) => acc + cur) / adults.length;
  const average2 = adults.reduce(
    (acc, cur, i, arr) => acc + cur / arr.length,
    0
  );
  return average2;
};

// CHALLENGE 3
const calcAverageHumanAgeArr = ages =>
  ages
    .map(age => (age <= 2 ? 2 * age : 16 + age * 4))
    .filter(age => age > 18)
    .reduce((acc, cur, i, adults) => acc + cur / adults.length, 0);
const avg1 = calcAverageHumanAgeArr(data1);
const avg2 = calcAverageHumanAgeArr(data2);
console.log(avg1, avg2);
