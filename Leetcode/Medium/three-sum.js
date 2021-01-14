/**
 * @param {number[]} nums
 * @return {number[][]}
 */

let threeSum = function (nums) {
  const res = [];
  const target = 0;

  if (nums.length < 3) return [];

  if (nums.length > 3000) return [];

  nums.sort((a, b) => a - b)

  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    if (nums[i] < Math.pow(-10, 5) || nums.length > Math.pow(10, 5)) {
      console.log("number out of range")
      return [];
    }

    let j = i + 1;
    let k = nums.length - 1;
    let sum = 0;

    while (j < k) {
      sum = nums[i] + nums[j] + nums[k];
      if (sum > target) k--;
      else if (sum < target) j++;
      else {
        res.push([nums[i], nums[j], nums[k]])
        while (nums[j + 1] === nums[j]) j++;
        while (nums[k - 1] === nums[k]) k--;
        j++;
        k--;
      }
    }
  }

  return res;
}
