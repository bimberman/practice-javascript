function palindromeRearranging(inputString) {
  const letters = {};
  let odds = 0;
  for (let i = 0; i < inputString.length; i++) {
    const letter = inputString[i];
    if (letters[letter]) {
      letters[letter].count += 1;
    } else {
      letters[letter] = {
        letter: letter,
        count: 1
      }
    }
  }


  for (const [key, value] of Object.entries(letters)) {
    if (value.count % 2 === 1) {
      odds++;
    }

    if (odds > 1) {
      return false;
    }
  }

  if (inputString.length % 2 === 1) {
    if (odds !== 1) {
      return false;
    }
  }

  return true;
}
