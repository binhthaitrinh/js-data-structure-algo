/**
 * Given an array of int, return indices of 2 numbers such that they add up
 * to a specific target
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

function twoSum(nums, target) {
  var mapValueToIndex = {};

  for (let i = 0; i < nums.length; i++) {
    let comp = target - nums[i];
    if (mapValueToIndex.hasOwnProperty(comp)) {
      return [mapValueToIndex[comp], i];
    }
    mapValueToIndex[nums[i]] = i;
  }
}

module.exports = twoSum;
