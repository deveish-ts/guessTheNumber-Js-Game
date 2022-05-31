'use strict';
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'it's worked';
// document.querySelector('.number').textContent = '500';
// document.querySelector('.score').textContent = '800';
// console.log(document.querySelector('.guess').value);
// document.querySelector('.guess').value = 89;

// TODO: Generate a random number between 1-20;
let randomNumber = Math.trunc(Math.random() * 20) + 1;
// TODO: A variable for score, so that we can - the score if the guess is incorrect
let score = 20;
let highestScore = 0;

// document.querySelector('.number').textContent = randomNumber;
// console.log(randomNumber);
document.querySelector('.check').addEventListener('click', function () {
  //   console.log(document.querySelector('.guess').value);

  const guess = Number(document.querySelector('.guess').value);
  console.log(typeof guess, guess);
  if (!guess) {
    document.querySelector('.message').textContent = 'NO NUMBER⚠️⚠️';
    // document.querySelector('.check').disabled = true;
  } else if (guess === randomNumber) {
    document.querySelector('.message').textContent = 'Right Number!!🎉🎉';

    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').style.width = '40rem';
    document.querySelector('.number').textContent = randomNumber;
    if (score > highestScore) {
      highestScore = score;
      document.querySelector('.highscore').textContent = highestScore;
    }
  } else if (guess > randomNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too High!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent =
        'You lose the game 🙂🙂🙂🙂';
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = 'red';
    }
  } else if (guess < randomNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent =
        'You lose the game 🙂🙂🙂🙂';
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = 'red';
    }
  }
});
//TODO: Restart the game when user clicks the again button
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  randomNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
