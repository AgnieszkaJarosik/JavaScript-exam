function searchRoyalFlush (cards) {
  let found = false;
  if(cards[0].weight===10 && cards[4].weight===14){
    found = true;
    const color = cards[0].color;
    cards.forEach(card => {
      if (color !== card.color) found = false;
    })
  }
  return found;
}

function searchStraightFlush (cards) {
  let found = false;
  
  if((cards[4].weight - cards[0].weight) === 4){
    found = true;
    const color = cards[0].color;
    cards.forEach(card => {
      if (color !== card.color) found = false;
    })
  }
  return found;
}

function searchQuads (cards) {
  let found = false;
  
  if((cards[0].weight === cards[3].weight) || (cards[1].weight === cards[4].weight)){
    found = true;
  }
  return found;
}

function searchFullHouse (cards) {
  let found = false;
  
  if((cards[0].weight === cards[2].weight) && (cards[3].weight === cards[4].weight) ||
   (cards[2].weight === cards[4].weight) && (cards[0].weight===cards[1].weight)){
    found = true;
  }
  return found;
}	

function searchFlush (cards) {
  let found = true;
  const color = cards[0].color;
  cards.forEach(card => {
    if(card.color !== color) found = false;
  });
  if((cards[0].weight - cards[4].weight) === 4) found = false;
  return found;
}

function searchStraight (cards) {
  let found = false;
  
  if((cards[4].weight - cards[0].weight) === 4){
    const color = cards[0].color;
    cards.forEach(card => {
      if (color !== card.color) found = true;
    })
  }
  return found;
}

function searchThreeOfAKind (cards) {
  let found = false;
  
  if((cards[0].weight === cards[2].weight) || 
  (cards[1].weight === cards[3].weight) || 
  (cards[2].weight === cards[4].weight)){
     found = true;
  }
  return found;
}

function searchTwoPair (cards) {
  let found = false;
  
  if((cards[0].weight === cards[1].weight) &&  (cards[2].weight === cards[3].weight) ||
  (cards[0].weight === cards[1].weight) &&  (cards[3].weight === cards[4].weight) || 
  (cards[1].weight === cards[2].weight) &&  (cards[3].weight === cards[4].weight)){
     found = true;
  }
  return found;
}

function searchOnePair (cards) {
  let found = false;
  
  if((cards[0].weight === cards[1].weight) ||
  (cards[1].weight === cards[2].weight) || 
  (cards[2].weight === cards[3].weight) ||
  (cards[3].weight === cards[4].weight)){
     found = true;
  } else if (cards[0].weight === cards[2].weight ||
    cards[2].weight === cards[4].weight) {
    found = false;
  }
  return found;
}

module.exports = {
  searchRoyalFlush,
  searchStraightFlush,
  searchQuads, 
  searchFullHouse,
  searchFlush,
  searchStraight,
  searchThreeOfAKind,
  searchTwoPair,
  searchOnePair
}