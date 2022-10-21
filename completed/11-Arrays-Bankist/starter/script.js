'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

// Functions
const displayMovements = function (movements, sort = false) {
  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  containerMovements.innerHTML = '';
  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `<div class="movements__row">
    <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
    <div class="movements__date">3 days ago</div>
    <div class="movements__value">${mov}€</div>
  </div>`;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  const balance = acc.movements.reduce((acc, mov) => acc + mov);
  acc.balance = balance;
  labelBalance.textContent = `${balance}€`;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}€`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out)}€`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(dep => (dep * acc.interestRate) / 100)
    .filter((int, i, arr) => int >= 1)
    .reduce((acc, intr) => acc + intr, 0);
  labelSumInterest.textContent = `${interest}€`;
};

const createUsernames = function (accs) {
  accs.forEach(acc => {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name.at(0))
      .join('');
  });
};
createUsernames(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc.movements);
  // Display balance
  calcDisplayBalance(acc);
  // display summary
  calcDisplaySummary(acc);
};

// Event Handlers
let currentAccount;
btnLogin.addEventListener('click', function (e) {
  // prevent form from submitting
  e.preventDefault();
  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  // console.log(currentAccount);
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // DISPLAY UI and Message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    // Clear Input Fields
    inputLoginPin.value = inputLoginUsername.value = '';
    inputLoginPin.blur();

    // Update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username == inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= 0.1 * amount)) {
    currentAccount.movements.push(amount);

    updateUI(currentAccount);
  }
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();
  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;

    // Set UI to logout
    labelWelcome.value = 'Log in to get started';
  }
  inputClosePin.value = inputCloseUsername.value = '';
});

let sorted = false;

btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

/////////////////////////////////////////////////

// // SLICE
// let arr = [`a`, `b`, `c`, `d`, `e`];
// console.log(arr.slice(2, 4));
// console.log(arr.slice(-3));
// console.log(arr.slice(1, -2));

// console.log(arr.slice());
// console.log([...arr]); // creating shallow copies

// // SPLICE
// // console.log(arr.splice(2));
// arr.splice(-1); // remove last element
// // SPLICE mutates original array, returns slice and then removes sliced from array
// arr.splice(1, 2);
// console.log(arr);

// // REVERESE
// arr = [`a`, `b`, `c`, `d`, `e`];
// const arr2 = [`j`, `i`, `h`, `g`, `f`];
// console.log(arr2.reverse());
// // // REVERSE mutates the array
// // console.log(arr2);

// // CONCAT
// const letters = arr.concat(arr2);
// console.log(letters);
// console.log([...arr, ...arr2]);

// // JOIN
// console.log(letters.join(` - `));

/////////////////////////////////////////////////

// // AT
// const arr = [23, 11, 64];
// console.log(arr.at(0));

// console.log(arr);
// console.log(arr.at(-1));

// console.log(`prince`.at(-1)); // also works with strings

// // FOR EACH
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// for (const movement of movements) { // OR
// for (const [i, movement] of movements.entries()) {
//   if (movement > 0) console.log(`Movement ${i + 1}: You deposited ${movement}`);
//   else console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
// }

// FOR OF LOOP has [index, variable] structure
// FOR EACH LOOP has (variable, index, array) structure

// movements.forEach(movement => {
//   if (movement > 0) console.log(`You deposited ${movement}`);
//   else console.log(`You withdrew ${Math.abs(movement)}`);
// });
// 0: function(200)
// 1: function(450)... until end

// movements.forEach((mov, i, arr) => {
//   if (mov > 0) console.log(`Movement ${i + 1}:You deposited ${mov}`);
//   else console.log(`Movement ${i + 1}:You withdrew ${Math.abs(mov)}`);
// });

// coninue and break statements dont work in a forEach loop

/////////////////////////////////////////////////

// // MAP
// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// currencies.forEach(function (val, key) {
//   console.log(`${key}: ${val}`);
// });

// const currenciesUnique = new Set([`USD`, `GBP`, `USD`, `EUR`, `EUR`]);
// console.log(currenciesUnique);
// currenciesUnique.forEach(function (val, _val) {
//   console.log(`${_val}: ${val}`);
// });

// _val is throwaway variable

/////////////////////////////////////////////////

// // map(), filter(), reduce()

// // map(); // returns new array similar to forEach after executing callback function for every source element

// const eurToUsd = 1.1;

const mvs = account1.movements.slice();
// const movementsUSD = mvs.map(mov => Number((mov * eurToUsd).toFixed(2))); // functional programming
// // console.log(mvs);
// console.log(movementsUSD);

// // const movementsUSDfor = [];
// // for (const mov of mvs) {
// //   movementsUSDfor.push(mov * eurToUsd);
// // }

// // console.log(movementsUSDfor);

// const movementDesc = mvs.map(
//   (mov, i) =>
//     `Movement ${i + 1}: You ${mov > 0 ? 'Deposited' : 'Withdrew'} ${Math.abs(
//       mov
//     )}`
// );

// console.log(movementDesc);

// const user = 'Steven Thomas William'; // stw

/////////////////////////////////////////////////
// // FILTER()
// const deposits = mvs.filter(function (mov) {
//   return mov > 0;
// });
// console.log(deposits);

// const depositsFor = [];
// for (const mov of mvs) {
//   if (mov > 0) depositsFor.push(mov);
// }
// console.log(depositsFor);

// const withdrawals = mvs.filter(mov => mov < 0);
// console.log(withdrawals);

/////////////////////////////////////////////////
// REDUCE()
// acc is accumulator -> SNOWBALL
// const balance = mvs.reduce(function (acc, cur, i) {
//   console.log(`Iteration ${i}: ${acc}+ ${cur}`);
//   return acc + cur;
// }, 0);

