const twoSum = require('../leet-code/two-sum');

test('regular case', () => {
  expect(twoSum([2, 7, 11, 15], 9)).toStrictEqual([0, 1]);
});

test('solution at the end', () => {
  expect(twoSum([1, 2, 3, 4, 5], 9)).toStrictEqual([3, 4]);
});
