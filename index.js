const display = document.querySelector(".display");
const smallDisplay = document.querySelector(".small-display");
const oneButton = document.querySelector(".one");
const twoButton = document.querySelector(".two");
const threeButton = document.querySelector(".three");
const fourButton = document.querySelector(".four");
const fiveButton = document.querySelector(".five");
const sixButton = document.querySelector(".six");
const sevenButton = document.querySelector(".seven");
const eightButton = document.querySelector(".eight");
const nineButton = document.querySelector(".nine");
const zeroButton = document.querySelector(".zero");
const decimalButton = document.querySelector(".decimal")
const container = document.querySelector(".container");
const clear = document.querySelector(".clear");
const deleteBtn = document.querySelector(".delete");
const additionBtn = document.querySelector(".addition");
const subtractionBtn = document.querySelector(".subtraction");
const multiplicationBtn = document.querySelector(".multiplication");
const divisionBtn = document.querySelector(".division");
const equalsBtn = document.querySelector(".equals");


let isOperator = false;
let num = "";
let firstNumber = "";
let secondNumber = "";
let opperation = "";


oneButton.addEventListener("click", function () {getNumbers(oneButton.value)});
twoButton.addEventListener("click", function () {getNumbers(twoButton.value)});
threeButton.addEventListener("click", function () {getNumbers(threeButton.value)});
fourButton.addEventListener("click", function () {getNumbers(fourButton.value)});
fiveButton.addEventListener("click", function () {getNumbers(fiveButton.value)});
sixButton.addEventListener("click", function () {getNumbers(sixButton.value)});
sevenButton.addEventListener("click", function () {getNumbers(sevenButton.value)});
eightButton.addEventListener("click", function () {getNumbers(eightButton.value)});
nineButton.addEventListener("click", function () {getNumbers(nineButton.value)});
zeroButton.addEventListener("click", function () {getNumbers(zeroButton.value)});
decimalButton.addEventListener("click", function() {getNumbers(decimalButton.value)})


additionBtn.addEventListener("click", function () {showOperator(additionBtn.value)});
subtractionBtn.addEventListener("click", function () {showOperator(subtractionBtn.value)});
multiplicationBtn.addEventListener("click", function () {showOperator(multiplicationBtn.value)});
divisionBtn.addEventListener("click", function () {showOperator(divisionBtn.value)});


equalsBtn.addEventListener("click", getEquals);
deleteBtn.addEventListener("click", deleteChar);
clear.addEventListener("click", clearCalculator);


function getNumbers(button) {
    let num;
    num = button;
    display.textContent += num;
    if (isOperator === false) {
        firstNumber = display.textContent;
        smallDisplay.textContent = firstNumber;
    }else {
        secondNumber += num;
    };
    smallDisplay.textContent += secondNumber;
    return;
};


function showOperator(opp) {
    opperation = opp;
    display.textContent += " " + opp + " ";
    smallDisplay.textContent = display.textContent;
    isOperator = true;
};


function getEquals() {
    if (firstNumber != "") {
        let firstNumberInt = parseInt(firstNumber);
        let secondNumberInt = parseInt(secondNumber);
        operate(opperation, firstNumberInt, secondNumberInt);
    }else {
        return;
    }
};


function deleteChar() {
    console.log("delete");
};


function clearCalculator() {
    firstNumber = "";
    secondNumber = "";
    opperation = "";
    display.textContent = "";
};


function add(a,b) {
    return a + b;
}; 


function subtract(a,b) {
    return a - b;
};


function multiply(a,b) {
    return a * b;
};


function divide(a,b) {
    if (b === 0) {
        return "N/A";
    }else {
        return a / b;
    };
};


function operate(operator, a, b) {
    let answer;
    switch (operator){
        case "+":
            answer = add(a,b)
            break;
        case "-":
            answer = subtract(a,b);
            break;
        case "*":
            answer = multiply(a,b);
            break;
        case "÷":
            answer = divide(a,b)
            if (b === 0) {
                clearCalculator();
            };
            break;
    };
    smallDisplay.textContent += " = " + answer;
    firstNumber = answer;
    secondNumber = "";
    opperation = "";
    display.textContent = firstNumber;
};