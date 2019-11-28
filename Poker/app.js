const prepare = require('./prepare');
const check = require('./check');

const cards = prepare.createCards();
let handCards = prepare.drawCards(cards, 5);

console.log(`Your cards: `);
console.log(handCards); 
prepare.sortCards(handCards);

if(check.searchRoyalFlush(handCards)){
  console.log(`Your best set is Royal Flush!`);
} else if(check.searchStraightFlush(handCards)){
  console.log(`Your best set is Strainght Flush!`);
} else if(check.searchQuads(handCards)){
  console.log(`Your best set is Quards!`);
} else if(check.searchFullHouse(handCards)){
  console.log(`Your best set is Full House!`);
} else if(check.searchFlush(handCards)){
  console.log(`Your best set is Flush!`);
} else if(check.searchStraight(handCards)){
  console.log(`Your best set is Strainght!`);
} else if(check.searchThreeOfAKind(handCards)){
  console.log(`Your best set is Three Of A Kind!`);
} else if(check.searchTwoPair(handCards)){
  console.log(`Your best set is Two Pair!`);
} else if(check.searchOnePair(handCards)){
  console.log(`Your best set is One Pair!`);
} else {
  console.log(`Your best set is High Card`);
}
// console.log(handCards);
////////////////////////////testy///////////////////////////////////////
// const royalFlush = [
//   {weight: 10, color: 'Club'}, 
//   {weight: 11, color: 'Club'}, 
//   {weight: 12, color: 'Club'}, 
//   {weight: 13, color: 'Club'}, 
//   {weight: 14, color: 'Club'}
// ]
// console.log(check.searchRoyalFlush(handCards));
// console.log(check.searchRoyalFlush(royalFlush));

// const straightFlush = [
//   {weight: 2, color: 'Club'}, 
//   {weight: 3, color: 'Club'}, 
//   {weight: 4, color: 'Club'}, 
//   {weight: 5, color: 'Club'}, 
//   {weight: 6, color: 'Club'}
// ]

// console.log(check.searchStraightFlush(handCards));
// console.log(check.searchStraightFlush(straightFlush));

// const quards = [
//   {weight: 2, color: 'Club'}, 
//   {weight: 5, color: 'Club'}, 
//   {weight: 5, color: 'Club'}, 
//   {weight: 5, color: 'Club'}, 
//   {weight: 5, color: 'Club'}
// ]

// console.log(check.searchQuads(handCards));
// console.log(`quards- ${check.searchQuads(quards)}`);

// const fullHouse = [
//   {weight: 2, color: 'Club'}, 
//   {weight: 2, color: 'Club'}, 
//   {weight: 5, color: 'Club'}, 
//   {weight: 5, color: 'Club'}, 
//   {weight: 5, color: 'Club'}
// ]

// console.log(check.searchFullHouse(handCards));
// console.log(`fullHouse-  ${check.searchFullHouse(fullHouse)}`);

// const flush = [
//   {weight: 2, color: 'Club'}, 
//   {weight: 3, color: 'Club'}, 
//   {weight: 4, color: 'Club'}, 
//   {weight: 5, color: 'Club'}, 
//   {weight: 8, color: 'Club'}
// ]

// console.log(check.searchFlush(handCards));
// console.log(`flush-  ${check.searchFlush(flush)}`);

// const straight = [
//   {weight: 2, color: 'Club'}, 
//   {weight: 3, color: 'Club'}, 
//   {weight: 4, color: 'Club'}, 
//   {weight: 5, color: 'Diamond'}, 
//   {weight: 6, color: 'Club'}
// ]

// console.log(check.searchStraight(handCards));
// console.log(`straight-  ${check.searchStraight(straight)}`);

// const ThreeOfAKind = [
//   {weight: 2, color: 'Club'}, 
//   {weight: 2, color: 'Club'}, 
//   {weight: 2, color: 'Club'}, 
//   {weight: 5, color: 'Diamond'}, 
//   {weight: 6, color: 'Club'}
// ]

// console.log(check.searchThreeOfAKind(handCards));
// console.log(`ThreeOfAKind-  ${check.searchThreeOfAKind(ThreeOfAKind)}`);

// const twoPair = [
//   {weight: 2, color: 'Club'}, 
//   {weight: 2, color: 'Club'}, 
//   {weight: 6, color: 'Club'}, 
//   {weight: 8, color: 'Diamond'}, 
//   {weight: 8, color: 'Club'}
// ]

// console.log(check.searchTwoPair(handCards));
// console.log(`searchTwoPair-  ${check.searchTwoPair(twoPair)}`);

// const onePair = [
//   {weight: 2, color: 'Club'}, 
//   {weight: 2, color: 'Club'}, 
//   {weight: 6, color: 'Club'}, 
//   {weight: 7, color: 'Diamond'}, 
//   {weight: 8, color: 'Club'}
// ]

// console.log(check.searchOnePair(handCards));
// console.log(`searchOnePair-  ${check.searchOnePair(onePair)}`);