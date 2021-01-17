function adjacentElementsProduct(inputArray) {
  let product = inputArray[0] * inputArray[1];
  for (let index = 1; index < inputArray.length - 1; index++) {
    if (inputArray[index] * inputArray[index + 1] > product) {
      product = inputArray[index] * inputArray[index + 1];
    }
  }

  return product;
}
