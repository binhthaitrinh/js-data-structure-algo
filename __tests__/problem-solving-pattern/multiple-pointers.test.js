const {
  sumZero,
  sumZeroDumb,
  countUniqueValues,
  countUniqueValuePointer
} = require('../../problem-solving-pattern/multiple-pointers');

test('regular accept case', () => {
  expect(sumZero([-3, 2, 1, 0, 0, 2, 3, 4, 5, 6])).toStrictEqual([-3, 3]);
});

test('regular fail case', () => {
  expect(sumZero([-5, -4, -3, -2, -1, 6, 7, 8])).toStrictEqual(undefined);
});

test('positive fail case', () => {
  expect(sumZero([1, 2, 3])).toStrictEqual(undefined);
});

test('regular accept case', () => {
  expect(sumZeroDumb([-3, 2, 1, 0, 0, 2, 3, 4, 5, 6])).toStrictEqual([-3, 3]);
});

test('regular fail case', () => {
  expect(sumZeroDumb([-5, -4, -3, -2, -1, 6, 7, 8])).toStrictEqual(undefined);
});

test('positive fail case', () => {
  expect(sumZeroDumb([1, 2, 3])).toStrictEqual(undefined);
});

test('regular case', () => {
  expect(countUniqueValues([1, 1, 1, 1, 1, 1, 2])).toBe(2);
});

test('regular case 2', () => {
  expect(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])).toBe(7);
});

test('empty array', () => {
  expect(countUniqueValues([])).toBe(0);
});

test('regular case', () => {
  expect(countUniqueValuePointer([1, 1, 1, 1, 1, 1, 2])).toBe(2);
});

test('regular case 2', () => {
  expect(countUniqueValuePointer([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])).toBe(7);
});

test('empty array', () => {
  expect(countUniqueValuePointer([])).toBe(0);
});
