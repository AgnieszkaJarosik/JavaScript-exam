const checkColor = cards => cards.every( card => card.color === cards[0].color );

const sortCards = cards => cards.sort( (a, b) => a.weight - b.weight);

const sortWeight = cards => {
  return cards.reduce( (acc, curr) => { 
    let value = curr.weight;
    if (Array.isArray(acc[value])) {
      acc[value].push(curr);
    }
    else {
      acc[value] = [curr];
    }
    return acc;
  }, {});
}

const checkPokerHand = cards => {
  const sortByWeight = sortWeight(cards);

  if ( checkColor(cards) ) {
    if ( cards[0].weight === 10 && cards[4].weight === 14) {
      return '  Royal flush';
    } else if (( cards[4].weight - cards[0].weight) === 4 ) {
      return `  ${cards[4].figure}-high Straight Flush`; 
    } else if ( (cards[4].weight - cards[0].weight) === 12 && (cards[3].weight - cards[0].weight) === 3 ) {
      return `  ${cards[3].figure}-high Straight Flush`;
    } else {
      return `  ${cards[4].figure}-high Flush`;
    }
  } else if( Object.keys(sortByWeight).length === 2 ){
    let fullHouse = false;
    let figure = '';
    for (const property in sortByWeight) {
      if (sortByWeight[property].length === 4) {
        return `  Four of a Kind,  ${sortByWeight[property][0].figure}`;
      } else if (sortByWeight[property].length === 3 ) {
        if (fullHouse) {
          return `  Full House,  ${sortByWeight[property][0].figure} over ${figure}`;
        } else {
          figure = sortByWeight[property][0].figure;
          fullHouse = true;
        }
      } else if ( sortByWeight[property].length === 2 ) {       
        if (fullHouse) {
          return `  Full House,  ${figure} over ${sortByWeight[property][0].figure}`;
        } else {
          figure = sortByWeight[property][0].figure;
          fullHouse = true;
        }
      } 
    }
  } else if ( Object.keys(sortByWeight).length === 5 ) {
    if ( (cards[4].weight - cards[0].weight) === 4 ) {
      return `  ${cards[4].figure}-high Straigh`;
    } else if ( (cards[4].weight - cards[0].weight) === 12 && (cards[3].weight - cards[0].weight) === 3) {
      return `  ${cards[3].figure}-high Straigh`;
    } else {
      return `  ${cards[4].figure}-High`;
    }
  } else if ( Object.keys(sortByWeight).length === 3 ) {
    let first = true;
    let one = '';
    for (const property in sortByWeight) {
      if ( sortByWeight[property].length === 3 ) {
        return `  Three of a kind, ${sortByWeight[property][0].figure}`;
      } else if ( sortByWeight[property].length === 2 ) {
        if (first) {
          one = sortByWeight[property][0].figure;
          first = false;
        } else {
          return `  Two pair, ${sortByWeight[property][0].figure} over ${one}`;
        }
      }
    }
  } else if ( Object.keys(sortByWeight).length === 4 ) {
    for (const property in sortByWeight) {
      if ( sortByWeight[property].length === 2 ) {
        let value = sortByWeight[property][0].figure;
        return `  Pair of ${value}`;
      }
    }
  }
}

module.exports = {
  checkColor, 
  sortWeight, 
  checkPokerHand,
  sortCards
}