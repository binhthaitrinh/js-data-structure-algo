/**
 *  Iterative Approach to Binary Search
 * @param {[int]} arr sorted array of int
 * @param {int} target number to be found
 * @return index of target in arr
 */
function BinarySearch(arr, target) {
  var start = 0;
  var end = arr.length - 1;
  var mid = Math.floor((start + end) / 2);
  while (start < end) {
    if (arr[mid] < target) {
      start = mid + 1;
    } else if (arr[mid] > target) {
      end = mid - 1;
    } else if (arr[mid] === target) {
      return mid;
    }
    mid = Math.floor((start + end) / 2);
  }

  if (arr[mid] === target) {
    return mid;
  }

  return -1;
}

/**
 * Recursive Approach to Binary Search
 * @param {[int]} arr sorted array to be searched
 * @param {int} target number to be found
 * @return index at which value occurs, or -1 if not found
 */
function BinarySearchRecursive(arr, target) {
  var start = 0;
  var end = arr.length - 1;
  return BinarySearchHelper(arr, start, end, target);
}

function BinarySearchHelper(arr, start, end, target) {
  if (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      return BinarySearchHelper(arr, mid + 1, end, target);
    } else if (arr[mid] > target) {
      return BinarySearchHelper(arr, start, mid - 1, target);
    }
  } else {
    return -1;
  }
}
