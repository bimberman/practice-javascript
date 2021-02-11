function messageFromBinaryCode(code) {
  let res = "";
  code = code.split("");
  let i = 0;
  let temp = "";

  while (code.length) {
    i++;
    temp += code.shift();
    if (i === 8 || code.length === 0) {
      console.log(temp);
      res += String.fromCharCode(parseInt(temp, 2));
      i = 0;
      temp = "";
    }
  }

  return res;
}
