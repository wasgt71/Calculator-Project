let firstNum = 0;
let secondNum = 0;
let thirdNum = 0;
let operator = [];
let displayValue = 0;
let actualValue = 0;
//let actualValue2 = 0;
let addCount = 0;
let equalCount = 0;
let buttonCount = 0;
let opCount = 0;
let multiCount = 0;
let diviCount = 0;
let subCount = 0;
let storage = 0;
//let mathCount = 0;
let clearCount = 0;
let userInput = [];
let result = 0;

function add() {
  result = firstNum + secondNum + thirdNum;
  actualValue = result; //storage = result; // taking out storage = result;
  //taking out storage = actualvalue
  console.log(result);
  console.log(firstNum, secondNum);
  console.log(userInput);
}

console.log(firstNum);

function subtract() {
  result = firstNum - secondNum;
  actualValue = result; //peep add
  console.log(result);
  console.log(firstNum, secondNum);
}

function multiply() {
  result = firstNum * secondNum;
  actualValue = result; //peep add
  console.log(result);
  console.log(firstNum, secondNum);
}

function divide() {
  result = firstNum / secondNum;
  actualValue = result; //peep add
  console.log(result);
  console.log(firstNum, secondNum);
}

//let userInput = firstNum * secondNum;

function operate() {
  if (userInput === firstNum + secondNum) {
    add();
  }
  if (userInput === firstNum - secondNum) {
    subtract();
  }
  if (userInput === firstNum * secondNum) {
    multiply();
  }
  if (userInput === firstNum / secondNum) {
    divide();
  }
}

const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const button4 = document.querySelector("#button4");
const button5 = document.querySelector("#button5");
const button6 = document.querySelector("#button6");
const button7 = document.querySelector("#button7");
const button8 = document.querySelector("#button8");
const button9 = document.querySelector("#button9");
const button10 = document.querySelector("#button10");
const clear = document.querySelector("#clear");
const addition = document.querySelector("#addition");
const equal = document.querySelector("#equal");
const inputDisplay = document.querySelector("#showinput");
const multi = document.querySelector("#multiply");
const divi = document.querySelector("#division");
const subt = document.querySelector("#subtraction");
inputDisplay.textContent = "0000";

button1.onclick = buttonDisplay1;
button2.onclick = buttonDisplay2;
button3.onclick = buttonDisplay3;
button4.onclick = buttonDisplay4;
button5.onclick = buttonDisplay5;
button6.onclick = buttonDisplay6;
button7.onclick = buttonDisplay7;
button8.onclick = buttonDisplay8;
button9.onclick = buttonDisplay9;
button10.onclick = buttonDisplay10;
clear.onclick = clearDisplay;
addition.onclick = additionDisplay;
equal.onclick = equalDisplay;
multi.onclick = multiplyDisplay;
divi.onclick = divisionDisplay;
subt.onclick = subtractionDisplay;

function buttonDisplay1() {
  buttonCount++;
  userInput = ["0"];
  console.log(userInput);
  inputDisplay.textContent += 0;
  displayValue = inputDisplay.textContent;
  actualValue += "0";
}
//changed += 0 ^//

function buttonDisplay2() {
  buttonCount++;
  userInput = ["1"];
  console.log(userInput);
  inputDisplay.textContent += 1;
  displayValue = inputDisplay.textContent;
  actualValue += "1";
}

function buttonDisplay3() {
  buttonCount++;
  userInput = ["2"];
  console.log(userInput);
  inputDisplay.textContent += 2;
  displayValue = inputDisplay.textContent;
  actualValue += "2";
}

function buttonDisplay4() {
  buttonCount++;
  userInput = ["3"];
  inputDisplay.textContent += 3;
  displayValue = inputDisplay.textContent;
  actualValue += "3";
}

function buttonDisplay5() {
  buttonCount++;
  userInput = "4";
  inputDisplay.textContent += 4;
  displayValue = inputDisplay.textContent;
  actualValue += "4";
}

function buttonDisplay6() {
  buttonCount++;
  userInput = "5";
  inputDisplay.textContent += 5;
  displayValue = inputDisplay.textContent;
  actualValue += "5";
}

function buttonDisplay7() {
  buttonCount++;
  userInput = "6";
  inputDisplay.textContent += 6;
  displayValue = inputDisplay.textContent;
  actualValue += "6";
}

function buttonDisplay8() {
  buttonCount++;
  userInput = "7";
  inputDisplay.textContent += 7;
  displayValue = inputDisplay.textContent;
  actualValue += "7";
}

function buttonDisplay9() {
  buttonCount++;
  userInput = "8";
  inputDisplay.textContent += 8;
  displayValue = inputDisplay.textContent;
  actualValue += "8";
}

