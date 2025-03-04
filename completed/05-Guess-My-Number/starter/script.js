'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;

const displayMessage = function (message) {
  document.querySelector(`.message`).textContent = message;
};

document.querySelector(`.check`).addEventListener(`click`, function () {
  const guess = Number(document.querySelector(`.guess`).value);

  if (!guess) {
    displayMessage(`😒 No Number`);
  } else if (guess === secretNumber) {
    displayMessage(`Correct Number!`);
    document.querySelector(`.score`).innerHTML = score;
    document.querySelector(`body`).style.backgroundColor = `#60b347`;
    document.querySelector(`.number`).textContent = secretNumber;
    document.querySelector(`.number`).style.width = `30rem`;
    updateHighscore(score);
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? `Too High!` : `Too Low!`);
      score--;
      document.querySelector(`.score`).innerHTML = score;
      document.querySelector(`body`).style.backgroundColor = `#222`;
    } else {
      displayMessage(`You lost the game!`);
      document.querySelector(`.score`).innerHTML = 0;
    }
  }
});

document.querySelector(`.again`).addEventListener(`click`, function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage(`Start guessing...`);
  document.querySelector(`.score`).textContent = score;
  document.querySelector(`.number`).textContent = `?`;
  document.querySelector(`.guess`).value = 0;
  document.querySelector(`body`).style.backgroundColor = `#222`;
  document.querySelector(`.number`).style.width = `15rem`;
});

let highscore = 0;

const updateHighscore = function (x) {
  if (x > highscore) {
    highscore = x;
    document.querySelector(`.highscore`).textContent = x;
  }
};
