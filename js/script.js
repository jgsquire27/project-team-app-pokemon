//card pack api 
const dataPromise = loadData();
dataPromise.then(data => {
    displayCardSets(data);
    // console.log(data.cards);

});

//----------------------------------------------------//



function displayCardSets(data) {
    //Creates first card set array//
    const cardSetOne = data.cards.slice(0,12);  
    //Creates second card set array//
    const cardSetTwo = data.cards.slice(12,24);
    //Creates third card set array//
    const cardSetThree = data.cards.slice(24,36);
    //links js to parent
    let parentElement = document.getElementById('set-one');
    for (let i = 0; i < cardSetOne.length; i++) {
        //creates an image element
        let newImg = document.createElement('img');
        //assigns image url to elements source
        newImg.src = cardSetOne[i].imageUrl;
        //adds child image to parent div
        parentElement.appendChild(newImg);
    }

    let parentElementTwo = document.getElementById('set-two');
    for (let i = 0; i < cardSetTwo.length; i++) {
        let newImg = document.createElement('img');
        newImg.src = cardSetTwo[i].imageUrl;
        parentElementTwo.appendChild(newImg);
    }

    let parentElementThree = document.getElementById('set-three');
    for (let i = 0; i < cardSetThree.length; i++) {
        let newImg = document.createElement('img');
        newImg.src = cardSetThree[i].imageUrl;
        parentElementThree.appendChild(newImg);
    }
}




    //----------------------------------------------------------------//


// dataPromise.then(data => console.log(data.sets[1]));


async function loadData() {
    return fetch('https://api.pokemontcg.io/v1/cards').then(response => response.json());
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
});