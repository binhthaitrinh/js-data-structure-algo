/**
 * FREQUENCY COUNTER
 * This pattern uses objects to collect values/frequencies of values
 * Can be used to void the need for O(n^2)
 */

/**
 * Return true of every value in arr1 has its corresponding value squared
 * in arr2. Frequency must be the same
 * @param {int array} arr1
 * @param {int array} arr2
 * @return true of false
 */
function same(arr1, arr2) {
  // not same frequency special case
  if (arr1.length !== arr2.length) {
    return false;
  }

  // intialize object to hold fequency value
  var obj = {};

  // loop through each num in arr1, save key as squared value of that num,
  // initialize counter if not appeared yet
  for (let i = 0; i < arr1.length; i++) {
    let squared = Math.pow(arr1[i], 2);
    if (!obj[squared]) {
      obj[squared] = 1;
    } else {
      obj[squared]++;
    }
  }

  // decrement counter
  for (let j = 0; j < arr2.length; j++) {
    if (obj[arr2[j]]) {
      obj[arr2[j]]--;
    }
  }

  // if each counter is not = 0, then false
  for (let key in obj) {
    if (obj[key] !== 0) {
      return false;
    }
  }

  return true;
}

module.exports = same;
