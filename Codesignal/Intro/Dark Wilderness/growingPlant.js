function growingPlant(upSpeed, downSpeed, desiredHeight) {
  let count = 0;
  let accu = 0;

  while (desiredHeight) {
    accu += upSpeed;
    count++;
    if (accu >= desiredHeight) {
      return count;
    }
    accu -= downSpeed;
  }
}
