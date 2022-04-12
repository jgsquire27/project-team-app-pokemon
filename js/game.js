//card pack api 
const dataPromise = loadData();
function loadData() {
    return fetch('https://api.pokemontcg.io/v1/cards').then(response => response.json());
}

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
 function generateGame(cards){
     if (playerNumber === '1-player') {
        playerDisplay.innerHTML = playerHTML;
        renderCards(cards);
     }
    //  else if (playerNumber === '2-player'){
    //      playerDisplay.innerHTML = playerHTML + playerHTML;
    //  }
    //  else if (playerNumber === '3-player'){
    //     playerDisplay.innerHTML = playerHTML + playerHTML + playerHTML;
    // }
    // else if (playerNumber === '4-player'){
    //     playerDisplay.innerHTML = playerHTML + playerHTML + playerHTML + playerHTML;
    // }
 }
 dataPromise.then(data => generateGame(data.cards));

 //12 cards
 function renderCards(cards) {
    if (gameSize === '12-cards'){
        cards.splice(6);
        const doubleCards = [...cards, ...cards];
        doubleCards.sort((a, b) => 0.5 - Math.random());
        let cardHtml = '';
        doubleCards.forEach(card => {
            cardHtml += `<div class="memory-card" id="${card.id}">
                            <img class="front-face" src="${card.imageUrl}">
                            <img class="back-face" src="../images/cardback.jpeg">
                         </div>`
        });
        document.getElementById('game-board').innerHTML = cardHtml;
    }
    if (gameSize === '24-cards'){
        cards.splice(12);
        const doubleCards = [...cards, ...cards];
        doubleCards.sort((a, b) => 0.5 - Math.random());
        let cardHtml = '';
        doubleCards.forEach(card => {
            cardHtml += `<div class="memory-card" id="${card.id}">
                            <img class="front-face" src="${card.imageUrl}">
                            <img class="back-face" src="../images/cardback.jpeg">
                         </div>`
        });
        document.getElementById('game-board').innerHTML = cardHtml;
    }
    const cardflip = document.querySelectorAll('.memory-card');
    function flipCard() {
        this.classList.toggle('flip');
    }
    cardflip.forEach(card => card.addEventListener('click', flipCard));
 }