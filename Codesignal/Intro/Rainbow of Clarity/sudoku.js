function sudoku(grid) {

  for (let i = 0; i < grid.length; i++) {
    let row = [].concat(grid[i]);
    let col = [].concat([grid[0][i], grid[1][i], grid[2][i],
    grid[3][i], grid[4][i], grid[5][i],
    grid[6][i], grid[7][i], grid[8][i]]);
    if (!check(row)) return false;
    if (!check(col)) return false;
  }

  for (let row = 0; row < grid.length - 3; row += 3) {
    for (let col = 0; col < grid.length - 3; col += 3) {
      if (!check([grid[row][col], grid[row][col + 1], grid[row][col + 2],
      grid[row + 1][col], grid[row + 1][col + 1], grid[row + 1][col + 2],
      grid[row + 2][col], grid[row + 2][col + 1], grid[row + 2][col + 2]])) return false;
    }
  }
  return true;
}

function check(arr) {
  return /123456789/.test(arr.sort().join(""));
}
