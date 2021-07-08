'use strict';
const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  if (!guess) {
    document.querySelector('.message').textContent = 'NO NUMBER!!!';
  }
  if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
  }
  if (guess > secretNumber) {
    document.querySelector('.message').textContent = 'TOO HIGH!!!!';
    if (score > 0) {
      score--;
    }
    document.querySelector('.score').textContent = score;
  }
  if (guess < secretNumber) {
    document.querySelector('.message').textContent = 'TOO LOW!!!!';
    if (score > 0) {
      score--;
    }
    document.querySelector('.score').textContent = score;
  }
  if (score <= 0) {
    document.querySelector('.message').textContent =
      'Maybe you should be working at best buy like Dat Dao said';
  }
  document.querySelector('.again').addEventListener('click', function () {
    const secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.number').textContent = '?';
    if (score > document.querySelector('.highscore').textContent) {
      document.querySelector('.highscore').textContent = score;
    }

    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.score').textContent = '20';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.guess').value = '';

    document.querySelector('.check').addEventListener('click', function () {
      score = 20;
      const guess = Number(document.querySelector('.guess').value);
      console.log(guess, typeof guess);
      if (!guess) {
        document.querySelector('.message').textContent = 'NO NUMBER!!!';
      }
      if (guess === secretNumber) {
        document.querySelector('.message').textContent = 'Correct';
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
      }
      if (guess > secretNumber) {
        document.querySelector('.message').textContent = 'TOO HIGH!!!!';
        if (score > 0) {
          score--;
        }
        document.querySelector('.score').textContent = score;
      }
      if (guess < secretNumber) {
        document.querySelector('.message').textContent = 'TOO LOW!!!!';
        if (score > 0) {
          score--;
        }
        document.querySelector('.score').textContent = score;
      }
      if (score <= 0) {
        document.querySelector('.message').textContent =
          'Maybe you should be working at best buy like Dat Dao said';
      }
    });
  });
});
