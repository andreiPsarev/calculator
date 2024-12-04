let displayValue = '0';
let firstOperand = null;
let secondOperand = null;
let firstOperator = null;
let secondOperator = null;
const buttons = document.querySelectorAll('button');
let result = null;

function updateDisplay() {
    const display = document.getElementById("display");
    display.innerHTML = displayValue;
}

function clearDisplay() {
    displayValue = '0';
    firstOperand = null;
    secondOperand = null;
    firstOperator = null;
    secondOperator = null;
    result = null;
}

function clickButton () {
    for (let i = 0; i < buttons.length; i ++) {
        buttons[i].addEventListener("click", function(){
            switch(true) {
                case buttons[i].classList.contains('operand'):
                    inputOperand(buttons[i].value);
                    updateDisplay();
                    break;
                case buttons[i].classList.contains('operator'):
                    inputOperator(buttons[i].value);
                    break;
                case buttons[i].classList.contains('equals'):
                    inputEquals();
                    updateDisplay();
                    break;
                case buttons[i].classList.contains('decimal'):
                    inputDecimal(buttons[i].value);
                    updateDisplay();
                    break;
                case buttons[i].classList.contains('percent'):
                    inputPercent(displayValue);
                    updateDisplay();
                    break;
                case buttons[i].classList.contains('sign'):
                    inputSign(displayValue);
                    updateDisplay();
                    break;
                case buttons[i].classList.contains('clear'):
                    clearDisplay();
                    updateDisplay();
                    break;
            }
        });
    }
}

clickButton();

function inputOperand(operand) {
    if(firstOperator === null) {
        if(displayValue === 0 || displayValue === "0")
            displayValue = operand;

        else if(displayValue === firstOperand)
            displayValue = operand;

        else displayValue += operand;
    }
    else {
        if(displayValue === firstOperand) {
            displayValue = operand;
        }
        else displayValue += operand;
    }
}

function inputOperator(operator) {

    if(firstOperator != null && secondOperator === null) {
        secondOperator = operator;
        secondOperand = displayValue;
        result = calculate(firstOperator, Number(firstOperand), Number(secondOperand));
        displayValue = result;
        firstOperand = displayValue;
        result = null;
    }
    else if (firstOperator != null && secondOperator != null) {
        result = calculate(firstOperator, Number(firstOperand), Number(secondOperand));
        displayValue = result;
        firstOperand =displayValue;
        result = null;
    }

    if (firstOperator != null && secondOperator === null){

    }
    else{
        firstOperator = operator;
        firstOperand = displayValue;
    }
}

function inputEquals() {
    secondOperand = displayValue;
    result = calculate(firstOperator, Number(firstOperand), Number(secondOperand))
    displayValue = result;
    firstOperand = displayValue;
    secondOperand = null;
    firstOperator = null;
    secondOperator = null;
    result = null;
}

function inputDecimal(dot) {
    if (!displayValue.includes(dot)) {
        displayValue += dot;
    }
}

function inputPercent(num) {
    displayValue = num/100;
}

function inputSign(num) {
    displayValue = -1 * num;
}


function addFunc(a, b) {
    return a + b;
}

function subFunc(a, b) {
    return a - b;
}

function multFunc(a, b) {
    return a * b;
}

function divFunc(a, b) {
    return a / b;
}

function calculate(operation, a, b) {
    switch(operation) {
        case '+':
            return addFunc(a, b);
        case '-':
            return subFunc(a, b);
        case '*':
            return multFunc(a, b);
        case '/':
            return divFunc(a, b);
        default:
            return "Error";
    }
}


