const returnRandomArray = (arr) => {
  const randomIndexesArray = [];

  while (randomIndexesArray.length < arr.length) {
    let random = Math.floor( Math.random() * arr.length);
    let occured = false;
    for (let i=0; i<randomIndexesArray.length; i++) {
      if (random === randomIndexesArray[i]) {
        occured = true;
      }
    }
    if (occured===false) {
      randomIndexesArray.push(random);
    }
  }
  return randomIndexesArray;
}

const calculateSum = (originalArr, indexesArr) => {
  let result = 0;
  for (let i=0; i<indexesArr.length; i++) {
    let index = indexesArr[i];
    result += originalArr[index];
  }
  return result;
}

const compareValues = (originalArr, indexesArr, counter) => {
  const one = indexesArr.splice(0,counter);  
  const oneSum = calculateSum(originalArr, one);
  const two = indexesArr.splice(0, counter);
  const twoSum = calculateSum(originalArr, two)
  const three = indexesArr.splice(0,counter);

  if (oneSum > twoSum) {
    return one;
  } else if (oneSum === twoSum) {
    return three;
  } else {
    return two;
  }
}

module.exports = {
  returnRandomArray,
  calculateSum,
  compareValues
}