const {
  maxSubarraySum,
  maxSubarraySumDumb
} = require('../../problem-solving-pattern/sliding-window');

test('regular case with n = 2', () => {
  expect(maxSubarraySumDumb([1, 2, 5, 2, 8, 1, 5], 2)).toBe(10);
});

test('regular case with n = 4', () => {
  expect(maxSubarraySumDumb([1, 2, 5, 2, 8, 1, 5], 4)).toBe(17);
});

test('regular case with n = 2', () => {
  expect(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2)).toBe(10);
});

test('regular case with n = 4', () => {
  expect(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4)).toBe(17);
});
