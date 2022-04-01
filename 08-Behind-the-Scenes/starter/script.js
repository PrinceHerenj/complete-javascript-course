'use strict';

function caclAge(birthYear) {
  const age = 2022 - birthYear;
  function printAge() {
    console.log(`Hi, ${firstName}`);
    let output = `You are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      const firstName = `Stephen`;
      const str = `Oh and you're a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
      output = `New Output`;
    }
    console.log(millenial);
    console.log(output);
    // console.log(add(2, 3));
  }
  printAge();
  return age;
}

const firstName = 'Prince';

caclAge(1985);
