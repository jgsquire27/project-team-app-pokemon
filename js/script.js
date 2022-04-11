//card pack api 
const dataPromise = loadData();
dataPromise.then(data => console.log(data));

function loadData() {
    return fetch('https://api.pokemontcg.io/v1/sets').then(response => response.json());
}

//change buttons to display selected option and update local storage to selected options
localStorage.setItem('players', '1-player');
localStorage.setItem('size', '12-cards');
localStorage.setItem('pack', 'pack1');

document.getElementById('hidden-players').addEventListener('change', function(e) {
    let playerId = e.target.options[e.target.selectedIndex].getAttribute('id');
    localStorage.setItem('players', playerId);
});

document.getElementById('hidden-size').addEventListener('change', function(e) {
    let sizeId = e.target.options[e.target.selectedIndex].getAttribute('id');
    localStorage.setItem('size', sizeId);
});

document.getElementById('hidden-cards').addEventListener('change', function(e) {
    let packId = e.target.options[e.target.selectedIndex].getAttribute('id');
    localStorage.setItem('pack', packId);
<<<<<<< HEAD
});
=======
});
>>>>>>> Noah
