//card pack api 
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
}
loadData();

//change buttons to display selected option and update local storage to selected options
let startButton = document.getElementById('start-button');
document.getElementById('hidden-players').addEventListener('change', function(e) {
    let playerId = e.target.options[e.target.selectedIndex].getAttribute('id');
    startButton.addEventListener('click', setPlayerId);
    function setPlayerId() {
        localStorage.setItem('players', playerId);
    }
});

document.getElementById('hidden-size').addEventListener('change', function(e) {
    let sizeId = e.target.options[e.target.selectedIndex].getAttribute('id');
    startButton.addEventListener('click', setSizeId);
    function setSizeId() {
        localStorage.setItem('size', sizeId);
    }
});

document.getElementById('hidden-cards').addEventListener('change', function(e) {
    let packId = e.target.options[e.target.selectedIndex].getAttribute('id');
    startButton.addEventListener('click', setPackId);
    function setPackId() {
    localStorage.setItem('pack', packId);
    }
});
