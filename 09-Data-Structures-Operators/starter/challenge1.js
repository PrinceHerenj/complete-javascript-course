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

// 1.
players1 = game.players[0];
players2 = game.players[1];
console.log(players1, players2);

// 2.
let [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

// 3.
let allPlayers = [...players1, ...players2];
console.log(allPlayers);

// 4.
const players1Final = [...players1, ...[`Thiago`, `Coutinho`, `Perisic`]];
console.log(players1Final);

// 5.
const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);

// 6.
printGoals = function (...playerNames) {
  playerNames.forEach(player => {
    console.log(player);
  });
  console.log(`${playerNames.length} goals were scored`);
};
// printGoals(`Davies`, `Muller`, `Lewandowski`, `Kimmich`);
printGoals(...game.scored);

// 7.
team1 < team2 && console.log(`Team 1 is more likely to win`);
team1 > team2 && console.log(`Team 2 is more likely to win`);
