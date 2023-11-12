// echo.test.js
const exf = require('./echo');

test('prints string 5 times', () => {
    const spy = jest.spyOn(console, 'log');
    exf('echo', 5);
    expect(spy).toHaveBeenCalledTimes(5);
    spy.mockRestore();
});

test('prints string 10 times', () => {
    const spy = jest.spyOn(console, 'log');
    exf('JS from server', 10);
    expect(spy).toHaveBeenCalledTimes(10);
    spy.mockRestore();
});