function buttonDisplay10() {
  buttonCount++;
  userInput = "9";
  inputDisplay.textContent += 9;
  displayValue = inputDisplay.textContent;
  actualValue += "9";
}

function clearDisplay() {
  clearCount++;
  if (clearCount > 0) {
    inputDisplay.textContent = 0;
    displayValue = 0;
    actualValue = "";
    addCount = 0;
    equalCount = 0;
    buttonCount = 0;
    multiCount = 0;
    diviCount = 0;
    subCount = 0;
    clearCount = 0;
    userInput = "";
    opCount = 0;
    result = 0;
    firstNum = 0;
    secondNum = 0;
  }
}

function additionDisplay() {
  inputDisplay.textContent += "+";
  displayValue = inputDisplay.textContent;
  addCount++;
  buttonCount++;
  opCount++;
  if (opCount > 1) {
    //added this
    equalDisplay(); // used to be equal display
    inputDisplay.textContent += "+";
  }
  if (addCount > 0) {
    //changed from ===1;
    firstNum = Number(actualValue) || result; //added OR
    actualValue = "0";
  } else {
    firstNum = result;
  } //else if(addCount > 1){
  //firstNum = result;
  //console.log(result);
  //}
}

function equalDisplay() {
  equalCount++;
  opCount++;
  if (opCount > 0) {
    secondNum = Number(actualValue);
  }
  if (addCount && equalCount === 1) {
    add();
    inputDisplay.textContent = result;
    actualValue = "";
    addCount = 0; //<-- added
    equalCount = 0; //<-- added
    opCount = 0;
  } else if (multiCount && equalCount === 1) {
    multiply();
    inputDisplay.textContent = result;
    actualValue = "";
    multiCount = 0; //<-- added
    equalCount = 0; //
    opCount = 0;
  } else if (diviCount && equalCount === 1) {
    divide();
    inputDisplay.textContent = result;
    actualValue = "";
    diviCount = 0; //<-- added
    equalCount = 0; //
    opCount = 0;
  } else if (subCount && equalCount === 1) {
    subtract();
    inputDisplay.textContent = result;
    actualValue = "";
    subCount = 0; //<-- added
    equalCount = 0; //
    opCount = 0;
  } //else if(multiCount && equalCount && opCount > 1 && addCount < 1){ //added && addcount
  //secondNum = Number(actualValue);
  //  console.log(result);
  //multiply();
  //inputDisplay.textContent = result;
  //actualValue = "";

  //} else if(diviCount && equalCount && opCount > 1){
  // secondNum = Number(actualValue);
  // divide();
  //inputDisplay.textContent = result;
  // actualValue = "";

  //} else if(addCount && equalCount && opCount > 1){
  //  secondNum = Number(actualValue);
  //  console.log(actualValue);
  // add();
  // inputDisplay.textContent = result;
  // actualValue = "";

  //} else if(subCount && equalCount && opCount > 1){
  //secondNum = Number(actualValue);
  //console.log(actualValue);
  //subtract();
  //inputDisplay.textContent = result;
  // actualValue = "";
  //}
}

function multiplyDisplay() {
  inputDisplay.textContent += "x";
  displayValue = inputDisplay.textContent;
  multiCount++;
  buttonCount++;
  opCount++;
  if (opCount > 1) {
    //added this
    equalDisplay();
    inputDisplay.textContent += "x";
  }
  if (multiCount > 0) {
    ///changed from === 1;
    firstNum = Number(actualValue) || result; //added OR result
    actualValue = "0";
  } else {
    firstNum = result;
  } //else if(multiCount > 1){
  //firstNum = result;
  //}
}

function divisionDisplay() {
  inputDisplay.textContent += "'/.";
  displayValue = inputDisplay.textContent;
  diviCount++;
  buttonCount++;
  opCount++;
  if (opCount > 1) {
    //added this
    equalDisplay();
    inputDisplay.textContent += "'/.";
  }
  if (diviCount > 0) {
    /// changed from ===1;
    firstNum = Number(actualValue) || result; //added ||
    actualValue = "0";
  } else {
    firstNum = result;
  } //else if(diviCount > 1){
  //firstNum = result;
  //}
}

function subtractionDisplay() {
  inputDisplay.textContent += "-";
  displayValue = inputDisplay.textContent;
  subCount++;
  buttonCount++;
  opCount++;
  if (opCount > 1) {
    //added this
    equalDisplay();
    inputDisplay.textContent += "-";
  }
  if (subCount > 0) {
    /// changed from === 1;
    firstNum = Number(actualValue) || result; //added ||
    actualValue = "0";
  } else {
    firstNum = result;
  } //else if(subCount > 1){
  //firstNum = result;
}