'use strict';

// let hasDriversLicence = false;
// const passTest = true;

// if (passTest) hasDriversLicence = true
// if (hasDriversLicence) console.log(`I can drive`)

// const interface = `Audio`
// const private = 534

// function logger() {
//     console.log(`My name is Prince`)
// }
// logger()

// function declarations
// function fruitProcessor(apples, oranges) {
//     const applePieces = cutFruitPieces(apples)
//     const orangePieces = cutFruitPieces(oranges)
//     const juice = `Juice with ${applePieces} apple pieces and ${orangePieces} orange pieces`
//     return juice;
// }

// console.log(fruitProcessor(5, 0))
// console.log(fruitProcessor(12, 4))

// anonymous function expression
// const a = function (x) {
//     return x ** 2
// }

// *declarations are hoisted to the top of the code*

// arrow function

// const calcAge2 = function (birthYear) {
//     return 2037 = birthYear
// }

// const calcAge3 = birthYear => 2021 - birthYear
// console.log(calcAge3(2002))

// const yearsUntilRetirement = (birthYear, firstName) => {
//     const age = 2021 - birthYear;
//     const retirement = 65 - age;
//     return `${firstName} retires in ${retirement} years`
// }
// console.log(yearsUntilRetirement(2002, `Jonas`))
// console.log(yearsUntilRetirement(1998, `Prashant`))

// function cutFruitPieces(fruit) {
//     return fruit * 4
// }

// console.log(fruitProcessor(2, 3))

const calcAge = birthYear => 2021 - birthYear

const yearsUntilRetirement = function(birthYear, firstName) {
        const age = calcAge(birthYear)
        const retirement = 65 - age;
        return retirement > 0 ? `${firstName} retires in ${retirement} years` : `Already retired`
}

console.log(yearsUntilRetirement(2002, `Prince`))
console.log(yearsUntilRetirement(1970, `Mike`))