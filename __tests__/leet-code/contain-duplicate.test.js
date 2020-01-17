const containsDuplicate = require('../../leet-code/contain-duplicate');

test('empty array', () => {
  expect(containsDuplicate([])).toBe(false);
});

test('array with 1 element', () => {
  expect(containsDuplicate([1])).toBe(false);
});

test('regular case', () => {
  expect(containsDuplicate([1, 2, 3, 1])).toBe(true);
});

test('regular false case', () => {
  expect(containsDuplicate([1, 2, 3, 4])).toBe(false);
});
