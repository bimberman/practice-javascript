function phoneCall(min1, min2_10, min11, s) {

  if (s < min1) return 0;

  if (s - min1 < min2_10) return 1;

  return (s - min1) / (9 * min2_10) > 1
    ? 1 + 9 + Math.floor((s - min1 - min2_10 * 9) / min11)
    : 1 + Math.floor((s - min1) / (min2_10))
}
