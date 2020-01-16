const ArrayUtil = require('./ArrayUtil');

class SelectionSorter {
  /**
   * sort an array, using selection sort
   * @param {*} arr array to sort
   * @return sorted array
   */
  static sort(arr) {
    for (let i = 0; i < arr.length; i++) {
      let minPos = findMinPos(i);
      ArrayUtil.swap(arr, minPos, i);
    }

    function findMinPos(startPos) {
      var minPos = startPos;
      for (let i = startPos; i < arr.length; i++) {
        if (arr[i] < arr[minPos]) {
          minPos = i;
        }
      }

      return minPos;
    }

    return arr;
  }
}

var arr = ArrayUtil.randomIntArray(20, 100);
console.log(SelectionSorter.sort(arr));
