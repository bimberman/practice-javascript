function commonCharacterCount(s1, s2) {
  let count = 0;
  for (let i = 0; i < s1.length; i++) {
    for (let j = 0; j < s2.length; j++) {
      if (s1[i] === s2[j]) {
        count++;
        s2 = s2.slice(0, j) + s2.slice(j + 1, s2.length)
        break;
      }
    }
  }

  return count;
}
