/**
 * calculate factorial of starting number
 * @param {int} num starting number
 */
function factorial(num) {
  if (num === 1) return 1;
  return num * factorial(num - 1);
}

console.log(factorial(4));
