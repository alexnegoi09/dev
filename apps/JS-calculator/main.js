const previousOperand = document.querySelector("[data-previous]");
const currentOperand = document.querySelector("[data-current]");
const allClearBtn = document.querySelector("[data-all-clear]");
const deleteBtn = document.querySelector("[data-delete]");
const operationButtons = document.querySelectorAll("[data-operation]");
const numberButtons = document.querySelectorAll("[data-number]");
const equalButton = document.querySelector("[data-equals]");

// clear screen button functionality
allClearBtn.addEventListener("click", clear);

function clear() { 
    previousOperand.innerText = "";
    currentOperand.innerText = "";
}

// number buttons' functionality
numberButtons.forEach(function (button) {
    button.addEventListener("click", displayNumber);

    function displayNumber() {
	    if (currentOperand.innerText.length > 16) { return; }
        if (currentOperand.innerText.includes(".") && button.innerText === ".") { return; }
        currentOperand.innerText += button.innerText.toString();
    }
});

// display number in previous operand
function previousOperandDisplay() { 
    previousOperand.innerText = currentOperand.innerText;
    currentOperand.innerText = "";
}

// operation buttons' functionality
operationButtons.forEach(function (button) {
    button.addEventListener("click", displayOperationSign);

    function displayOperationSign() {
        previousOperandDisplay();
        previousOperand.innerText += button.innerText;
    }
});

// delete button functionality
deleteBtn.addEventListener("click", del);

function del() { 
    currentOperand.innerText = currentOperand.innerText.slice(0, -1);
    
    if (currentOperand.innerText.length === 0) { 
        previousOperand.innerText = "";
    }
}

// equal button functionality (compute)
equalButton.addEventListener("click", compute);

function compute() {
    value1 = parseFloat(previousOperand.innerText);
    value2 = parseFloat(currentOperand.innerText);

    if (previousOperand.innerText.includes("+")) {
        currentOperand.innerText = value1 + value2;
        previousOperand.innerText = "";
    } else if (previousOperand.innerText.includes("-")) {
        currentOperand.innerText = value1 - value2;
        previousOperand.innerText = "";
    } else if (previousOperand.innerText.includes("*")) {
        currentOperand.innerText = value1 * value2;
        previousOperand.innerText = "";
    } else if (previousOperand.innerText.includes("÷")) { 
        currentOperand.innerText = value1 / value2;
        previousOperand.innerText = "";
    }
}