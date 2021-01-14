/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let res = 0;
  while (x !== 0) {
    res *= 10;
    res += x % 10;
    if (x > 0) x = Math.floor(x / 10);
    if (x < 0) x = Math.ceil(x / 10);
  }

  if (res < Math.pow(-2, 31) || res > Math.pow(2, 31) - 1) return 0;
  return res;
};
