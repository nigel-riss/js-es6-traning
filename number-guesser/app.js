/*
GAME FUNCTION:
- Player must guess a number between min and max
- Player gets a certain amount of guesses
- Notify player of guesses remaining
- Notify player of the correct answer if loose
- Let player choose to play again
*/

// Game values
let min = 1,
    max = 10,
    winningNum = getRandomNum(min, max),
    guessesLeft = 3;

for (let i = 0; i < 100; i++) {
    getRandomNum(1, 10);
}

// UI Elements
const game = document.getElementById('game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessBtn = document.getElementById('guess-btn'),
      guessInput = document.getElementById('guess-input'),
      message = document.querySelector('.message');

// Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;


// Play again event listener
game.addEventListener('mousedown', function(event) {
    if (event.target.className === 'play-again') {
        window.location.reload();
    }
});

// Listen for guess
guessBtn.addEventListener('click', function() {
    let guess = parseInt(guessInput.value);
    console.log(guess);

    // Validate input
    if (isNaN(guess) || guess < min || guess > max) {
        setMessage(`Please enter a number between ${min} and ${max}`, 'red');
    }

    // Check if won
    if (guess === winningNum) {
        // Game Over - Won
        gameOver(true, `${winningNum} is correct, YOU WIN!`);
    } else {
        // Wrong number
        guessesLeft--;

        if (guessesLeft === 0) {
            // Game Over - Lost
            gameOver(false, `Game Over, you lost. The correct number was ${winningNum}`);
        } else {
            // Game continues - answer wrong

            // Change border color
            guessInput.style.borderColor = 'red';
            // Clear input
            guessInput.value = '';
            // Tell user its the wrong number
            setMessage(`${guess} is not correct, ${guessesLeft} guesses left.`, 'red');
        }
    }
});

// Game Over
function gameOver(won, msg) {
    let color;
    won === true ? color = 'green' : color = 'red';

    // Disable input
    guessInput.disabled = true;
    // Change border color
    guessInput.style.borderColor = color;
    // Set message
    setMessage(msg, color);

    // Play Again?
    guessBtn.value = 'Play Again';
    guessBtn.className += 'play-again';
}

// Set message
function setMessage(msg, color) {
    message.style.color = color;
    message.textContent = msg;
}

// Get winning number
function getRandomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}