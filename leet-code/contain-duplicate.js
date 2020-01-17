/**
 * Find if the arraay contains any duplicate
 * @param {int array} nums arrray of integers
 */
function containsDuplicate(nums) {
  if (nums.length === 0 || nums.length === 1) {
    return false;
  }

  var visited = {};

  for (let i = 0; i < nums.length; i++) {
    if (visited.hasOwnProperty(nums[i])) {
      return true;
    }

    visited[nums[i]] = true;
  }

  return false;
}

module.exports = containsDuplicate;
