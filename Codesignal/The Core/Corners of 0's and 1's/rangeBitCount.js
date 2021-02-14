function rangeBitCount(a, b) {
  const arr = [];
  for (let i = a; i <= b; i++) {
    console.log(i)
    arr.push(i.toString(2).split("").reduce((value, bit, index) => value + parseInt(bit), 0))
  }
  return arr.reduce((accum, num) => accum + num, 0);
}
