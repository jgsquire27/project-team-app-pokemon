//card pack api 
const dataPromise = loadData();
dataPromise.then(data => {
    displayCardSets(data);
    // console.log(data.cards);

});

//----------------------------------------------------//



function displayCardSets(data) {
    const cardSetOne = data.cards.slice(0,12);
    console.log(cardSetOne);
  
  
    const cardSetTwo = data.cards.slice(12,24);
    // console.log(cardSetTwo);
    const cardSetThree = data.cards.slice(24,36);
    // console.log(cardSetThree);
    let parentElement = document.getElementById('set-one');
      
    for (let i = 0; i < cardSetOne.length; i++) {
      createImgElement=(i)=>{
        let newImg = document.createElement('image');
        newImg.src = cardSetOne[i].imgUrl;
        parentElement.appendChild(newImg);


        // parentElement.appendChild(document.createElement('img'));    
        // let cardPackOne;
        // cardPackOne.className = 'cardPackClass';
        // cardPackOne.src = cardSetOne[i].imgUrl;
        // return cardPackOne; 
      }
      return newImg;
  
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