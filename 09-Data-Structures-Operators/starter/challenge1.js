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
