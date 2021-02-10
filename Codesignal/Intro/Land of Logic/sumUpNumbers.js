function sumUpNumbers(inputString) {
  if (!inputString || inputString === "") return 0;
  if (!inputString.match(/\d+/g) || inputString.match(/\d+/g) === "") return 0;
  return inputString.match(/\d+/g).reduce((sum, num) => sum + parseInt(num), 0)
}
