//card pack api 
let playerNumber = localStorage.getItem('players');
let gameSize = localStorage.getItem('size');
let packSelection = localStorage.getItem('pack');
const playerDisplay = document.getElementById('player-display');
const gameBoard = document.getElementById('game-board');

let localApi = localStorage.getItem('localApi');
async function loadData() {
    if (localApi === '') {
        let renderApi = JSON.stringify(await fetch('https://api.pokemontcg.io/v1/cards').then(response => response.json()));
        localStorage.setItem('localApi', renderApi);
    }
    else {
        localApi = JSON.parse(localStorage.getItem('localApi'));
    }
    console.log(localApi);
    generateGame(localApi.cards);
}
loadData();

//load local storage into console
function loadLs() {
    console.log(playerNumber);
    console.log(gameSize);
    console.log(packSelection);
}
loadLs();
//display correct amount of players

 function generateGame(cards){
        let playerHTML = [`<li class="player-info" id="player-info1">
                                <input class="name-input" type="text" placeholder="Enter Player Name">
                                <p class="score">Score: 0</p>
                            </li>`,
                            `<li class="player-info" id="player-info2">
                                <input class="name-input" type="text" placeholder="Enter Player Name">
                                <p class="score">Score: 0</p>
                            </li>`,
                            `<li class="player-info" id="player-info3">
                                <input class="name-input" type="text" placeholder="Enter Player Name">
                                <p class="score">Score: 0</p>
                            </li>`,
                            `<li class="player-info" id="player-info4">
                                <input class="name-input" type="text" placeholder="Enter Player Name">
                                <p class="score">Score: 0</p>
                            </li>`
                        ];
        if (playerNumber === '1-player') {
            playerHTML.splice('1');
            playerDisplay.innerHTML = playerHTML;
            renderPack(cards);
        }
        else if (playerNumber === '2-player') {
            playerHTML.splice('2');
            playerDisplay.innerHTML = playerHTML;
            renderPack(cards);
        }
        else if (playerNumber === '3-player') {
            playerHTML.splice('3');
            playerDisplay.innerHTML = playerHTML;
            renderPack(cards);
        }
        else if (playerNumber === '4-player') {
            playerDisplay.innerHTML = playerHTML;
            renderPack(cards);
        }
    
 }
// card pack selector
function renderPack(cards) {
    let cardPack = [];
    if (packSelection === 'pack1') {
        cardPack = cards.slice(0, 12);
    }
    else if (packSelection ==='pack2'){
        cardPack = cards.slice(13, 24);
    }
    else {
        cardPack = cards.slice(25, 46);
    }
    renderCards(cardPack);
}


 //render game size and randomize cards
 function renderCards(cards) {
    if (gameSize === '12-cards'){
        cards.splice(6);
        const doubleCards = [...cards, ...cards];
        doubleCards.sort((a, b) => 0.5 - Math.random());
        let cardHtml = '';
        doubleCards.forEach(card => {
            cardHtml += `<div class="memory-card large" id="${card.id}">
                            <img class="front-face" src="${card.imageUrl}">
                            <img class="back-face" src="../images/cardback.jpeg">
                         </div>`
        });
        document.getElementById('game-board').innerHTML = cardHtml;
    }
    if (gameSize === '24-cards'){
        const doubleCards = [...cards, ...cards];
        doubleCards.sort((a, b) => 0.5 - Math.random());
        let cardHtml = '';
        doubleCards.forEach(card => {
            cardHtml += `<div class="memory-card small" id="${card.id}">
                            <img class="front-face" src="${card.imageUrl}">
                            <img class="back-face" src="../images/cardback.jpeg">
                         </div>`
        });
        document.getElementById('game-board').innerHTML = cardHtml;
    }
    //flip cards
    const cardflip = document.querySelectorAll('.memory-card');
    function flipCard() {
        this.classList.toggle('flip');
    }
    cardflip.forEach(card => card.addEventListener('click', flipCard));
 }


 //message board
 let messageBoard = document.getElementById('message-board');
 let player1 = 'Player 1';
 let player2 = 'Player 2'
 let player3 = 'Player 3';
 let player4 = 'Player 4';

 messageBoard.innerText = player1 + 's turn';