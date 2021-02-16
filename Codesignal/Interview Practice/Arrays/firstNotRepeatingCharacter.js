function firstNotRepeatingCharacter(s) {
  const obj = {};

  for (let i = 0; i < s.length; i++) {
    if (!obj[s[i]]) obj[s[i]] = 0;
    obj[s[i]] += 1;
  }

  for (const [key, value] of Object.entries(obj)) {
    if (value === 1) return key
  }

  return "_";
}
