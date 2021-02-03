function depositProfit(deposit, rate, threshold) {
  let i = 0;
  while (deposit < threshold) {
    deposit += deposit * rate / 100;
    i++;
  }
  return i;
}
