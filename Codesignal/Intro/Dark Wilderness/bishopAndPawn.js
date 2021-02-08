function bishopAndPawn(bishop, pawn) {
  bishopNum = bishop.charCodeAt(0) + parseInt(bishop[1]);
  pawnNum = pawn.charCodeAt(0) + parseInt(pawn[1]);
  if ((bishopNum - pawnNum) % 2 === 1) {
    return false;
  }

  if (Math.abs(parseInt(bishop[1]) - parseInt(pawn[1])) !== Math.abs(bishop.charCodeAt(0) - pawn.charCodeAt(0))) {
    return false;
  }

  return true;
}
