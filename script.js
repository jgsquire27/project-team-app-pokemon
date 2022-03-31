//function to display dropdown to select amount of players
const playersButton = document.getElementById('players-button');
const hiddenPlayers = document.getElementById('hidden-players');
function displayPlayers() {
    hiddenPlayers.classList.toggle('display-none');
}
playersButton.addEventListener('click', displayPlayers);
