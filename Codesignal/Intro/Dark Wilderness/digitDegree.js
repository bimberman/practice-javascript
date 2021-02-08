function digitDegree(n) {
  let count = 0;
  while (n > 9) {
    let sum = 0;
    n = n + "";
    n.split("").forEach(num => {
      sum += parseInt(num);
    })
    n = sum;
    count++;
  }
  return count;
}
