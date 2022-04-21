//card pack api 
let localApi = localStorage.getItem('localApi');
async function loadData() {
    if (localApi === '' || localApi === null) {
        localApi = JSON.stringify(await fetch('https://api.pokemontcg.io/v1/cards').then(response => response.json()));
        localStorage.setItem('localApi', localApi);
    }
    else {
        localApi = JSON.parse(localStorage.getItem('localApi'));
    }
    console.log(localApi);
    displayCardSets(localApi);
    
}
loadData();

//change buttons to display selected option and update local storage to selected options
let startButton = document.getElementById('start-button');
    const hiddenPlayers = document.getElementById('hidden-players');
    if(hiddenPlayers !== null){
        hiddenPlayers.addEventListener('click', function(e) {
            let playerId = e.target.options[e.target.selectedIndex].getAttribute('id');
            startButton.addEventListener('click', setPlayerId);
            function setPlayerId() {
                localStorage.setItem('players', playerId);
            }
        });  
    }
    

    const hiddenSize = document.getElementById('hidden-size');
    if(hiddenSize !== null){
        hiddenSize.addEventListener('click', function(e) {
            let sizeId = e.target.options[e.target.selectedIndex].getAttribute('id');
            startButton.addEventListener('click', setSizeId);
            function setSizeId() {
                localStorage.setItem('size', sizeId);
            }
        });
    }

    const hiddenCards = document.getElementById('hidden-cards');
    if(hiddenCards !== null){
        hiddenCards.addEventListener('click', function(e) {
            let packId = e.target.options[e.target.selectedIndex].getAttribute('id');
            startButton.addEventListener('click', setPackId);
            function setPackId() {
            localStorage.setItem('pack', packId);
            }
        });
    }
