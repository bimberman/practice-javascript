function allLongestStrings(inputArray) {
  let res = [];
  let longestString = 0;
  console.log(inputArray)
  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i].length > longestString) {
      res.splice(0);
    }

    if (inputArray[i].length >= longestString) {
      res.push(inputArray[i]);
      longestString = inputArray[i].length;
    }
  }

  return res;
}
