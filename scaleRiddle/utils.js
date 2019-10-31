const returnRandomArray = (arr) => {
  const randomArray = [];

  while (randomArray.length < arr.length) {
    let random = Math.floor( Math.random() * arr.length);
    let occured = false;
    for (let i=0; i<randomArray.length; i++) {
      if (random === randomArray[i]) {
        occured = true;
      }
    }
    if (occured===false) {
      randomArray.push(random);
    }
  }
  return randomArray;
}

const calculateSum = (originalArr, arr) => {
  let result = 0;
  for (let i=0; i<arr.length; i++) {
    let index = arr[i];
    result += originalArr[index];
  }
  return result;
}

const compareValues = (originalArr, arr, counter) => {
  const one = arr.splice(0,counter);  
  const oneSum = calculateSum(originalArr, one);
  const two = arr.splice(0, counter);
  const twoSum = calculateSum(originalArr, two)
  const three = arr.splice(0,counter);
  const threeSum = calculateSum(originalArr, three);

  if (oneSum > twoSum) {
    return one;
  } else if (oneSum === twoSum) {
    return three;
  } else {
    return two;
  }
}

module.exports = {
  returnRandomArray: returnRandomArray,
  calculateSum: calculateSum,
  compareValues: compareValues
}