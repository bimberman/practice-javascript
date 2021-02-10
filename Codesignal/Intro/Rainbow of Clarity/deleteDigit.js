function deleteDigit(n) {
  const arr = n.toString().split("");
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    max = Math.max(max, parseInt(arr.slice(0, i).join("") + arr.slice(i + 1, arr.length).join("")))
  }

  return max;
}
