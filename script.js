'use strict';

/*

// select the message class (the element)
let x = document.querySelector('.message');

//this selects the text iside that element
let xTxt = document.querySelector('.message').textContent;

//modify txt content the same-ish
document.querySelector('.message').textContent = 'correct nr';

document.querySelector('.number').textContent = 13;

// modify input value
document.querySelector('.guess').value = 23;


*/

// EVENTS
// handle click event

//math.trunc te scapa de decimale
let SECRET_NR = Math.trunc(Math.random() * 21);
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const setScore = function (score) {
  document.querySelector('.score').textContent = score;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  document.querySelector('.again').addEventListener('click', function () {
    console.log('resetting game');
    score = 20;
    SECRET_NR = Math.trunc(Math.random() * 21);

    displayMessage('start guessing');
    setScore(score);
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = 'black';
    document.querySelector('.number').style.width = '15rem';
  });

  if (!guess) {
    // document.querySelector('.message').textContent = 'no number';
    displayMessage('no number');
  } else if (guess === SECRET_NR) {
    // document.querySelector('.message').textContent = 'corect !!!!!';
    displayMessage('correct');
    document.querySelector('.number').textContent = SECRET_NR;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    // guess is wrong
  } else if (guess !== SECRET_NR) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      //   guess > SECRET_NR ? 'too high' : 'too low';
      displayMessage(guess > SECRET_NR ? 'too high' : 'too low');
      score--; // score = score - 1;
      setScore(score);
    } else {
      // document.querySelector('.message').textContent = 'you lost the game';
      displayMessage('you lost the game');
      setScore(0);
    }
  }
});

//   } else if (guess < SECRET_NR) {
//     if (score > 1) {
//       document.querySelector('.message').textContent = '2 low';
//       score--; // score = score - 1;
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.message').textContent = 'you lost the game';
//       document.querySelector('.score').textContent = 0;
//     }
//   }
// });
