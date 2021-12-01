// function describeCountry(country, population, capitalCity) {
//     return `${country} has ${population} million people and its capital city is ${capitalCity}`
// }

// const india = describeCountry(`India`, 138, `Delhi`)
// console.log(india)
// const finland = describeCountry(`Finland`, 6, `Helsinki`)
// console.log(finland)

// function percentageOfWorld1(population) {
//     return Math.round((population / 7900) * 100 * 100) / 100
// }

// const per1 = percentageOfWorld1(1393)
// console.log(per1)
// const per2 = percentageOfWorld1(1441)
// console.log(per2)
// const per3 = percentageOfWorld1(6)
// console.log(per3)

// const percentageOfWorld2 = function(population) {
//     return Math.round((population / 7900) * 100 * 100) / 100
// }

// const per4 = percentageOfWorld2(1393)
// console.log(per4)
// const per5 = percentageOfWorld2(1441)
// console.log(per5)
// const per6 = percentageOfWorld2(6)
// console.log(per6)

// const percentageOfWorld3 = population => Math.round((population / 7900) * 100 * 100) / 100

// // console.log(percentageOfWorld3(1393))
// // console.log(percentageOfWorld3(1441))
// // console.log(percentageOfWorld3(6))

// const describePopulation = (country, population) => `${country} has ${population} million people, which is about ${percentageOfWorld3(population)}% of the world`
// console.log(describePopulation(`India`, 1393))

// const populations = [1393, 1441, 6, 138]
// console.log(`${populations.length == 4}`)
// const percentages = []
// percentages[0] = percentageOfWorld3(populations[0])
// percentages[1] = percentageOfWorld3(populations[1])
// percentages[2] = percentageOfWorld3(populations[2])
// percentages[3] = percentageOfWorld3(populations[3])
// console.log(percentages)

// const neighbours = [`China`, `Bangladesh`, `SriLanka`, `Nepal`]
// neighbours.push(`Utopia`)
// neighbours.pop()
// neighbours
// if (!neighbours.includes(`Germany`)) {
//     console.log(`Probably not a central European country`)
// }
// const i = neighbours.indexOf(`Bangladesh`)
// neighbours[i] = `East Bengal`
// neighbours

// const myCountry = {
//     country: `India`,
//     capital: `Delhi`,
//     language: `Hindi`,
//     population: 1339,
//     neighbours: [`China`, `Bangladesh`, `SriLanka`, `Nepal`] 
// }

// console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countires and a capital called ${myCountry.capital}.`)
// myCountry.population += 2
// console.log(myCountry.population)
// myCountry[`population`] -= 2
// // console.log(myCountry.population)

// myCountry.describe = function () {
//     return `${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countires and a capital called ${this.capital}.`
// }

// console.log(myCountry.describe())
// myCountry.checkIsland = function () {
//     this.isIsland = this.neighbours.length == 0 ? true : false
//     console.log(this.isIsland)
// }
// myCountry.checkIsland()
// console.log(myCountry.isIsland)

// for (let i = 1; i <= 50; i++) {
//     console.log(`Voter number ${i} currently voting`)
// }

// const populations = [1393, 1441, 6, 138]
// const percentages = []
// for (let i = 0; i < populations.length; i++) {
//     percentages[i] = percentageOfWorld3(populations[i])
// }

// console.log(percentages)

// const listOfNeighbours = [[`Canada`, `Mexico`], [`Spain`], [`Norway`, `Sweden`, `Russia`]]
// for (let i = 0; i < listOfNeighbours.length; i++) {
//     for (let j = 0; j < listOfNeighbours[i].length; j++) {
//         console.log(`Neighbour: ${listOfNeighbours[i][j]}`)
//     }
// }

// const percentageOfWorld3 = population => Math.round((population / 7900) * 100 * 100) / 100

// const populations = [1393, 1441, 6, 138]
// const percentages = []
// let i = 0
// while (i < populations.length) {
//     percentages[i] = percentageOfWorld3(populations[i])
//     i++
// }

// console.log(percentages)