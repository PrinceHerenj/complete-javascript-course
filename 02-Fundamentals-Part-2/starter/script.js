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

// const calcAge = birthYear => 2021 - birthYear

// const yearsUntilRetirement = function(birthYear, firstName) {
//         const age = calcAge(birthYear)
//         const retirement = 65 - age;
//         return retirement > 0 ? `${firstName} retires in ${retirement} years` : `Already retired`
// }

// console.log(yearsUntilRetirement(2002, `Prince`))
// console.log(yearsUntilRetirement(1970, `Mike`))

// arrays
// const friends = [`Michael`, `Steven`, `Peter`]
// console.log(friends)

// const years = new Array(1991, 1984, 2008, 2020)

// console.log(years)
// console.log(friends[0], friends[1])
// console.log(friends.length)
// console.log(friends[friends.length - 1]) // last element

// friends[2] = `Jay`;
// console.log(friends)

// const firstName = `Jonas`
// const jonas = [firstName, `Schmedtmann`, 2037 - 1991, `teacher`, friends]
// console.log(jonas)


// const calcAge = function (birthYear) {
//     return 2037 - birthYear
// }

// const years1 = [1990, 1967, 2002, 2010, 2018]
// let ages = []
// years1.forEach(x)

// function x(a) {
//     ages.push(calcAge(a))
// }

// ages

// basic array functions

// const friends= [`Michael`, `Steven`, `Peter`]
// const newLength = friends.push(`Jay`)
// console.log(friends)
// console.log(newLength)
// friends.unshift(`John`)
// console.log(friends)
// friends.pop()
// const popped = friends.pop()
// console.log(popped, friends)

// const shifted = friends.shift()
// console.log(shifted, friends)

// console.log(friends.indexOf(`Steven`))
// console.log(friends.includes(`Steven`))

// Objects

// const jonas = {
//     firstName: `Jonas`,
//     lastName: `Schmedtmann`,
//     age: 2037 - 1991,
//     job: `teacher`,
//     friends: [`Michael`, `Peter`, `Steven`]
// }

// console.log(jonas[`firstName`])

// const nameKey = `Name`;
// console.log(jonas[`first${nameKey}`])
// console.log(jonas[`last${nameKey}`])

// const interestedIn = prompt(`Enter to search`)

// if (interestedIn) {
    // console.log(jonas[interestedIn])
// } else {
//     // console.log(`Wrong Request`)
// }

// jonas.location = `Portugal`

// console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}.`)

// const jonas = {
//     firstName: `Jonas`,
//     lastName: `Schmedtmann`,
//     birthYear: 1991,
//     job: `teacher`,
//     friends: [`Michael`, `Peter`, `Steven`],
//     hasDriversLicence: true,
//     age: NaN,
//     calcAge: function () {
//         this.age = 2037 - this.birthYear 
//         return this.age
//     },
//     summary: function () {
//         return `${this.firstName} is a ${this.age} years old ${this.job}, and he has ${this.hasDriversLicence ? `a` : `no`} driver's license!`
//     }
// }
// // don't use this keyword in arrow functions
// jonas.calcAge()
// console.log(jonas.summary())

// looping

// for(let rep = 1; rep <= 5; rep++) {
//     console.log(`Lifting weights Repition ${rep}`)
// }

const jonasArray = [
    `Jonas`,
    `Schemdtmann`,
    19,
    `teacher`,
    [`Michael`, `Peter`, `Steven`]
]
// const types = []

// for(let i = 0; i < jonasArray.length; ++i) {
//     console.log(jonasArray[i],)
//     types.push(typeof jonasArray[i])
// }

// console.log(types)

// const years = [1991, 2007, 1969, 2020]
// const ages = []

// for(let i = 0; i < years.length; ++i) {
//     ages.push(2037 - years[i])
// }

// console.log(ages)

// continue and break

// for(let i = 0; i < jonasArray.length; ++i) {
//     if(typeof jonasArray[i] !== `string`) continue
//     console.log(jonasArray[i])
// }

// for(let i = 0; i < jonasArray.length; ++i) {
//     if(typeof jonasArray[i] == `number`) break
//     console.log(jonasArray[i], typeof jonasArray[i])
// }

// reverese loops

for(let i = jonasArray.length - 1; i >= 0; i--) {
    console.log(jonasArray[i])
}

const reps = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15]
]

for(let i = 0; i < reps.length; i++) {
    for(let j = 0; j < reps[i].length; j++) {
        console.log(reps[i][j])
    }
}

