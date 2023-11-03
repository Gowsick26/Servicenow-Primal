function printRightTriangle(num) {
    for (let i = 1; i <= num; i++) {
      let stars = '*'.repeat(i);
      console.log(stars);
    }
  }
  const numRows = prompt("Enter the number of rows:");
  const num = parseInt(numRows);

  if (!isNaN(num) && num > 0) {
    printRightTriangle(num);
  } else {
    console.log("Please enter a valid number:");
  }
  