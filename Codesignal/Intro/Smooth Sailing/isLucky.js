function isLucky(n) {
  const nums = [];
  let sum1 = 0;
  let sum2 = 0;

  while (n > 0) {
    nums.push(n % 10);
    n = Math.floor(n / 10);
  }

  for (let i = 0; i < nums.length / 2; i++) {
    sum1 += nums[i];
    sum2 += nums[nums.length - i - 1];
  }

  if (sum1 === sum2) {
    return true;
  }

  return false;
}
