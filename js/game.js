let playerNumber = localStorage.getItem('players');
let gameSize = localStorage.getItem('size');
let packSelection = localStorage.getItem('pack');
const playerDisplay = document.getElementById('player-display');
const gameBoard = document.getElementById('game-board');
let player1score = 0;
let player2score = 0;
let player3score = 0;
let player4score = 0;
let playerTurn = 1;
let player1 = 'Player 1';
let player2 = 'Player 2'
let player3 = 'Player 3';
let player4 = 'Player 4';

//card pack API
let localApi = localStorage.getItem('localApi');
async function loadData() {
    if (localApi === '' || localApi === null) {
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
        let playerHTML = [`<li class="player-info yellow" id="player-info1">
                                <input class="name-input" type="text" placeholder="Enter Player Name" id="input1">
                                <p class="score" id="player1score">Score: <span id="score1">${player1score}</span></p>
                            </li>`,
                            `<li class="player-info yellow" id="player-info2">
                                <input class="name-input" type="text" placeholder="Enter Player Name" id="input2">
                                <p class="score" id="player2score">Score: <span id="score2">${player2score}</span></p>
                            </li>`,
                            `<li class="player-info yellow" id="player-info3">
                                <input class="name-input" type="text" placeholder="Enter Player Name" id="input3">
                                <p class="score" id="player3score">Score: <span id="score3">${player3score}</span></p>
                            </li>`,
                            `<li class="player-info yellow" id="player-info4">
                                <input class="name-input" type="text" placeholder="Enter Player Name" id="input4">
                                <p class="score" id="player4score">Score: <span id="score4">${player4score}</span></p>
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
        cardPack = cards.slice(12, 24);
    }
    else {
        cardPack = cards.slice(24, 36);
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
    //START MATCHING GAME
    const cardflip = document.querySelectorAll('.memory-card');
    let hasFlippedCard = false;
    let lockBoard = false;
    let firstCard, secondCard;
    function flipCard() {
        if (lockBoard) return;
        if (this === firstCard) return;
        this.classList.add('flip');
        if (!hasFlippedCard) {
            hasFlippedCard = true; 
            firstCard = this;
            return;
        }
        secondCard = this;
        checkForMatch();
    }
    function checkForMatch() {
        let isMatch = firstCard.id === secondCard.id;

        //update players scores
        function updateScore() {
            if (playerTurn === 1){
                player1score = player1score + 1;
                document.getElementById('score1').innerText = player1score;
            }
            else if (playerTurn === 2) {
                player2score = player2score + 1;
                document.getElementById('score2').innerText = player2score;
            }
            else if (playerTurn === 3) {
                player3score = player3score + 1;
                document.getElementById('score3').innerText = player3score;
            }
            else if (playerTurn === 4) {
                player4score = player4score + 1;
                document.getElementById('score4').innerText = player4score;
            }
        }
        //change player turn
        function turnChange() {
            if (playerTurn === 1 && playerNumber != '1-player') {
                playerTurn = 2;
                messageBoard.innerText = player2 + "'s turn"
            }
            else if (playerTurn === 2) {
                if (playerNumber === '2-player'){
                    playerTurn = 1;
                    messageBoard.innerText = player1 + "'s turn"
                }
                else {
                    playerTurn = 3;
                    messageBoard.innerText = player3 + "'s turn"
                }
            }
            else if (playerTurn === 3) {
                if (playerNumber === '3-player') {
                    playerTurn = 1;
                    messageBoard.innerText = player1 + "'s turn"
                }
                else {
                    playerTurn = 4;
                    messageBoard.innerText = player4 + "'s turn"
                }
            }
            else if (playerTurn === 4) {
                playerTurn = 1;
                messageBoard.innerText = player1 + "'s turn"
            }
            console.log(playerTurn);
        }

        // how many players are playing and winning the game
        if (playerNumber === '1-player') {
            isMatch ? (disableCards() || updateScore()) : unflipCards();
            if (player1score === 6 && gameSize === '12-cards') {
                messageBoard.innerText = 'You Won!';
            }
            else if (player1score === 12 && gameSize === '24-cards') {
                messageBoard.innerText = 'You Won!';
            }
        }
        else if (playerNumber === '2-player') {
            isMatch ? (disableCards() || updateScore()) : (unflipCards() || turnChange());
            
        }
        else if (playerNumber === '3-player') {
            isMatch ? (disableCards() || updateScore()) : (unflipCards() || turnChange());

        }
        else if (playerNumber === '4-player') {
            isMatch ? (disableCards() || updateScore()) : (unflipCards() || turnChange());

        }
    }
    function disableCards() {
        firstCard.removeEventListener('click', flipCard);
        secondCard.removeEventListener('click', flipCard);
        resetBoard();
    }
    function unflipCards() {
        lockBoard = true;
        setTimeout(() => {
            firstCard.classList.remove('flip');
            secondCard.classList.remove('flip');
            resetBoard();
        }, 700);
    }
    function resetBoard() {
        [hasFlippedCard, lockBoard] = [false, false];
        [firstCard, secondCard] = [null, null];
    }
    cardflip.forEach(card => card.addEventListener('click', flipCard));
 }
//END MATCHING GAME

 //message board
 let messageBoard = document.getElementById('message-board');
 if (playerNumber === '1-player') {
     messageBoard.innerText = 'Pokemon Match';
 }
 else {
  messageBoard.innerText = player1 + "'s turn";
 }


 let input1 = document.getElementById('input1');
 let input2 = document.getElementById('input2');
 let input3 = document.getElementById('input3');
 let input4 = document.getElementById('input4');
 function info1() {
    player1 = input1.value;
    messageBoard.innerText = player1 + "'s turn";
    if (input1.value != ''){
        player1 = input1.value;
    }
    else {
        player1 = "Player 1"
    }
}
function info2() {
    player2 = input2.value;
    if (input2.value != ''){
        player2 = input2.value;
    }
    else {
        player2 = "Player 2"
    }
}
function info3() {
    player3 = input3.value;
    if (input3.value != ''){
        player3 = input3.value;
    }
    else {
        player3 = "Player 3"
    }
}
function info4() {
    player4 = input4.value;
    if (input4.value != ''){
        player4 = input4.value;
    }
    else {
        player4 = "Player 4"
    }
}
 input1.addEventListener('blur', info1);
 input2.addEventListener('blur', info2);
 input3.addEventListener('blur', info3);
 input4.addEventListener('blur', info4);

