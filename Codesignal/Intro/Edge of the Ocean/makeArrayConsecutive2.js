function makeArrayConsecutive2(statues) {
  let res = 0;
  statues.sort((a, b) => a - b)
  for (let index = 0; index < statues.length - 1; index++) {
    if (statues[index + 1] - statues[index] !== 1) {
      res += statues[index + 1] - statues[index] - 1;
    }
  }
  return res;
}
