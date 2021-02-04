function absoluteValuesSumMinimization(a) {

  let res = null;
  let absVal = 0;

  a.forEach(evalNum => {
    let tempAbsVal = 0;
    a.forEach(subtractNum => {
      tempAbsVal += Math.abs(subtractNum - evalNum);
    })
    if (!res && res !== 0 || tempAbsVal < absVal) {
      res = evalNum;
      absVal = tempAbsVal;
    }
  })

  return res;
}
