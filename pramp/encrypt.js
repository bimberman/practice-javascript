function decrypt(word) {
  // your code goes here
  let res = "";
  let prevChar = 1;

  for (let i = 0; i < word.length; i++) {
    let char = word.charCodeAt(i) + prevChar;
    if (i !== 0) {
      while (char > 123) {
        char -= 26;
      }
    }
    prevChar = char;
    res += String.fromCharCode(char);
  }
  return res;
}
