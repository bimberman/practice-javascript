function avoidObstacles(inputArray) {
  const factors = {};
  let factor = 1;
  let largest = 0;


  for (let i = 0; i < inputArray.length; i++) {
    factor = 1;
    while (factor <= inputArray[i]) {
      if ((inputArray[i] / factor) % 1 === 0) {
        factors[factor] = factor;
        largest = largest < factor ? factor : largest;
      }
      factor++;
    }
  }

  for (const num in factors) {
    if (factors[parseInt(num) + 1] === undefined) {
      return parseInt(num) + 1;
    }
  }

  return largest;
}
