## project 1

``` javascript

const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');
buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    const body_color = e.target.id;
    switch (body_color) {
      case 'grey':
        body.style.backgroundColor = e.target.id;
        break;
      case 'white':
        body.style.backgroundColor = e.target.id;
        break;
      case 'blue':
        body.style.backgroundColor = e.target.id;
        break;
      case 'yellow':
        body.style.backgroundColor = e.target.id;
        break;
    }
  });
});
```

## Project 2

``` javascript
const form = document.querySelector('form');

// this usecase will give you empty
// const hight = parseInt(document.querySelector('#height').value);

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    // show the result
    results.innerHTML = `<span>${bmi}</span>`;
  }
  const bmi = (weight / ((height * height) / 10000)).toFixed(2);
  if (bmi < 18.6) {
    results.innerHTML = `${bmi} Under weight `;
  } else if (bmi <= 24.9) {
    results.innerHTML = `${bmi} Normal Range`;
  } else {
    results.innerHTML = `${bmi} Over weight`;
  }
});
```

## Project 3

``` javascript
const clock = document.getElementById('clock');
// const clock = document.querySelector('#clock');
setInterval(function () {
  let date = new Date();
  // console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);
```

## Project 4

``` javascript
let random_number = (Math.random() * 100 + 1).toFixed(0);

const submit = document.querySelector('#subt');
const user_input = document.querySelector('#guessField');
const guess_slot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const low_orHi = document.querySelector('.lowOrHi');
const start_over = document.querySelector('.resultParas');

const p = document.createElement('p');

let prev_guess = [];
let num_guess = 1;

let play_game = true;

if (play_game) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(user_input.value);
    console.log(guess);
    validate_guess(guess);
  });
}

function validate_guess(guess) {
  if (isNaN(guess)) {
    alert('Please enter a valid number');
  } else if (guess < 1) {
    alert('Please enter a number more than 1');
  } else if (guess > 100) {
    alert('Please enter a number less than 100');
  } else {
    prev_guess.push();
    if (num_guess === 11) {
      display_guess(guess);
      display_message(`Game Over. Random number was ${random_number}`);
      end_game();
    } else {
      display_guess(guess);
      check_guess(guess);
    }
  }
}

function check_guess(guess) {
  if (guess === random_number) {
    display_message(`You guessed it right`);
    end_game();
  } else if (guess < random_number) {
    display_message(`Number is TOOO low`);
  } else if (guess > random_number) {
    display_message(`Number is TOOO High`);
  }
}

function display_guess(guess) {
  user_input.value = '';
  guess_slot.innerHTML += `${guess}   `;
  num_guess++;
  remaining.innerHTML = `${11 - num_guess}`;
}

function display_message(message) {
  low_orHi.innerHTML = `<h2>${message}</h2>`;
}

function end_game() {
  user_input.value = '';
  user_input.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="new_game">Start new Game</h2>`;
  start_over.appendChild(p);
  play_game = false;
  new_game();
}

function new_game() {
  const new_game_button = document.querySelector('#new_game');
  new_game_button.addEventListener('click', function (e) {
    random_number = (Math.random() * 100 + 1).toFixed(0);
    prev_guess = [];
    num_guess = 1;
    guess_slot.innerHTML = '';
    remaining.innerHTML = `${11 - num_guess}`;
    user_input.removeAttribute('disabled');
    start_over.removeChild(p);
    play_game = true;
  });
}
```


