import NumReverse from '../Code/Array/NumReverse.js'

test('NumReverse:', () => {
  expect(NumReverse(123)).toBe(321);
  expect(NumReverse(-123)).toBe(-321);
  expect(NumReverse(120)).toBe(21);
})