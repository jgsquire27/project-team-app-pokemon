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

function displayCardSets(data) {
    const cardSetOne = data.cards.slice(0,12);  
    const cardSetTwo = data.cards.slice(12,24);
    const cardSetThree = data.cards.slice(24,36);
    let parentElement = document.getElementById('set-one');
    let parentElementTwo = document.getElementById('set-two');
    let parentElementThree = document.getElementById('set-three');

    for (let i = 0; i < cardSetOne.length; i++) {
        let newImg = document.createElement('img');
        newImg.src = cardSetOne[i].imageUrl;
        parentElement.appendChild(newImg);
    }
    for (let i = 0; i < cardSetTwo.length; i++) {
        let newImg = document.createElement('img');
        newImg.src = cardSetTwo[i].imageUrl;
        parentElementTwo.appendChild(newImg);
    }
    for (let i = 0; i < cardSetThree.length; i++) {
        let newImg = document.createElement('img');
        newImg.src = cardSetThree[i].imageUrl;
        parentElementThree.appendChild(newImg);
    }
}