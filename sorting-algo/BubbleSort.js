const ArrayUtil = require('./ArrayUtil');

/**
 * Sorting an array using bubble sort algorithm
 * @param {[int]} arr array to be sorted
 * @return shorted array
 */
function bubbleSort(arr) {
  for (let i = arr.length - 1; i >= 0; i--) {
    for (let j = 0; j < i; j++) {
      if (arr[j] >= arr[j + 1]) {
        ArrayUtil.swap(arr, j, j + 1);
      }
    }
  }

  return arr;
}

function bubbleSortOptimized(arr) {
  for (let i = arr.length - 1; i >= 0; i--) {
    var didSwap = false;
    let j = 0;

    while (j < i) {
      if (arr[j] >= arr[j + 1]) {
        ArrayUtil.swap(arr, j, j + 1);
        didSwap = true;
      }
      j++;
    }

    if (!didSwap) break;
  }

  return arr;
}

var arr = ArrayUtil.randomIntArray(20, 1000);
console.log(bubbleSortOptimized(arr));

/*
10 2 4 6 1 2 5 7 3
*/
