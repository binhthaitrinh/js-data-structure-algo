const same = require('../../problem-solving-pattern/frequency-counter');
const isAnagram = require('../../problem-solving-pattern/isAnagram');

test('different length', () => {
  expect(same([1, 2, 3], [1, 9])).toBe(false);
});

test('regular accepted case', () => {
  expect(same([1, 2, 3], [4, 1, 9])).toBe(true);
});

test('not same frequency', () => {
  expect(same([1, 2, 1], [4, 4, 1])).toBe(false);
});

test('regular accepted case', () => {
  expect(same([1, 2, 3, 2, 2, 2, 2], [9, 1, 4, 4, 4, 4, 4])).toBe(true);
});

test('empty string', () => {
  expect(isAnagram('', '')).toBe(true);
});

test('regular false case', () => {
  expect(isAnagram('aaz', 'zza')).toBe(false);
});

test('regular acceptable case', () => {
  expect(isAnagram('anagram', 'nagaram')).toBe(true);
});
