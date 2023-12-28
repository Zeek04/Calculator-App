const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');

let currentInput = '0';
let operator = null;
let prevInput = '0';

// Add event listeners to buttons
buttons.forEach(button => {
  button.addEventListener('click', handleButtonClick);
});

function handleButtonClick(event) {
  const clickedButton = event.target.innerText;

  switch(clickedButton) {
    case 'C':
      resetCalculator();
      break;
    case '=':
      calculate();
      break;
    case '+':
    case '-':
    case '*':
    case '/':
      handleOperator(clickedButton);
      break;
    default:
      handleDigit(clickedButton);
  }

  updateDisplay();
}

function resetCalculator() {
  currentInput = '0';
  operator = null;
  prevInput = '0';
}

function handleOperator(clickedOperator) {
  if (operator !== null) {
    calculate();
  }
  operator = clickedOperator;
  prevInput = currentInput;
  currentInput = '0';
}

function handleDigit(digit) {
  if (currentInput === '0') {
    currentInput = digit;
  } else {
    currentInput += digit;
  }
}

function calculate() {
  const num1 = parseFloat(prevInput);
  const num2 = parseFloat(currentInput);

  switch(operator) {
    case '+':
      currentInput = (num1 + num2).toString();
      break;
    case '-':
      currentInput = (num1 - num2).toString();
      break;
    case '*':
      currentInput = (num1 * num2).toString();
      break;
    case '/':
      currentInput = (num1 / num2).toString();
      break;
  }

  operator = null;
}

function updateDisplay() {
  display.innerText = currentInput;
}