let firstArg;
let secondArg;
let operation;


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