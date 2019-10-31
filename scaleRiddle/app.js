// Scale riddle. With 8 balls  EXAM [1,1,1,1,2,1,1,1]. One of the items will be change to two.
// Indexes are t be chosen at random. Use compressions only two times. 

const utils = require('./utils');

const ballsArray = [1,2,1,1,1,1,1,1];

const randomArr = utils.returnRandomArray(ballsArray);

const compareOneResult = utils.compareValues(ballsArray, randomArr, 3);

const compareTwoResult = utils.compareValues(ballsArray, compareOneResult, 1);

console.log('Two is at index: ' + compareTwoResult[0]);