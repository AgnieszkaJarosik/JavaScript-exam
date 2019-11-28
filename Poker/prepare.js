function  createCards () {
    const colors = ['Heart', 'Diamond', 'Spades', 'Club'];
    const figures = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'];
    const cards = [];
    let id = 0;
    
    figures.forEach((figure, i) =>{
      colors.forEach(color=> {
        cards.push({
          id: id,
          figure: figure,
          color: color,
          weight: (i+2)
        });
        id++;
      })
    })
    return cards;
  }

function drawCards (cards, number) {
  const random = [];
  while(random.length < number) {
    let drawn = false;
    let num = Math.floor(Math.random() * cards.length);
    random.forEach(rand=>{
      if(num===rand.id) drawn = true;
    });
    if(!drawn) random.push(cards[num]);
  }
  return random;
}

function sortCards (cards) {
  cards.sort((a, b) => a.weight - b.weight);
  return cards;
}


module.exports = {
  createCards,
  drawCards,
  sortCards
}