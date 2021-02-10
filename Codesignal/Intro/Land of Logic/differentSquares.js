function differentSquares(matrix) {
  const res = [];

  for (let i = 0; i < matrix.length - 1; i++) {
    for (let j = 0; j < matrix[i].length - 1; j++) {
      const twoByTwo = [matrix[i][j], matrix[i][j + 1], matrix[i + 1][j], matrix[i + 1][j + 1]];
      if (res.every(test => test[0] !== twoByTwo[0] || test[1] !== twoByTwo[1] || test[2] !== twoByTwo[2] || test[3] !== twoByTwo[3])) {
        res.push(twoByTwo);
      }
    }
  }
  console.log(res)
  return res.length;
}
