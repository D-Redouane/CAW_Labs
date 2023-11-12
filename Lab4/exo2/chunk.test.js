// chunk.test.js

test('divides an array into several sub-arrays of predefined size', () => {
  const array = [1, 2, 3, 4, 5, 6, 7, 8];
  expect(chunk(array, 3)).toEqual([[1, 2, 3], [4, 5, 6], [7, 8]]);
});

// Implementation of the chunk function
function chunk(array, size) {
  var chunkedArr = [];
  var index = 0;
  while (index < array.length) {
    chunkedArr.push(array.slice(index, size + index));
    index += size;
  }
  return chunkedArr;
}
