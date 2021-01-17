function matrixElementsSum(matrix) {
  let sum = 0;
  let ghost = [];
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) {
        ghost.push(j)
      }

      if (!ghost.includes(j)) {
        sum += matrix[i][j];
      }
    }
  }
  return sum;
}
