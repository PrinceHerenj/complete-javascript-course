'use strict';

const checkDogs = function (dogsJulia, dogsKate) {
  const dogsJuliaC = dogsJulia.slice();
  dogsJuliaC.splice(0, 1);
  dogsJuliaC.splice(-2);
  const joined = [...dogsJuliaC, ...dogsKate];
  joined.forEach((val, i) => {
    const desc = val >= 3 ? 'an Adult' : 'a Puppy';
    console.log(`Dog ${i + 1} is ${desc}, and is ${val} years old`);
  });
};

const ds1 = [
  [3, 5, 2, 12, 7],
  [4, 1, 15, 8, 3],
];
console.log(`DataSet 1: `);
checkDogs(ds1.at(0), ds1.at(1));

console.log(`\nDataSet 2:`);
const ds2 = [
  [9, 16, 6, 8, 3],
  [10, 5, 6, 1, 4],
];
checkDogs(ds2.at(0), ds2.at(1));
