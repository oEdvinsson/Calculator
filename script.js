const displayScreen = document.getElementById('displayScreen');
const clearBtn = document.querySelector('.clearBtn');
const buttons = document.querySelectorAll('button');

let displayValue = 0;
let operatorValue = '';
let awaitingNextValue = false;
let firstValue = 0;
let secondValue = 0;

function calculate() {
    console.log(firstValue, secondValue, operatorValue);
}

function displayNumber(number) {
    if (awaitingNextValue) {
        console.log(number)
        displayScreen.textContent = number;
        displayValue = number;
        awaitingNextValue = false;
    } else {
        currentValue = displayValue === 0 ? number : displayValue + number;
        displayScreen.textContent = currentValue;
        displayValue = currentValue;
    }

}

function applyOperator(operator) {
    if  (displayValue !== 0) {
        operatorValue = operator;
        awaitingNextValue = true;
        console.log(operator)
    if  (firstValue) {
        secondValue = displayValue;
        calculate();
    } else {
        firstValue = displayValue;
    }
    }
}



buttons.forEach((button) => {
    if (button.classList.length === 0) {
        button.addEventListener('click', () => displayNumber(button.value));
    } else if (button.classList.contains('operator')) {
        button.addEventListener('click', () => applyOperator(button.value));
    } else if (button.classList.contains('equalBtn')) {
        button.addEventListener('click', () => calculate())
    }
});

clearBtn.addEventListener('click', () => {
    displayValue = 0;
    operatorValue = '';
    awaitingNextValue = false;
    displayScreen.textContent = 0;
});




