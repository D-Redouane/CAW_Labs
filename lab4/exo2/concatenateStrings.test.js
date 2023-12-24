// concatenateStrings.test.js

test('returns the concatenation of all elements of an array of strings', () => {
  const myColor = ['Red', 'Green', 'White', 'Black'];
  expect(concatenateStrings(myColor)).toBe('RedGreenWhiteBlack');
});

// Implementation of the concatenateStrings function
function concatenateStrings(array) {
  return array.join('');
}
