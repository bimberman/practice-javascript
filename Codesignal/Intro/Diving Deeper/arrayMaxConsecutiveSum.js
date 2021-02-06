function arrayMaxConsecutiveSum(inputArray, k) {
  let max = 0;
  for (let i = 0; i < inputArray.length - k + 1; i++) {
    let temp = 0;
    for (let j = i; j < i + k; j++) {
      temp += inputArray[j];
    }
    max = Math.max(max, temp)
  }
  return max;
}
