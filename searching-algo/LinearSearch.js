/**
 * Search for a number in an array by going through each element
 * @param {[int]} arr array of integers
 * @param {int} target nuber to be search
 * @return index of found number, or -1 if not found
 */
function LinearSearch(arr, target) {
  var found = false;
  let i = 0;
  while (i < arr.length && !found) {
    if (arr[i] === target) {
      found = true;
    }
    i++;
  }

  if (found) return i - 1;
  else return -1;
}

console.log(arr);
console.log(LinearSearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 12));