// console.log(balance);

// let bal2 = 0;
// for (const mov of mvs) {
//   bal2 += mov;
// }
// console.log(bal2);

// const bal = mvs.reduce((acc, cur) => acc + cur);
// console.log(bal);

// // Maximum value
// const max = mvs.reduce((acc, cur) => (cur > acc ? cur : acc));
// console.log(max);

// // PIPELINE: Method Chaining
// const totalDepUSD = mvs
//   .filter(mov => mov > 0)
//   .map(mov => mov * eurToUsd)
//   .reduce((acc, cur) => acc + cur, 0);
// console.log(totalDepUSD);

// don't overuse chaining; don't use chaining with mutating arrays

/////////////////////////////////////////////////
// // FIND()
// console.log(mvs.find(mov => mov < 0));
// console.log(accounts);
// const acc = accounts.find(acc => acc.owner === 'Jessica Davis');
// console.log(acc);

// for (const acc1 of accounts) {
//   if (acc1.owner === 'Jessica Davis') console.log(acc1);
// }

/////////////////////////////////////////////////
// SOME()

// console.log(mvs);
// console.log(mvs.includes(-130)); // Checks only for equality

// const anyDeposits = mvs.some(mov => mov > 1500); // Checks for condition, returns true or false.
// console.log(anyDeposits);

// // EVERY() returns true only when all the elements satisfy the condition
// console.log(mvs.every(mov => mov > 0));
// console.log(account4.movements.every(mov => mov > 0));

// // Separate callback for DRY
// const depositCheck = mov => mov > 0;
// console.log(mvs.some(depositCheck));

/////////////////////////////////////////////////
// flat()

// const arr = [[[1, 2], 3], [[4, 5], 6], 7, 8];
// console.log(arr.flat(2)); // argument takes depth value

// Calculate Overall Balance
// const overallBalance = accounts
//   .map(acc => acc.movements)
//   .flat()
//   .reduce((acc, cur) => acc + cur);
// console.log(overallBalance);

// map() and flat() are commonly used together so flatMap() introduced

// const overallBalanceFM = accounts
//   .flatMap(acc => acc.movements)
//   .reduce((acc, cur) => acc + cur);

// console.log(overallBalanceFM);

/////////////////////////////////////////////////

// // built-in Sort()

// const owners = ['Jonas', 'Zach', 'Adam', 'Martha'];
// console.log(owners.sort());
// console.log(owners);
// // built-in sort() orders by converting to string

// console.log(mvs);

// // return < 0, A, B (keep order)
// // return > 0, B, A (switch order)
// mvs.sort((a, b) => a - b); // ascending order
// mvs.sort((a, b) => b - a); // descending  order
// console.log(mvs);

/////////////////////////////////////////////////

// // creating arrays using new Array() constructor
// const arr = new Array(1, 2, 3, 4, 5, 6, 7, 8); // this creates new array based on the arguments
// const x = new Array(7); // specially creates empty array of length 7
// console.log(x);
// // special case only has fill()

// x.fill(1, 3, 5);
// console.log(x);

// arr.fill(23, 2, 6);
// console.log(arr);

// const y = Array.from({ length: 7 }, () => 1);
// console.log(y);

// const z = Array.from({ length: 10 }, (_, i) => i + 1);
// console.log(z);

// const diceRolls = Array.from({ length: 100 }, () =>
//   Math.round(1 + Math.random() * 5)
// );
// console.log(diceRolls);

// console.log(diceRolls.every(a => a > 0 && a <= 6));

// labelBalance.addEventListener('click', function (e) {
//   const movementsUI = Array.from(
//     document.querySelectorAll(`.movements__value`),
//     el => Number(el.textContent.replace('€', ''))
//   );
//   console.log(movementsUI);

//   // const movementsUI2 = [...document.querySelectorAll(`.movements__value`)];
//   // console.log(movementsUI2);
// });

/////////////////////////////////////////////////
// Exercises

// // 1.
// const bankDepositSum = accounts
//   .flatMap(acc => acc.movements)
//   .filter(mov => mov > 0)
//   .reduce((sum, cur) => sum + cur, 0);
// console.log(bankDepositSum);

// // 2.
// const numDepositsSum = accounts
//   .flatMap(acc => acc.movements)
//   .filter(mov => mov >= 1000).length;

// console.log(numDepositsSum);

// const numDeposits1000 = accounts
//   .flatMap(acc => acc.movements)
//   .reduce((count, cur) => (cur >= 1000 ? ++count : count), 0);

// console.log(numDeposits1000);

// // 3.
// const { deposits, withdrawals } = accounts
//   .flatMap(acc => acc.movements)
//   .reduce(
//     (sums, cur) => {
//       // cur > 0 ? (sums.deposits += cur) : (sums.withdrawals += cur);
//       sums[cur > 0 ? 'deposits' : 'withdrawals'] += cur;
//       return sums;
//     },
//     { deposits: 0, withdrawals: 0 }
//   );

// console.log(deposits, withdrawals);

// // 4.
// // this is a nice title -> This Is a Nice Title

// const convertTitleCase = function (title) {
//   const exceptions = ['a', 'an', 'and', 'the', 'but', 'or', 'on', 'in', 'with'];

//   const capitalize = str => str[0].toUpperCase() + str.slice(1);

//   const titleCase = title
//     .toLowerCase()
//     .split(' ')
//     .map(word => (exceptions.includes(word) ? word : capitalize(word)))
//     .join(' ');
//   return capitalize(titleCase);
// };

// console.log(convertTitleCase('this is a nice title'));
// console.log(convertTitleCase('this is a LONG title but not too long'));
// console.log(convertTitleCase('and here is another title with an EXAMPLE'));
