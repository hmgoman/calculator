function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(operator, a, b) {
    if (operator == add) {
        return add(a, b);
    }
    else if (operator == subtract) {
        return subtract(a, b);
    }
    else if (operator == multiply) {
        return multiply(a, b);
    }
    else if (operator == divide) {
        return divide(a, b);
    }
}

const number = document.querySelectorAll(".number");
const operator = document.querySelectorAll(".operator");
const current_display = document.getElementById("dc1");

function displayNum(x) {
    for(var i = 0; i < number.length; i++) {
        current_display.innerHTML = number[x].textContent;
    }
}

function displayOp(y) {
    for(var i = 0; i < operator.length; i++) {
        current_display.innerHTML = operator[y].textContent;
    }
}



