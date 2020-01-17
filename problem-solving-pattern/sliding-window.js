/**
 * SLIDING WINDOW
 * This pattern involves creating a window which can either be an array of
 * number from one position to another
 *
 * Depending on certain condition, the window either increases or closes
 *
 * Very useful for keep track of a subset of data in array
 */

/**
 * Calculate maximum sum of n consecutive elements in array
 * @param {int arr} arr array of integer
 * @param {*} n a number of consecutive elements
 * Time complexity: O(n)
 */
function maxSubarraySum(arr, n) {
  var maxSum = 0;
  var tempSum = 0;
  if (arr.length < n) return null;

  for (let i = 0; i < n; i++) {
    maxSum += arr[i];
  }

  tempSum = maxSum;

  for (let i = n; i < arr.length; i++) {
    tempSum = tempSum - arr[i - n] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }

  return maxSum;
}

function maxSubarraySumDumb(arr, n) {
  if (n > arr.length) {
    return null;
  }

  var max = -Infinity;
  for (let i = 0; i < arr.length - n; i++) {
    var temp = 0;
    for (let j = 0; j < n; j++) {
      temp += arr[i + j];
    }
    if (temp > max) {
      max = temp;
    }
  }

  return max;
}

module.exports = {
  maxSubarraySum,
  maxSubarraySumDumb
};
