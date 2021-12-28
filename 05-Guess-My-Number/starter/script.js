'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;

document.querySelector(`.check`).addEventListener(`click`, function () {
  const guess = Number(document.querySelector(`.guess`).value);

  if (!guess) {
    document.querySelector(`.message`).textContent = `😒 No Number`;
  } else if (guess === secretNumber) {
    document.querySelector(`.message`).textContent = `Correct Number!`;
    document.querySelector(`.score`).innerHTML = score;
    document.querySelector(`body`).style.backgroundColor = `#60b347`;
    document.querySelector(`.number`).textContent = secretNumber;
    document.querySelector(`.number`).style.width = `30rem`;
    updateHighscore(score);
  } else if (guess !== secretNumber) {
    if (score > 1) {
      document.querySelector(`.message`).textContent =
        guess > secretNumber ? `Too High!` : `Too Low!`;
      score--;
      document.querySelector(`.score`).innerHTML = score;
      document.querySelector(`body`).style.backgroundColor = `#222`;
    } else {
      document.querySelector(`.message`).textContent = `You lost the game!`;
      document.querySelector(`.score`).innerHTML = 0;
    }
  }
});

document.querySelector(`.again`).addEventListener(`click`, function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(`.message`).textContent = `Start guessing...`;
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
