function isIPv4Address(inputString) {
  const numberArr = inputString.split(".")

  console.log(numberArr)


  if (numberArr.length < 4 || numberArr.length > 4) {
    return false;
  }

  for (let i = 0; i < numberArr.length; i++) {
    if (!numberArr[i].match(/^\d+$/)) {
      return false;
    }

    if (numberArr[i].match(/^(?:0|\\+)[0-9]+$/)) {
      return false;
    }

    const num = Number(numberArr[i]);
    if (num < 0) {
      return false;
    }
    if (num > 255) {
      return false;
    }

  }
  return true;
}
