// Scale riddle. With 8 balls  EXAM [1,1,1,1,2,1,1,1]. One of the items will be change to two.
// Indexes are t be chosen at random. Use compressions only two times.

const argv = require("yargs").argv;
const utils = require("./utils");
const chalk = require("chalk");
const { initValue } = require("./init");

const { _: [index] } = argv;

try {
  const itemsArray = initValue(index);
  const randomIndexesArray = utils.returnRandomArray(itemsArray);
  const compareOneResult = utils.compareValues(itemsArray, randomIndexesArray, 3);
  const compareTwoResult = utils.compareValues(itemsArray, compareOneResult, 1);
  console.log(
    chalk.underline("Different weight is at index: " + chalk.cyan.bold(compareTwoResult[0]))
  );
  let itemsString = ' ';
  itemsArray.forEach( (item, i) => {
    if(i!= compareTwoResult[0] ) { itemsString += chalk.bold(item) + ' '; }
    else { itemsString += chalk.cyan.bold(item) + ' '; }
  })
  console.log(`\n ${itemsString}`);
} catch (err) {
  console.log(err.message);
}