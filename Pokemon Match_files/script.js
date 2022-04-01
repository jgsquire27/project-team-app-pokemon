//function to display dropdown to select amount of players
const playersButton = document.getElementById('players-button');
const hiddenPlayers = document.getElementById('hidden-players');
function displayPlayers() {
    hiddenPlayers.classList.toggle('display-none');
}
playersButton.addEventListener('click', displayPlayers);
//display dropdown to select game size
const sizeButton = document.getElementById('size-button');
const hiddenSize = document.getElementById('hidden-size');
function displaySize(){
    hiddenSize.classList.toggle('display-none');
}
sizeButton.addEventListener('click', displaySize);

//card pack api 
function getData() {
    const response = await fetch('https://api.pokemontcg.io/v1/sets')
    const data = await response.json()
  }
console.log(getData);
