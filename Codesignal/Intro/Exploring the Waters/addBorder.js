function addBorder(picture) {
  const res = [];
  const strLength = picture[0].length;
  const length = picture.length;

  for (let i = 0; i < length; i++) {
    if (i === 0) {
      let str = "*";
      for (let j = 0; j <= strLength; j++) {
        str += "*";
      }
      res.push(str);
    }

    res.push("*" + picture[i] + "*");

    if (i === length - 1) {
      let str = "*";
      for (let j = 0; j <= strLength; j++) {
        str += "*";
      }
      res.push(str);
    }
  }

  return res;
}
