const arr = [1, 2, 3, 4, 5];
let result = 1;
for (let i = 0; i < arr.length; i++) {
  result *= arr[i];
}
console.log("The multiplication of all elements in the array is: " + result);
