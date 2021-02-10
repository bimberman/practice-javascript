function lineEncoding(s) {
  let num = 0;
  const res = [];

  for (let i = 0; i < s.length; i++) {
    if (res[res.length - 1] !== s[i]) {
      res[res.length - 1] = num > 1 ? num + res[res.length - 1] : res[res.length - 1];
      num = 0;
      res.push(s[i])
    }
    num++;
  }

  if (s[s.length - 2] === s[s.length - 1]) {
    res[res.length - 1] = num + res[res.length - 1];
  }

  return res.join("").toString();
}
