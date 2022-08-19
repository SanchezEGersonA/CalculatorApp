import './styles.css'

// Input
const inputResult = document.querySelector('.result');
const inputValue = document.querySelector('.values');

// Max Length
const valueMaxLength = inputValue.getAttribute('maxlength');

// Variables
let lastOperator = "";
let result = 0;

// Events to numeric buttons
document.querySelector('#btnOne').addEventListener('click', () => {
    let currentValue = (inputValue.value === "0") ? "1" : inputValue.value + "1";
    if (currentValue.length <= Number(valueMaxLength)) {
        inputValue.value = currentValue;
    }
});

document.querySelector('#btnTwo').addEventListener('click', () => {
    let currentValue = (inputValue.value === "0") ? "2" : inputValue.value + "2";
    if (currentValue.length <= Number(valueMaxLength)) {
        inputValue.value = currentValue;
    }
});

document.querySelector('#btnThree').addEventListener('click', () => {
    let currentValue = (inputValue.value === "0") ? "3" : inputValue.value + "3";
    if (currentValue.length <= Number(valueMaxLength)) {
        inputValue.value = currentValue;
    }
});

document.querySelector('#btnFour').addEventListener('click', () => {
    let currentValue = (inputValue.value === "0") ? "4" : inputValue.value + "4";
    if (currentValue.length <= Number(valueMaxLength)) {
        inputValue.value = currentValue;
    }
});

document.querySelector('#btnFive').addEventListener('click', () => {
    let currentValue = (inputValue.value === "0") ? "5" : inputValue.value + "5";
    if (currentValue.length <= Number(valueMaxLength)) {
        inputValue.value = currentValue;
    }
});

document.querySelector('#btnSix').addEventListener('click', () => {
    let currentValue = (inputValue.value === "0") ? "6" : inputValue.value + "6";
    if (currentValue.length <= Number(valueMaxLength)) {
        inputValue.value = currentValue;
    }
});

document.querySelector('#btnSeven').addEventListener('click', () => {
    let currentValue = (inputValue.value === "0") ? "7" : inputValue.value + "7";
    if (currentValue.length <= Number(valueMaxLength)) {
        inputValue.value = currentValue;
    }
});

document.querySelector('#btnEight').addEventListener('click', () => {
    let currentValue = (inputValue.value === "0") ? "8" : inputValue.value + "8";
    if (currentValue.length <= Number(valueMaxLength)) {
        inputValue.value = currentValue;
    }
});

document.querySelector('#btnNine').addEventListener('click', () => {
    let currentValue = (inputValue.value === "0") ? "9" : inputValue.value + "9";
    if (currentValue.length <= Number(valueMaxLength)) {
        inputValue.value = currentValue;
    }
});

document.querySelector('#btnZero').addEventListener('click', () => {
    let currentValue = (inputValue.value === "0") ? "0" : inputValue.value + "0";
    if (currentValue.length <= Number(valueMaxLength)) {
        inputValue.value = currentValue;
    }
});

// Backspace event
document.querySelector('#btnBackspace').addEventListener('click', () => {
    let currentValue = inputValue.value;
    currentValue = currentValue.substring(0, currentValue.length - 1);
    inputValue.value = (currentValue.length === 0) ? "0" : currentValue;
});

// Events to mathematic buttons
document.querySelector('#btnPlus').addEventListener('click', () => {
    let currentValue = Number(inputValue.value);
    if (lastOperator === '') {
        result = (currentValue === 0 && result === 0) ?
            0 : (inputResult.value === '') ?
                currentValue : result + currentValue;
    } else {
        result = getResultByOperator(lastOperator, result, currentValue);
    }
    inputResult.value = String(result) + "+";
    inputValue.value = "0";
    lastOperator = 'plus';
});

document.querySelector('#btnMinus').addEventListener('click', () => {
    let currentValue = Number(inputValue.value);
    if (lastOperator === '') {
        result = (currentValue === 0 && result === 0) ?
            0 : (inputResult.value === '') ?
                currentValue : result - currentValue;
    } else {
        result = getResultByOperator(lastOperator, result, currentValue);
    }
    inputResult.value = String(result) + "-";
    inputValue.value = "0";
    lastOperator = 'minus';
});

