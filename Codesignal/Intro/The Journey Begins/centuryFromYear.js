function centuryFromYear(year) {
  if (year % 100 === 1) {
    return Math.ceil((year) / 100);
  }
  return Math.ceil((year - 1) / 100)
}
