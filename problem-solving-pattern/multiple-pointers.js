/**
 * MULTIPLE POINTER PATTERN
 * Search for a pair of value or something that meet a condition,
 * and need 2 references (var)
 * Usually a pair
 * Creating pointers that correspond to and index of position and move
 * towards the beginning, end or middle based on certain condition
 */

/**
 * Find first pair where the sum is 0
 * @param {int array} arr sorted Array
 * @return array that includes both values that sum to 0 or undefined if a pair
 * does not exist
 * Time Complexity: O(n)
 * Space Complexity:  O(1)
 */
function sumZero(arr) {
  var left = 0;
  var right = arr.length - 1;
  var sum;
  while (left < right) {
    sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else if (sum < 0) {
      left++;
    }
  }
}

function sumZeroDumb(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]];
      }
    }
  }
}

/**
 * counts the unique values in array
 * @param {int array} arr sorted Array
 * @return number of unique values in array
 */
function countUniqueValues(arr) {
  if (arr.length === 0) {
    return 0;
  } else if (arr.length === 1) {
    return 1;
  }
  var count = 1;
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] !== arr[i + 1]) {
      count++;
    }
  }

  return count;
}

function countUniqueValuePointer(arr) {
  if (arr.length === 0) return 0;
  var i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[j] !== arr[i]) {
      i++;
      arr[i] = arr[j];
    }
  }

  return i + 1;
}

module.exports = {
  sumZero,
  sumZeroDumb,
  countUniqueValues,
  countUniqueValuePointer
};
