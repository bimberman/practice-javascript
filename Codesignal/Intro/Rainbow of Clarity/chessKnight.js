function chessKnight(cell) {
  const UP = 1;
  const DOWN = -1;
  const RIGHT = 1;
  const LEFT = -1;
  let count = 0;

  const pos = cell.split("");

  pos[0] = pos[0].charCodeAt();
  pos[1] = parseInt(pos[1]);

  // UP
  if (pos[1] + 2 * UP < 9) {

    if (pos[0] + RIGHT < 105) {
      count++;
    }

    if (pos[0] + LEFT > 96) {
      count++;
    }
  }

  // DOWN
  if (pos[1] + 2 * DOWN > 0) {

    if (pos[0] + RIGHT < 105) {
      count++;
    }

    if (pos[0] + LEFT > 96) {
      count++;
    }
  }

  // RIGHT
  if (pos[0] + 2 * RIGHT < 105) {

    if (pos[1] + UP < 9) {
      count++;
    }

    if (pos[1] + DOWN > 0) {
      count++;
    }
  }

  // LEFT
  if (pos[0] + 2 * LEFT > 96) {

    if (pos[1] + UP < 9) {
      count++;
    }

    if (pos[1] + DOWN > 0) {
      count++;
    }
  }

  return count;
}
