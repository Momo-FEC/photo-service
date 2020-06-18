const index = require('./index')

test('check the server', () => {
  expect(index(1, 2)).toBe(3);
})