function isMAC48Address(inputString) {
  const arr = inputString.split("-");
  if (arr.length !== 6) return false;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length !== 2) return false;
    if (!/^([0-9A-F])*$/.test(arr[i])) {
      return false;
    }
  }
  return true;
}
