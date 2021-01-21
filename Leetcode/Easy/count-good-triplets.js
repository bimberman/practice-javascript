/**
 * @param {number[]} arr
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
var countGoodTriplets = function (arr, a, b, c) {
  let res = 0;

  for (let i = 0; i < arr.length - 2; i++) {
    for (let j = i + 1; j < arr.length - 1; j++) {
      if (a < Math.abs(arr[i] - arr[j])) {
        continue;
      }
      for (let k = j + 1; k < arr.length; k++) {

        if (b < Math.abs(arr[j] - arr[k])) {
          continue;
        }

        if (c < Math.abs(arr[i] - arr[k])) {
          continue;
        }

        res++;
      }
    }
  }

  return res;
};
