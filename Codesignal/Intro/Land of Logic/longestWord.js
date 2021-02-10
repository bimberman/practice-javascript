function longestWord(text) {
  text = text.match(/[a-zA-Z]+/g);
  console.log(text)
  let max = 0;
  let res = "";
  for (let i = 0; i < text.length; i++) {
    if (text[i].length > max) {
      res = text[i];
      max = text[i].length;
    }
  }

  return res;
}
