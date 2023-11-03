
const sum = (a, b) => a + b;

const minus = (a, b) => a - b;

const multiplication = (a, b) => a * b;

const division = (a, b) => a / b;

const modulus = (a, b) => a % b;

function performOperation(operator, num1, num2) {
  let result;

  switch (operator) {
    case "sum":
      result = sum(num1, num2);
      break;
    case "minus":
      result = minus(num1, num2);
      break;
    case "multiplication":
      result = multiplication(num1, num2);
      break;
    case "division":
      result = division(num1, num2);
      break;
    case "modulus":
      result = modulus(num1, num2);
      break;
    default:
      console.log("Invalid operator.");
      return;
  }

  console.log(`Result of ${operator}: ${result}`);
}

const operator = prompt("Enter the operation (sum, minus, multiplication, division, modulus):");
const num1 = parseFloat(prompt("Enter the first number:"));
const num2 = parseFloat(prompt("Enter the second number:"));

if (isNaN(num1) || isNaN(num2)) {
  console.log("Please enter valid numbers.");
} else {
  performOperation(operator, num1, num2);
}
