function sortByHeight(a) {
  const res = [];
  const trees = [];

  for (let i = 0; i < a.length; i++) {
    if (a[i] === -1) {
      trees.push(i);
    } else {
      res.push(a[i])
    }
  }
  res.sort((a, b) => a - b);
  for (let j = 0; j < trees.length; j++) {
    res.splice(trees[j], 0, -1);
  }
  return res;
}
