function QuestionsMarks(str) {

  // code goes here
  let bool = [];
  let markBool = false;
  let markCounter = 0;
  let numCounter = 0;
  let numIndex = [0,0];
  let num = 0;

  for (let index = 0; index < str.length; index++) {

    if (str[index] !== "?" && numCounter !== 1) {
      markCounter = 0;
      markBool = false;
    }

    if (!isNaN(parseInt(str[index]))){
      numIndex.shift();
      numIndex.push(parseInt(str[index]));
      numCounter++;
    }

    if (str[index] === "?") {
      markCounter++;
    }

    console.log(`${str[index]}: ${markCounter} && ${numCounter}`)

    if (markCounter === 3 && numCounter === 2) {
      num = numIndex[0] + numIndex[1];
      console.log(`${num} = ${numIndex[0]} + ${numIndex[1]}`)
      bool.push(true);
      if (num !== 10) {
        bool[bool.length] = false;
      }
    }

    if (markCounter >= 4) {
      num = 0;
      numIndex[0] = 0;
      numIndex[1] = 0
      markBool = true;
      numCounter = 1;
    }
  }

  for(let i=0;i<bool.length;i++){
    console.log(`bool[i]: ${bool[i]}`)
    if(bool[i]){
      return true;
    }
  }

  return false;
}

// keep this function call here
console.log(QuestionsMarks("acc?7??sss?3rr1??????5"));
