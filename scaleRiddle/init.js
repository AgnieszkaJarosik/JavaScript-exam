const chalk = require("chalk");

const itemsArray = [1, 1, 1, 1, 1, 1, 1, 1];

module.exports = {
  initValue: ( index = 4 ) => {
    if (index >= itemsArray.length || index < 0) {
      throw new Error("Index must be in size of an array");
    } else if (typeof index !== "number") {
      throw new Error("Index must be a number");
    } else {
      itemsArray[index] = 2;
      return itemsArray;
    }
  }
}
