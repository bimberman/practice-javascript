function StringChallenge(str){
  // check to see if the string contains a closing tag
  if(!str.includes("/")){
    return str;
  }

  // find the indices of the opening/closing tags of the inner-most-element in the first nested HTML group
  // start with the closing tag
  const startClose = str.indexOf("</");
  const endClose = str.indexOf(">", startClose);

  // then count backwards from the closing tag to find its corresponding opening tag
  let startOpen = 0;
  let endOpen = 0;
  for (let i = startClose-1;i>0;i--){
    if(str[i]===">"){
      endOpen = i;
    }
    if (str[i] === "<") {
      startOpen = i;
      break;
    }
  }

  if (startOpen === endOpen){
    return str;
  }

  // assign the elements type
  const openEle = str.substring(startOpen+1, endOpen);
  const closeEle = str.substring(startClose+2, endClose);

  // check if both element types match
  if(openEle!==closeEle){
    // if both element types don't match, then return the opening tag
    return openEle;
  }

  /*
    if the closing tag isn't the last tag, then remove everything between these elements
    Note: since both element types match, a check is required to see if this closing tag is the last closing tag (in order to not get an "out of bounds" error)
  */
  if(str.length > endClose) {
    str = str.substring(0, startOpen) + str.substring(endClose+1, str.length+1)
  }

  // if there is still a closing tag in the string,
  // then run the remaining string in a recursive manner and return the results
  if(str.includes("/")){
    return StringChallenge(str);
  }

  // return true if all element have corresponding opening and closing tag types that match
  if(!str.includes("<")){
    return true;
  }

  return str;
}

const input = document.getElementById("elementInput");
const tagsContainer = document.querySelector(".tags-container")
const reset = document.getElementById("reset");
const validation = document.querySelector(".validation")
let draggedEle = null;

const resetInput = (e) => {
  input.value = "";
  validate(e);
}

const validate = (e) => {
  e.preventDefault();
  if (event.target.value && event.target.value!==""){
    const str = StringChallenge(event.target.value)
    validation.textContent = str === true ? "Looks good" : `Please change the ${str} element`;
  } else {
    validation.textContent = "";
  }
}

const removeQuotes = (e) => {
  if (e.target.value !== "") {
    if (e.target.value.includes("❝")){
      e.target.value = e.target.value.substring(1, e.target.value.length)
    }
    if (e.target.value.includes("❞")){
      e.target.value = e.target.value.substring(0, e.target.value.length - 1);
    }
  }
}

const addQuotes = (e) => {
  if (e.target.value !== "") {
    if (!e.target.value.includes("❝")) {
      e.currentTarget.value = "❝" + e.currentTarget.value;
    }
    if (!e.target.value.includes("❞")) {
      e.target.value += "❞";
    }
  }
}

input.addEventListener("change", validate);
input.addEventListener("keyup", validate);
input.addEventListener("focus", removeQuotes);
input.addEventListener("blur", addQuotes);
reset.addEventListener("click", resetInput);

tagsContainer.addEventListener("dragstart", (event) => {
  // store a ref. on the dragged elem
  draggedEle = event.target;
  // make it mostly transparent
  draggedEle.style.opacity = .2;
});

tagsContainer.addEventListener("dragend", (event) => {
  // remove transparency (makes it opaque)
  draggedEle.style.opacity = "";
  if (input.style.background === "cornsilk") {
    input.style.background = "";
  }
});

input.addEventListener("dragover", (event) => {
  // prevent default to allow drop
  event.preventDefault();
}, false);

input.addEventListener("dragenter", (event) => {
  event.target.style.background = "cornsilk";
}, false);

input.addEventListener("drop", (event) => {
  event.preventDefault();
  removeQuotes(event);
  const str = StringChallenge(event.target.value)
  validation.textContent = str === true ? "" : str;

  // move dragged elem to the selected drop target
  event.target.style.background = "";
  event.target.value += draggedEle.textContent;
  validate(event);
  addQuotes(event);
}, false);
