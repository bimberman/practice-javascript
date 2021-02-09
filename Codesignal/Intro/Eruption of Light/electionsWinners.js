function electionsWinners(votes, k) {
  const max = Math.max(...votes);
  if (k === 0) {
    let count = 0;
    for (let i = 0; i < votes.length; i++) {
      if (votes[i] === max) {
        count++;
      }

      if (count > 1) {
        return 0;
      }
    }
    return 1;
  }
  let res = 0;
  votes.forEach(v => {
    if (v + k > max) res++;
  })
  return res;
}
