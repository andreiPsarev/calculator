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
    if (firstOperator != null && secondOperator === null){

    }
    else{
        firstOperator = operator;
        firstOperand = displayValue;
    }
}

function inputEquals() {
    secondOperand = displayValue;
    result = operate(firstOperator, Number(firstOperand), Number(secondOperand))
    displayValue = result;
    firstOperand = displayValue;
    secondOperand = null;
    firstOperator = null;
    secondOperator = null;
    result = null;
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

function operate(operation, a, b) {
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


console.log(addFunc(4, 5));
console.log(subFunc(4, 5));
console.log(multFunc(4, 5));
console.log(divFunc(4, 5));

let exmpl = operate('+', 2, 11);
console.log(exmpl);

/*
const buttonsClick = document.querySelectorAll("button");
const result = document.querySelector("#display");
result.textContent = "";


buttonsClick.forEach(button => {
    button.addEventListener("click", function(){
        console.log("button clicked");
        result.textContent += button.value;
    });
});*/


function clearDisplay() {
    displayValue = '0';
    firstOperand = null;
    secondOperand = null;
    firstOperator = null;
    secondOperator = null;
    result = null;
}