test('returns the last n elements of an array', () => {
  const array = [1, 2, 3, 4, 5];
  expect(last(array, 2)).toEqual([4, 5]);
});

// Implementation of the last function
function last(array, n) {
  if (array == null) return [];
  if (n == null) return array[array.length - 1];
  return array.slice(Math.max(array.length - n, 0));
}
