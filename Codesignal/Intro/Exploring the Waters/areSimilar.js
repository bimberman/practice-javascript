function areSimilar(a, b) {
  const swap = [];
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      if (swap.length) {
        if (a[i] !== b[swap[0]] || b[i] !== a[swap[0]]) return false;
      }
      swap.push(i);
    }
  }

  if (swap.length > 2) {
    return false;
  }

  return true;
}
