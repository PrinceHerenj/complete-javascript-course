const game = {
  team1: `Bayern Munich`,
  team2: `Borrussia Dortmund`,
  players: [
    [
      `Neuer`,
      `Pavard`,
      `Martinez`,
      `Alaba`,
      `Davies`,
      `Kimmich`,
      `Goretzka`,
      `Coman`,
      `Muller`,
      `Gnarby`,
      `Lewandowski`,
    ],
    [
      `Burki`,
      `Schulz`,
      `Hummels`,
      `Akanji`,
      `Hakimi`,
      `Weigl`,
      `Witsel`,
      `Hazard`,
      `Brandt`,
      `Sancho`,
      `Gotze`,
    ],
  ],
  score: `4:0`,
  scored: [`Lewandowski`, `Gnarby`, `Lewandowski`, `Hummels`],
  date: `Nov 9th, 2037`,
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
// // CODING CHALLENGE 1

// // 1.
// players1 = game.players[0];
// players2 = game.players[1];
// console.log(players1, players2);

// // 2.
// let [gk, ...fieldPlayers] = players1;
// console.log(gk, fieldPlayers);

// // 3.
// let allPlayers = [...players1, ...players2];
// console.log(allPlayers);

// // 4.
// const players1Final = [...players1, ...[`Thiago`, `Coutinho`, `Perisic`]];
// console.log(players1Final);

// // 5.
// const {
//   odds: { team1, x: draw, team2 },
// } = game;
// console.log(team1, draw, team2);

// // 6.
// printGoals = function (...playerNames) {
//   playerNames.forEach(player => {
//     console.log(player);
//   });
//   console.log(`${playerNames.length} goals were scored`);
// };
// // printGoals(`Davies`, `Muller`, `Lewandowski`, `Kimmich`);
// printGoals(...game.scored);

// // 7.
// team1 < team2 && console.log(`Team 1 is more likely to win`);
// team1 > team2 && console.log(`Team 2 is more likely to win`);

// // CODING CHALLENGE 2

// // 1.
// for (const [index, player] of game.scored.entries()) {
//   console.log(`Goal ${index + 1}: ${player}`);
// }

// // 2.
// const entries = Object.entries(game.odds);
// let sum = 0;
// for (const [, odd] of entries) {
//   sum += odd;
// }
// console.log(`Average Odd: ${sum / entries.length}`);

// // 3.
// for (const [key, odd] of entries) {
//   const teamStr = key === 'x' ? 'draw' : `victory ${game[key]}`;
//   console.log(`Odd of ${teamStr} ${odd}`);
// }

// // 4.
// let scorers = {};
// for (const scorer of game.scored) {
//   scorers[scorer] ? scorers[scorer]++ : (scorers[scorer] = 1);
// }
// console.log(scorers);
// /*
// 1. create scorers empty object
// 2. for every goal in scored object
//   add to scorers object with name and goals pair
//   for every scorer, if goals == 0, set to 1, else goals++
// */

// const gameEvents = new Map([
//   [17, '⚽ GOAL'],
//   [36, '🔀 Substitution'],
//   [47, '⚽ GOAL'],
//   [61, '🔀 Substitution'],
//   [64, '🟨 Yellow card'],
//   [69, '🟥 Red card'],
//   [70, '🔀 Substitution'],
//   [72, '🔀 Substitution'],
//   [76, '⚽ GOAL'],
//   [80, '⚽ GOAL'],
//   [92, '🟨 Yellow card'],
// ]);

// // CODING CHALLENGE 3

// // 1.
// const events = new Set(gameEvents.values());
// console.log(events);

// // 2.
// gameEvents.delete(64);
// console.log(gameEvents);

// // 3.
// console.log(
//   `An event happened, on average, every ${90 / gameEvents.size} minutes`
// );

// // 4.
// for (const [time, event] of gameEvents) {
//   console.log(
//     `${time < 45 ? `[FIRST HALF]` : `[SECOND HALF]`} ${time}: ${event}`
//   );
// }

// // CHALLENGE 4
// document.body.append(document.createElement('textarea'));
// document.body.append(document.createElement('button'));

// function toCamelCaseTrim(string) {
//   let out = [];
//   string = string.toLowerCase().split(`_`);
//   out.push(string[0].trim());
//   for (let i = 1; i < string.length; i++) {
//     out.push(string[i][0].toUpperCase() + string[i].slice(1).trim());
//   }
//   out = out.join(``);
//   return out;
// }

// document.querySelector(`button`).addEventListener(`click`, function () {
//   const text = document.querySelector(`textarea`).value;
//   const splitText = text.split(`\n`);
//   const arrFin = [];
//   for (const i of splitText) {
//     arrFin.push(toCamelCaseTrim(i));
//   }
//   for (const [i, el] of arrFin.entries()) {
//     console.log(el.padEnd(20) + `✅`.repeat(i + 1) + `\n`);
//   }
// });
