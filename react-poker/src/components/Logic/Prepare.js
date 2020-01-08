function  createCards () {
  const colors = ['hearts', 'diamonds', 'spades', 'clubs'];
  const figures = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'];
  const cards = [];
  let id = 0;
  
  figures.forEach((figure, i) =>{
    colors.forEach(color=> {
      cards.push({
        id: id,
        figure: figure,
        color: color,
        weight: (i+2),
        src: require(`../../png/${figure}_of_${color}.png`)
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
random.sort((a, b) => a.weight - b.weight);
return random;
}

module.exports = {
createCards,
drawCards
}