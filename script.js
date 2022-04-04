//function to display dropdown to select amount of players
const playersButton = document.getElementById('players-button');
const hiddenPlayers = document.getElementById('hidden-players');
function displayPlayers() {
    hiddenPlayers.classList.toggle('display-none');
}

//display dropdown to select game size
const sizeButton = document.getElementById('size-button');
const hiddenSize = document.getElementById('hidden-size');
function displaySize(){
    hiddenSize.classList.toggle('display-none');
}
sizeButton.addEventListener('click', displaySize);

//display dropdown to select card pack
const cardsButton = document.getElementById('cards-button');
hiddenCards = document.getElementById('hidden-cards');
function displayCards() {
    hiddenCards.classList.toggle('display-none');
}
cardsButton.addEventListener('click', displayCards);

//card pack api 
const dataPromise = loadData();
dataPromise.then(data => console.log(data));

function loadData() {
    return fetch('https://api.pokemontcg.io/v1/sets').then(response => response.json());
}

//change buttons to display selected option
function changePlayer() {
    console.log(document.getElementById('hidden-players').selectedIndex);
}
