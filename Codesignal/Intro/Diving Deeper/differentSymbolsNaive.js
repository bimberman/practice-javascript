function differentSymbolsNaive(s) {
  const arr = [];
  for (let i = 0; i < s.length; i++) {
    if (!arr.includes(s[i])) {
      arr.push(s[i]);
    }
  }

  return arr.length;
}
