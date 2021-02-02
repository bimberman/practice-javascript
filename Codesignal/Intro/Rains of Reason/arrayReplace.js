function arrayReplace(inputArray, elemToReplace, substitutionElem) {
  return inputArray.map(ele => {
    if (ele === elemToReplace) {
      return substitutionElem;
    }
    return ele;
  })
}
