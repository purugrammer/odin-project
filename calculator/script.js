function add(a, b) {
    return (parseFloat(a) + parseFloat(b)).toFixed(2);
}

function subtract(a, b) {
    return (parseFloat(a) - parseFloat(b)).toFixed(2);
}

function multiply(a, b) {
    return (parseFloat(a) * parseFloat(b)).toFixed(2);
}

function divide(a, b) {
    if (b === '0') {
        return 'bruh';
    }
    return (parseFloat(a) / parseFloat(b)).toFixed(2);
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
    if (button.textContent==='x')
        {
            operator = '*'
        }
    else if (button.textContent==='÷')
        {
            operator = '/'
        }
        else
        {
            operator = button.textContent
        }
    console.log(operator)
    const buttonValue = button.textContent
    displayValue += buttonValue; 
    updateDisplay();
    displayValue = ""
})
})

const equalsButton = document.querySelector(".equals");

equalsButton.addEventListener('click', () => {
    if (!firstOperand || !operator || displayValue === '') {
        // If any necessary part is missing, do nothing or display an error
        displayValue = 'Error';
    } else {
        secondOperand = displayValue;
        console.log(secondOperand);
        displayValue = operate(firstOperand, secondOperand, operator);
    }
    updateDisplay();
    // Reset the operation after displaying the result
    firstOperand = displayValue;
    operator = null;
    // Don't reset displayValue to empty string
    // displayValue = '';
});

const clearButton = document.querySelector(".clear");

clearButton.addEventListener('click', () => {
displayValue = '0';
updateDisplay()
})

const dotButton = document.querySelector(".dot");

dotButton.addEventListener('click', () => {
    if (displayValue === '0') {
        displayValue = '.'
    } else {
        displayValue += '.'; 
    }
updateDisplay()
})






    





