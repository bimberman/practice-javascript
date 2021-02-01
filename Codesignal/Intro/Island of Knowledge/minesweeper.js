function minesweeper(matrix) {
  const res = [];

  for (let i = 0; i < matrix.length; i++) {
    const temp = [];
    for (let j = 0; j < matrix[i].length; j++) {
      let num = 0;

      if (matrix[i - 1] !== undefined && matrix[i - 1][j - 1]) {
        num++;
      }

      if (matrix[i - 1] !== undefined && matrix[i - 1][j]) {
        num++;
      }

      if (matrix[i - 1] !== undefined && matrix[i - 1][j + 1]) {
        num++;
      }

      if (matrix[i] !== undefined && matrix[i][j - 1]) {
        num++;
      }

      if (matrix[i] !== undefined && matrix[i][j + 1]) {
        num++;
      }

      if (matrix[i + 1] !== undefined && matrix[i + 1][j - 1]) {
        num++;
      }

      if (matrix[i + 1] !== undefined && matrix[i + 1][j]) {
        num++;
      }

      if (matrix[i + 1] !== undefined && matrix[i + 1][j + 1]) {
        num++;
      }

      temp.push(num)
    }
    res.push(temp);
  }
  return res;
}
