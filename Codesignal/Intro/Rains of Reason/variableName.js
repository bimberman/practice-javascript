function variableName(name) {
  return /^(?![0-9])[a-zA-Z0-9_]*$/ig.test(name);
}
