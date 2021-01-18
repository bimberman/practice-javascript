function StringChallenge(str) {
  const res = [0,0,0,0,0,0];

  // check for password input length
  // too short
  if (str.length < 7) {
    res[0] = 1;
    res[1] = 1;
  }

  // too long
  if (32 < str.length) {
    res[0] = 1;
    res[2] = 1;
  }

  // check the existence of at least one number
  if (!/([0-9])+/g.test(str)) {
    res[0] = 1;
    res[3] = 1;
  }

  // check the existence of at least one uppercase letter
  if (!/([A-Z])+/g.test(str)) {
    res[0] = 1;
    res[4] = 1;
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
    res[0] = 1;
    res[5] = 1;
  }

  if (!/^(?!.*password).*$/gi.test(str)) {
    res[0] = 1;
    res[6] = 1;
  }

  return res;
}

// Enter the test password here:
const form = document.getElementById("form");
const input = document.getElementById("pass-validation");
const revealButton = document.getElementById("reveal-password");
const lis = document.getElementById("validate-conditions").getElementsByTagName("li")
let firstValidate = true;
let reveal = false;

const validate = (e) => {
  e.preventDefault();
  const validInputs = StringChallenge(`${e.currentTarget.value}`);
  if(firstValidate){
    firstValidate = false;
    for (let i = 0; i < lis.length; i++) {
      lis[i].className = "invalid"
    }
  }

  if (validInputs[0]){
    for (let i = 0; i < validInputs.length-1;i++){
      if (validInputs[i+1]){
        lis[i].className = "invalid"
      } else {
        lis[i].className = "valid"
      }
    }
  } else {
    for (let i = 0; i < lis.length; i++) {
      lis[i].className = "valid"
    }
  }
}

const revealOrHide = (e) => {
  e.preventDefault();
  reveal = !reveal;
  if (reveal){
    input.type = "text";
  } else {
    input.type = "password";
  }
}

input.addEventListener("keyup", validate)
form.addEventListener("submit", validate)
revealButton.addEventListener("click", revealOrHide)
