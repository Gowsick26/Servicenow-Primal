function factorial(num) {
    if (num === 0) {
      return 1;
    } else {
      return num * factorial(num - 1);
    }
  }
  
  const a = prompt("Enter a number: ");
  const number = parseInt(a);
  
  if (!isNaN(number) && number >= 0) {
    const result = factorial(number);
    console.log(`The factorial of ${number} is ${result}`);
  } else {
    console.log("Please enter a valid non-negative integer.");
  }
  