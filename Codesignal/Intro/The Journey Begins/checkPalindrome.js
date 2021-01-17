function checkPalindrome(inputString) {

  for (let index = 0; index < inputString.length / 2; index++) {
    if (inputString[index] !== inputString[inputString.length - index - 1]) {
      console.log(`${inputString[index]} !== ${inputString[inputString.length - index]}`)
      return false;
    }
  }

  return true;
}
