function circleOfNumbers(n, firstNumber) {
  if (n / 2 === firstNumber) {
    return 0;
  }
  return n / 2 >= firstNumber ? n / 2 + firstNumber : Math.abs(n / 2 - firstNumber);
}
