function add(a,b) {
    a = parseInt(a)
    b = parseInt(b)
    return a + b
}

function subtract(a,b) {
    return a - b
}

function multiply(a,b) {
    return a * b
}

function divide(a,b) {
    return a / b
}

let firstOperand, secondOperand, operator;

function operate(firstOperand, secondOperand, operator)
{
    switch (operator) {
    case '+': return add(firstOperand, secondOperand);
    case '-': return subtract(firstOperand, secondOperand);
    case '*': return multiply(firstOperand, secondOperand);
    case '/': return divide(firstOperand, secondOperand);}
}

const numberButtons = document.querySelectorAll(".number");
const display = document.querySelector(".display")

let displayValue = '0';
display.textContent = displayValue

function updateDisplay() {
    display.textContent = displayValue
}

numberButtons.forEach(button => {
button.addEventListener('click', () => {

const buttonValue = button.textContent
if (displayValue === '0') {
    displayValue = buttonValue
} else {
    displayValue += buttonValue; 
}
updateDisplay();
})
})

const operatorButtons = document.querySelectorAll(".operator");

operatorButtons.forEach(button => {
    button.addEventListener('click', () => {
    firstOperand = displayValue 
    console.log(firstOperand)
    operator = button.textContent
    console.log(operator)
    const buttonValue = button.textContent
    displayValue += buttonValue; 
    updateDisplay();
    displayValue = ""
})
})

const equalsButton = document.querySelector(".equals");

equalsButton.addEventListener('click', () => {
    secondOperand = displayValue
    console.log(secondOperand)
    displayValue = operate(firstOperand, secondOperand, operator)
    updateDisplay();
})

const clearButton = document.querySelector(".clear");

clearButton.addEventListener('click', () => {
displayValue = '0';
updateDisplay()
})


    





