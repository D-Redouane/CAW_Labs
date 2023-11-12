test('returns the first n elements of an array', () => {
  const array = [1, 2, 3, 4, 5];
  expect(first(array, 2)).toEqual([1, 2]);
});

// Implementation of the first function
function first(array, n) {
  if (array == null || n <= 0) return [];
  if (n == null) return array[0];
  return array.slice(0, n);
}
