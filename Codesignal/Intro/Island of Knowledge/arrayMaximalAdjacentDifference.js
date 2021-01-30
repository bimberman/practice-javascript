function arrayMaximalAdjacentDifference(inputArray) {
  let res = 0;

  for (let i = 0; i < inputArray.length - 1; i++) {
    if (res < Math.abs(inputArray[i] - inputArray[i + 1])) {
      res = Math.abs(inputArray[i] - inputArray[i + 1]);
    }
  }
  return res;
}
