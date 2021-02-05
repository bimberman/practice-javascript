function extractEachKth(inputArray, k) {
  const amount = Math.floor(inputArray.length / k);
  let res = inputArray;
  for (let i = 1; i <= amount; i++) {
    if (i * k - i !== inputArray.length) {
      res.splice(i * k - i, 1);
    }
  }

  return res;
}
