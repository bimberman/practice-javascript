function reverseInParentheses(inputString) {
  while (inputString.includes('(')) {
    var l = inputString.lastIndexOf('(');
    var r = inputString.indexOf(')', l);
    inputString = inputString.slice(0, l) + reverse(inputString.slice(l + 1, r)) + (r + 1 === inputString.length ? inputString.slice(r, -1) : inputString.slice(r + 1));
  }
  return inputString;
}

var reverse = (str) => str.split('').reverse().join('');
