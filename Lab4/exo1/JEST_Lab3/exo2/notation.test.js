// notation.test.js
const mean = require('./notation');

test('calculates the mean of scores', () => {
    const scores = [85, 90, 92, 88, 95];
    const result = mean(scores);
    expect(result).toBe(90);
});