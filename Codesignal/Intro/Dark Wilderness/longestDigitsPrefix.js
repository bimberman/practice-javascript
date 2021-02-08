function longestDigitsPrefix(inputString) {
  return inputString.match(/(^[0-9]+)/) ? inputString.match(/(^[0-9]+)/)[0] : "";
}
