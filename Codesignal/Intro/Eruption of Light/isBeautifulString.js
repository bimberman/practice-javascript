function isBeautifulString(inputString) {
  let res = {};
  "abcdefghijklmnopqrstuvwxyz".split("").forEach(char => res[char] = 0);

  inputString.split("").sort((a, b) => a - b).forEach(char => {
    res[char] += 1;
  })

  res = Object.entries(res);

  for (let i = 0; i < res.length - 1; i++) {
    if (res[i][1] < res[i + 1][1]) {
      return false;
    }
  }

  return inputString ? true : false;
}
