class ArrayUtil {
  /**
   * Create an array filled with random values
   * @param {int} length of arrayr
   * @param {int} maximum value possible
   * @return an array filled with length numbers between 0 and maximum -
   */
  static randomIntArray(length, maximum) {
    var arr = [];
    for (let i = 0; i < length; i++) {
      arr.push(Math.floor(Math.random() * maximum));
    }

    return arr;
  }

  /**
   * Swap 2 entries of an array
   * @param {int} arr
   * @param {int} i first position to swap
   * @param {int} j second position to swap
   */
  static swap(arr, i, j) {
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
}

module.exports = ArrayUtil;