document.querySelector('#btnMultiply').addEventListener('click', () => {
    let currentValue = Number(inputValue.value);
    if (lastOperator === '') {
        result = (currentValue === 0 && result === 0) ?
            0 : (inputResult.value === '') ?
                currentValue : result * currentValue;
    } else {
        result = getResultByOperator(lastOperator, result, currentValue);
    }
    inputResult.value = String(result) + "x";
    inputValue.value = "0";
    lastOperator = 'multiply';
});

document.querySelector('#btnDivide').addEventListener('click', () => {
    let currentValue = Number(inputValue.value);
    if (lastOperator === '') {
        result = (currentValue === 0 && result === 0) ?
            0 : (inputResult.value === '') ?
                currentValue : result / currentValue;
    } else {
        if (currentValue !== 0) {
            result = getResultByOperator(lastOperator, result, currentValue);
        }
    }
    inputResult.value = String(result) + "÷";
    inputValue.value = "0";
    lastOperator = 'divide';
});

// Percentage event
document.querySelector('#btnPercentage').addEventListener('click', () => {
    let currentValue = Number(inputValue.value);
    if (lastOperator === 'plus' || localStorage === 'minus') {
        currentValue = (result * currentValue) / 100;
        result = getResultByOperator(lastOperator, result, currentValue);
    } else if (lastOperator === 'multiply' || lastOperator === 'divide') {
        result = getResultByOperator(lastOperator, result, currentValue / 100);
    }
    inputResult.value = String(result);
    inputValue.value = "0";
});

// Invert event
document.querySelector('#btnInvert').addEventListener('click', () => {
    let currentValue = Number(inputValue.value);
    if (currentValue !== 0) {
        result = 1 / currentValue;
    }
    inputResult.value = String(result);
    inputValue.value = "0";
});

// Exponent event
document.querySelector('#btnExponent').addEventListener('click', () => {
    let currentValue = Number(inputValue.value);
    result = Math.pow(currentValue, 2);
    inputResult.value = String(result);
    inputValue.value = "0";
});

// Square event
document.querySelector('#btnSquare').addEventListener('click', () => {
    let currentValue = Number(inputValue.value);
    result = Math.sqrt(currentValue, 2);
    inputResult.value = String(result);
    inputValue.value = "0";
});

// Negative event
document.querySelector('#btnNegative').addEventListener('click', () => {
    let currentValue = Number(inputValue.value);
    if (currentValue !== 0) {
        result = currentValue * -1;
    }
    inputResult.value = String(result);
    inputValue.value = '0';
});

// Clear event
document.querySelector('#btnCE').addEventListener('click', () => {
    inputResult.value = '';
    inputValue.value = '0';
    lastOperator = '';
    result = 0;
});

document.querySelector('#btnC').addEventListener('click', () => {
    inputResult.value = '';
    inputValue.value = '0';
    lastOperator = '';
    result = 0;
});

// Equal event
document.querySelector('#btnEqual').addEventListener('click', () => {
    let currentValue = Number(inputValue.value);
    result = (currentValue === 0) ? result : getResultByOperator(lastOperator, result, currentValue);
    inputResult.value = String(result);
    inputValue.value = "0";
});

/**
 * Function to determine the result by the operation
 * @param {Number} paramOperator 
 * @param {Number} paramResult 
 * @param {Number} paramCurrentValue 
 * @returns 
 */
const getResultByOperator = (paramOperator, paramResult, paramCurrentValue) => {

    let currentResult = 0;
    switch (paramOperator) {
        case 'plus':
            currentResult = paramResult + paramCurrentValue;
            break;
        case 'minus':
            currentResult = paramResult - paramCurrentValue;
            break;
        case 'multiply':
            currentResult = paramResult * paramCurrentValue;
            break;
        case 'divide':
            currentResult = paramResult / paramCurrentValue;
            break;
    }

    return currentResult;

}
