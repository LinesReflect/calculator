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
let isFirstNumber = false;


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
    if (!(display.textContent === "N/A")) {
        let num;
        num = button;
        display.textContent += num;
        if (isOperator === false) {
            firstNumber = display.textContent;
            smallDisplay.textContent = firstNumber;
            isFirstNumber = true;
        }else {
            secondNumber += num;
            smallDisplay.textContent += num;
        };
    }else {
        num = button;
        firstNumber = num;
        display.textContent = firstNumber;
        console.log(num)
    };

    return;
};


function showOperator(opp) {
    if (isOperator === false && isFirstNumber === true) {
        opperation = opp;
        display.textContent += " " + opp + " ";
        smallDisplay.textContent = display.textContent;
    }else {
        return;
    };
    isOperator = true;
};


function getEquals() {
    if (isFirstNumber === true && isOperator === false) {
        answer = firstNumber;
        display.textContent = answer;
        smallDisplay.textContent = answer;
    }else if (firstNumber != "") {
        let firstNumberInt = parseFloat(firstNumber);
        let secondNumberInt = parseFloat(secondNumber);
        operate(opperation, firstNumberInt, secondNumberInt);
    }
};


function deleteChar() {
    if (display.textContent === "N/A") {
        clearCalculator()
    }else if ((display.textContent.length - 1) > 0) {
        if (secondNumber === "" && isOperator === false) {
            firstNumber = toString(firstNumber);
            firstNumber = firstNumber.toString(firstNumber.slice(0, -1));
        }else if (secondNumber === "" && isOperator === true) {
            display.textContent = display.textContent.slice(0, - 2);
            smallDisplay.textContent = smallDisplay.textContent.slice(0, - 2);
            opperation = "";
            isOperator = false;
        }else if (isOperator === true) {
            secondNumber = secondNumber.slice(0, -1)
        };
        display.textContent = display.textContent.slice(0, - 1);
        smallDisplay.textContent = smallDisplay.textContent.slice(0, - 1);     
    }else{
        clearCalculator();
    };
};


function clearCalculator() {
    firstNumber = "";
    secondNumber = "";
    opperation = "";
    isOperator = false;
    isFirstNumber = "";
    display.textContent = "";
    smallDisplay.textContent = "";
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
        return undefinedAnswer();
    }else {
        return a / b;
    };
};


function operate(operator, a, b) {
    let answer;
    switch (operator){
        case "+":
            answer = add(a,b);
            break;
        case "-":
            answer = subtract(a,b);
            break;
        case "*":
            answer = multiply(a,b);
            break;
        case "÷":
            answer = divide(a,b);
            break;
    };
    smallDisplay.textContent += " = " + answer;
    firstNumber = answer;
    secondNumber = "";
    opperation = "";
    display.textContent = firstNumber;
    isFirstNumber = true;
    isOperator = false;
};


function undefinedAnswer() {
    display.textContent = "N/A";
    firstNumber = "";
    secondNumber = "";
    return display.textContent;
};