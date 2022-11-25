const number = document.querySelectorAll(".number");
const operation = document.querySelectorAll(".operator");
const full_display = document.getElementById("dc1");
const current_display = document.getElementById("dc2");
const equal = document.getElementById("equal");
const clear = document.getElementById("clear");
const del = document.getElementById("delete");
const decimal = document.getElementById("decimal");
var firstOp = "";
var operator = "";
var secondOp = "";
var solution = "";
var count = 0;

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
    if(b == 0) { return "Error"}
    return a / b;
}

function operate(operator, a, b) {
    if (operator == "+") {
        solution = add(a, b);
    }
    else if (operator == "-") {
        solution = subtract(a, b);
    }
    else if (operator == "x") {
        solution = multiply(a, b);
    }
    else if (operator == "÷") {
        solution = divide(a, b);
    }
    full_display.innerHTML = firstOp + " " + operator + " " + secondOp + " =";
    current_display.innerHTML = Math.round(solution * 1000)/1000;
}

number.forEach(number => {
    number.addEventListener("click", (e) => {
        if(isNaN(current_display.textContent) == true) {
            current_display.innerHTML = e.target.textContent;
        }
        else if(isNaN(current_display.textContent) == false) {
            current_display.innerHTML = current_display.textContent + e.target.textContent;
        }
        if(operator == "") {
            firstOp = Number(current_display.textContent);
        }
        secondOp = Number(current_display.textContent);
    });
})

operation.forEach(operation => {
    operation.addEventListener("click", (e) => {
        evaluate();
        full_display.innerHTML = firstOp + " " + e.target.textContent;
        current_display.innerHTML = e.target.textContent;
        operator = e.target.textContent;
    })
})

function evaluate() {
    if(current_display.textContent == solution) {
        firstOp = solution; 
    }
}

function clearScreen() {
    current_display.innerHTML = "";
    full_display.innerHTML = "";
    firstOp = "";
    operator = "";
    secondOp = "";
}

function delCharacter() {
    current_display.innerHTML = current_display.innerHTML.slice(0, (current_display.innerHTML.length-1));
}

function addDecimal() {
    if(current_display.textContent === "" || current_display.textContent === operator) {
        current_display.innerHTML = "0.";
    }
    if(current_display.textContent.includes(".") === false) {
        current_display.innerHTML = current_display.innerHTML + ".";
    }
}

equal.addEventListener("click", () => operate(operator, firstOp, secondOp));
clear.addEventListener("click", clearScreen);
del.addEventListener("click", delCharacter);
decimal.addEventListener("click", addDecimal);
