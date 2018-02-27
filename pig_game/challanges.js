/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer, isGamePlaying, lastDice, winScore;

init();

document.querySelector('.btn-roll').addEventListener('click', function() {
    if (!isGamePlaying) {
        return;
    }

    // 1. Random number
    var dice0 = Math.floor(Math.random() * 6) + 1;
    var dice1 = Math.floor(Math.random() * 6) + 1;

    // 2. Display the result
    var dice0DOM = document.querySelector('#dice-0');
    var dice1DOM = document.querySelector('#dice-1');
    dice0DOM.style.display = 'block';
    dice1DOM.style.display = 'block';
    dice0DOM.src = 'dice-' + dice0 + '.png';
    dice1DOM.src = 'dice-' + dice1 + '.png';

    // 3.0. Player lost ALL score IF rolled 6 twice in a row
    // if (dice === 6 && lastDice === 6) {
    //     // Player looses score
    //     scores[activePlayer] = 0;
    //     document.querySelector('#score-' + activePlayer).textContent = '0';
    //     nextPlayer();
    // } else

    // 3.1. Update the round score IF the rolled number was NOT a 1
    if (dice0 !== 1 && dice1 !== 1) {
        // Add score
        roundScore += dice0 + dice1;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
    } else {
        // Next player
        nextPlayer();
    }

    // lastDice = dice;
});

document.querySelector('.btn-hold').addEventListener('click', function() {
    if (!isGamePlaying) {
        return;
    }

    // 1. Add CURRENT score to GLOBAL score
    scores[activePlayer] += roundScore;

    // 2. Update the UI
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

    // 3. Check if player won the game
    if (scores[activePlayer] >= winScore) {
        document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
        document.querySelector('#dice-0').style.display = 'none';
        document.querySelector('#dice-1').style.display = 'none';
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
        isGamePlaying = false;
    } else {
        // 4. Next player
        nextPlayer();
    }
});

function nextPlayer() {
    roundScore = 0;
    lastDice = 0;
    document.getElementById('current-' + activePlayer).textContent = '0';

    // activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    document.querySelector('#dice-0').style.display = 'none';
    document.querySelector('#dice-1').style.display = 'none';
}

document.querySelector('.btn-new').addEventListener('click', init);

function init() {
    scores = [0, 0];
    roundScore = 0;
    activePlayer = 0;
    isGamePlaying = true;
    winScore = document.querySelector('.win-score').value;

    document.querySelector('#dice-0').style.display = 'none';
    document.querySelector('#dice-1').style.display = 'none';

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.querySelector('#name-0').textContent = 'Player 1';
    document.querySelector('#name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
}