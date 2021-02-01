function boxBlur(image) {
  const res = [];

  for (let i = 2; i < image.length; i++) {
    const temp = [];
    for (let j = 2; j < image[i].length; j++) {
      const num = image[i - 2][j - 2] + image[i - 2][j - 1] + image[i - 2][j] +
        image[i - 1][j - 2] + image[i - 1][j - 1] + image[i - 1][j] +
        image[i][j - 2] + image[i][j - 1] + image[i][j];
      temp.push(Math.floor(num / 9))
    }
    res.push(temp);
  }
  return res;
}
