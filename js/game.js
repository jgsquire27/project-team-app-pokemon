//card pack api 
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
        let playerHTML = [`<li class="player-info" id="player-info1">
<<<<<<< HEAD
                                <input class="name-input-1" type="text" placeholder="Enter Player Name">
                                <p class="score" id="player1score">Score: 0</p>
                            </li>`,
                            `<li class="player-info" id="player-info2">
                                <input class="name-input-2" type="text" placeholder="Enter Player Name">
                                <p class="score" id="player2score">Score: 0</p>
                            </li>`,
                            `<li class="player-info" id="player-info3">
                                <input class="name-input-3" type="text" placeholder="Enter Player Name">
                                <p class="score" id="player3score">Score: 0</p>
                            </li>`,
                            `<li class="player-info" id="player-info4">
                                <input class="name-input-4" type="text" placeholder="Enter Player Name">
                                <p class="score" id="player4score">Score: 0</p>
=======
                                <input class="name-input" type="text" placeholder="Enter Player Name">
                                <p class="score" id="player1score">Score: <span id="score1">${player1score}</span></p>
                            </li>`,
                            `<li class="player-info" id="player-info2">
                                <input class="name-input" type="text" placeholder="Enter Player Name">
                                <p class="score" id="player2score">Score: <span id="score2">${player2score}</span></p>
                            </li>`,
                            `<li class="player-info" id="player-info3">
                                <input class="name-input" type="text" placeholder="Enter Player Name">
                                <p class="score" id="player3score">Score: <span id="score3">${player3score}</span></p>
                            </li>`,
                            `<li class="player-info" id="player-info4">
                                <input class="name-input" type="text" placeholder="Enter Player Name">
                                <p class="score" id="player4score">Score: <span id="score4">${player4score}</span></p>
>>>>>>> main
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

<<<<<<< HEAD
        //---------Jon-----//
        // let playerTurnFunction=()=>{
        //     let playerTurn =1;
        //     if(isMatch===true){
        //         playerTurn +=0;
        //     } 
        //     else if(playerTurn > 4){
        //         playerTurn = 1;
        //     }
        //     else{
        //         playerTurn +=1;
        //     }
        //     return playerTurn;
        // }
        // console.log(playerTurn)
        // playerTurnFunction();
        //---------------------//
=======
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
                messageBoard.innerText = "Player 2's turn"
            }
            else if (playerTurn === 2) {
                if (playerNumber === '2-player'){
                    playerTurn = 1;
                    messageBoard.innerText = "Player 1's turn"
                }
                else {
                    playerTurn = 3;
                    messageBoard.innerText = "Player 3's turn"
                }
            }
            else if (playerTurn === 3) {
                if (playerNumber === '3-player') {
                    playerTurn = 1;
                    messageBoard.innerText = "Player 1's turn"
                }
                else {
                    playerTurn = 4;
                    messageBoard.innerText = "Player 4's turn"
                }
            }
            else if (playerTurn === 4) {
                playerTurn = 1;
                messageBoard.innerText = "Player 1's turn"
            }
            console.log(playerTurn);
        }
>>>>>>> main

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
 let player1 = 'Player 1';
 let player2 = 'Player 2'
 let player3 = 'Player 3';
 let player4 = 'Player 4';
if (playerNumber === '1-player') {
    messageBoard.innerText = 'Pokemon Match';
}
else {
 messageBoard.innerText = player1 + "'s turn";
}

function changeText(){
    
}