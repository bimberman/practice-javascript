function firstDigit(inputString) {
  return inputString.split("").filter(char => !isNaN(parseInt(char)))[0]
}
