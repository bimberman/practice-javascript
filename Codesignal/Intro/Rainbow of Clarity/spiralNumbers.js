function spiralNumbers(n) {
  const res = [];
  for (let i = 0; i < n; i++) {
    res.push(new Array(n));
    for (let j = 0; j < n; j++) {
      res[i][j] = 0;
    }
  }

  let row = 0;
  let col = 0;
  let counter = 1;
  let dir = [[0, 1], [1, 0], [0, -1], [-1, 0]];
  let dirIndex = 0;

  while (counter <= n * n) {
    const [dRow, dCol] = dir[dirIndex];
    const [nextRow, nextCol] = [row + dRow, col + dCol];

    if (res[row][col] === 0) {
      res[row][col] = counter;
      counter++;
    }

    if (checkNextCoord(res, nextRow, nextCol)) {
      row = nextRow;
      col = nextCol;
    } else {
      dirIndex++;
      if (dirIndex === dir.length) dirIndex = 0;
    }
  }

  return res;
}

function checkNextCoord(matrix, nextRow, nextCol) {
  if (matrix[nextRow] !== undefined) {
    if (matrix[nextRow][nextCol] !== undefined) {
      if (matrix[nextRow][nextCol] === 0) return true;
    }
  }
  return false;
}
