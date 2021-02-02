function alphabeticShift(inputString) {
  return inputString.split("").map(char => {
    return char === "z" ? "a" : String.fromCharCode(char.charCodeAt(0) + 1)
  }).join("")
}
