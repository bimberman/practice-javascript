function StringChallenge(str) {

  // check for password input length
  if(str.length<7 || 32<str.length){
    return false;
  }

  // check the existence of at least one number
  if(!/([0-9])+/g.test(str)){
    return false;
  }

  // check the existence of at least one uppercase letter
  if (!/([A-Z])+/g.test(str)) {
    return false;
  }

  // check for the existence of at least one punctuation mark or at least one math symbol
  /*
    punctuation marks:
      "<", ">", "'", "*", "\", "(", ")", ":",
      ",", "{", "}", "-", """, "!", ".", "?",
      ";", "/", "[", "]"
    The list of punctuation marks was taken from this website: http://sana.aalto.fi/awe/punctuation/symbols.html

    math symbols:
      "<", ">", "*", "(", ")", "{", "}", "-",
      "!", ".", "?", "[", "]", "&", "+", "=",
      "|", "%"
  */
  if (!/([<>'*\\():,{}\-"!.?;/\[\]&\+=|^%])+/g.test(str)) {
    return false;
  }

  if (!/^(?!.*password).*$/gi.test(str)) {
    return false;
  }

  return true;
}
