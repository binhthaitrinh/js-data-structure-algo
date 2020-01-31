/**
 * Print numbers starting from num to 0
 * @param {int} num starting number
 */
function countDown(num) {
  if (num <= 0) {
    console.log('All done!');
  } else {
    console.log(num);
    countDown(num - 1);
  }
}

countDown(5);
