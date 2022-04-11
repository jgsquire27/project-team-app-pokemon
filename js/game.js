//Generate game board
let playerNumber = localStorage.getItem('players');
let gameSize = localStorage.getItem('size');
let packSelection = localStorage.getItem('pack');
const playerDisplay = document.getElementById('player-display');
const gameBoard = document.getElementById('game-board');
//load local storage into console
function loadLs() {
    console.log(playerNumber);
    console.log(gameSize);
    console.log(packSelection);
}
loadLs();
//display correct amount of players
let playerHTML = `<li class="player-info" id="player-info">
<input class="name-input" type="text" placeholder="Enter Player Name">
<p class="score">Score: 0</p>
</li>`;
 function generateGame(){
     if (playerNumber === '1-player') {
        playerDisplay.innerHTML = playerHTML;
     }
     else if (playerNumber === '2-player'){
         playerDisplay.innerHTML = playerHTML + playerHTML;
     }
     else if (playerNumber === '3-player'){
        playerDisplay.innerHTML = playerHTML + playerHTML + playerHTML;
    }
    else if (playerNumber === '4-player'){
        playerDisplay.innerHTML = playerHTML + playerHTML + playerHTML + playerHTML;
    }
 }
 generateGame();