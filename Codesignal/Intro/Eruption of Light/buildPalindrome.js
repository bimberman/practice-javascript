function buildPalindrome(st) {
  let i = 0;
  const length = st.length;
  st = st.split("");
  while (!isPalindromic(st)) {
    st.splice(length, 0, st[i]);
    i++;
  }
  return st.join("");
}

function isPalindromic(str) {
  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false;
    }
  }
  return true;
}
